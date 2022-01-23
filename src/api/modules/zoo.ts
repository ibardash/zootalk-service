import { gql } from "apollo-server-koa";
import { GraphQLResolvers } from "local/api/resolverTypes.generated";
import {
  findZooByLocation,
  findZooForChat,
  findZooForUser,
  listAllZoos,
} from "local/domain/repository";

export const typeDefs = gql`
  type Zoo {
    id: String!
    name: String
    location: Location!
  }

  extend type User {
    zoo: Zoo
  }

  extend type Chat {
    zoo: Zoo
  }

  extend type Query {
    zoo(location: Location!): Zoo
    zoos: [Zoo!]
  }
`;

export const resolvers: GraphQLResolvers = {
  User: {
    zoo({ id }) {
      return findZooForUser(id);
    },
  },
  Chat: {
    zoo({ id }) {
      return findZooForChat(id);
    },
  },
  Query: {
    zoo(_parent, { location }) {
      return findZooByLocation(location);
    },
    zoos(_parent) {
      return listAllZoos();
    },
  },
};
