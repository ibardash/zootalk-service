import { ApolloServer } from "apollo-server-koa";
import Koa from "koa";
import { IResolvers } from "@graphql-tools/utils";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import { DocumentNode } from "graphql";

export class GraphqlServer {
  protected apolloServer: ApolloServer;
  protected httpServer: http.Server;

  constructor(
    typeDefs: string | DocumentNode[],
    resolvers: IResolvers<any, any, Record<string, any>, any>
  ) {
    this.httpServer = http.createServer();
    this.apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer: this.httpServer }),
      ],
    });
  }

  async start(
    app: Koa<Koa.DefaultState, Koa.DefaultContext>,
    port: string
  ): Promise<void> {
    await this.apolloServer.start();
    this.apolloServer.applyMiddleware({ app });
    this.httpServer.on("request", app.callback());

    await new Promise<void>((resolve) =>
      this.httpServer.listen({ port }, resolve)
    );

    console.log(
      `🚀 Server ready at http://localhost:${port}${this.apolloServer.graphqlPath}`
    );
  }
}
