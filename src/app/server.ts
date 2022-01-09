import { app } from "local/app/app";
import { GraphqlServer } from "local/app/GraphqlServer";
import { config } from "local/app/config";
import { resolvers, typeDefs } from "local/api/zootalkSchema";

const graphqlServer = new GraphqlServer(typeDefs, resolvers, app);

graphqlServer.start(config.port);
