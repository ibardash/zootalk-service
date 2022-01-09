import { app } from "local/app/app";
import { GraphqlServer } from "local/app/GraphqlServer";
import { config } from "local/app/config";
import { zootalkSchema } from "local/api/zootalkSchema";

const graphqlServer = new GraphqlServer(zootalkSchema, app);

graphqlServer.start(config.port);
