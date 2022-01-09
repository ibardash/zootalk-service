import { merge } from "lodash";
import {
  typeDefs as baseTypeDefs,
  resolvers as baseResolvers,
} from "./modules/base";
import {
  typeDefs as zooTypeDefs,
  resolvers as zooResolvers,
} from "./modules/zoo";
import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefs = [baseTypeDefs, zooTypeDefs];
const resolvers = merge(baseResolvers, zooResolvers);

export const zootalkSchema = makeExecutableSchema({ typeDefs, resolvers });
