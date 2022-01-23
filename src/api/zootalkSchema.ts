import { makeExecutableSchema } from "@graphql-tools/schema";
import { merge } from "lodash";
import {
  typeDefs as baseTypeDefs,
  resolvers as baseResolvers,
} from "./modules/base";
import {
  typeDefs as zooTypeDefs,
  resolvers as zooResolvers,
} from "./modules/zoo";
import {
  typeDefs as userTypeDefs,
  resolvers as userResolvers,
} from "./modules/user";
import {
  typeDefs as messageTypeDefs,
  resolvers as messageResolvers,
} from "./modules/message";
import {
  typeDefs as chatTypeDefs,
  resolvers as chatResolvers,
} from "./modules/chat";

const typeDefs = [
  baseTypeDefs,
  zooTypeDefs,
  userTypeDefs,
  messageTypeDefs,
  chatTypeDefs,
];

const resolvers = merge(
  baseResolvers,
  zooResolvers,
  userResolvers,
  messageResolvers,
  chatResolvers
);

export const zootalkSchema = makeExecutableSchema({ typeDefs, resolvers });
