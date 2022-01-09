import { ApolloServer } from "apollo-server-koa";
import Koa from "koa";
import { IResolvers } from "@graphql-tools/utils";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import { DocumentNode } from "graphql";
import { createServer } from "http";
import { execute, subscribe } from "graphql";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { makeExecutableSchema } from "@graphql-tools/schema";

export class GraphqlServer {
  protected apolloServer: ApolloServer;
  protected httpServer: http.Server;
  protected app: Koa<Koa.DefaultState, Koa.DefaultContext>;

  constructor(
    typeDefs: string | DocumentNode[],
    resolvers: IResolvers<any, any, Record<string, any>, any>,
    app: Koa<Koa.DefaultState, Koa.DefaultContext>
  ) {
    const schema = makeExecutableSchema({ typeDefs, resolvers });
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
      plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer: this.httpServer }),
        {
          async serverWillStart() {
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

  async start(port: string): Promise<void> {
    await this.apolloServer.start();
    this.apolloServer.applyMiddleware({ app: this.app });
    this.httpServer.on("request", this.app.callback());

    await new Promise<void>((resolve) =>
      this.httpServer.listen({ port }, resolve)
    );

    console.log(
      `🚀 Server ready at http://localhost:${port}${this.apolloServer.graphqlPath}`
    );
  }
}
