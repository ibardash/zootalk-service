import { gql } from "apollo-server-koa";
import { GraphQLResolvers } from "local/api/resolverTypes.generated";
import {
  findZooForChat,
  findZooForUser,
  listAllZoos,
} from "local/domain/repository";

export const typeDefs = gql`
  """
  A representation of Zoo
  """
  type Zoo {
    """
    uuid format
    """
    id: ID!
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
    zoos() {
      return listAllZoos();
    },
  },
};
