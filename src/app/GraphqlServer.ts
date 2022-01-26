import { ApolloServer } from "apollo-server-koa";
import Koa from "koa";
import http from "http";
import { GraphQLSchema } from "graphql";
import { createServer } from "http";
import { execute, subscribe } from "graphql";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { Context } from "local/domain/types";

interface ContextArgs {
  ctx: {
    request: {
      token: string;
    };
  };

  connection?: { context: Context };
}

export class GraphqlServer {
  protected apolloServer: ApolloServer;
  protected httpServer: http.Server;
  protected app: Koa<Koa.DefaultState, Koa.DefaultContext>;

  constructor(
    schema: GraphQLSchema,
    app: Koa<Koa.DefaultState, Koa.DefaultContext>
  ) {
    this.app = app;
    this.httpServer = createServer(app.callback());
    const subscriptionServer = SubscriptionServer.create(
      {
        schema,
        execute,
        subscribe,
      },
      {
        server: this.httpServer,
        path: "/graphql",
      }
    );

    this.apolloServer = new ApolloServer({
      schema,
      context: this.context,
      plugins: [
        {
          // event fires when Apollo Server is preparing to start up
          async serverWillStart() {
            // event fires when Apollo Server is starting to shut down
            // this hook is designed to allow you to stop accepting new connections
            // and close existing connections.
            return {
              async drainServer() {
                subscriptionServer.close();
              },
            };
          },
        },
      ],
    });
  }

  context({ ctx, connection }: ContextArgs): Context {
    const dummyToken = `This is a token generated at: ${new Date()}`;

    if (connection) {
      // Operation is a Subscription
      // Obtain connectionParams-provided token from connection.context
      const token = connection.context.token || dummyToken;
      return { token };
    }

    // Operation is a Query/Mutation
    // Obtain header-provided token
    const token = ctx.request.token || dummyToken;
    return { token };
  }

  async start(port: string): Promise<void> {
    await this.apolloServer.start();
    this.apolloServer.applyMiddleware({ app: this.app });
    this.httpServer.listen({ port });

    console.log(
      `🚀 Server ready at http://localhost:${port}${this.apolloServer.graphqlPath}`
    );
  }
}
