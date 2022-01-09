import { merge } from "lodash";
import {
  typeDefs as baseTypeDefs,
  resolvers as baseResolvers,
} from "./modules/base";
import {
  typeDefs as zooTypeDefs,
  resolvers as zooResolvers,
} from "./modules/zoo";

export const typeDefs = [baseTypeDefs, zooTypeDefs];
export const resolvers = merge(baseResolvers, zooResolvers);
