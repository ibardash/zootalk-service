import { gql } from "apollo-server-koa";
import { GraphQLResolvers } from "local/api/resolverTypes.generated";
import {
  createUser,
  findUserById,
  findUserForMessage,
  findUsersByZooId,
} from "local/domain/repository";

export const typeDefs = gql`
  type User {
    id: String!
    name: String
    avatar: String
  }

  extend type Message {
    poster: User
  }

  extend type Zoo {
    visitors: [User]
  }

  extend type Query {
    user(id: String!): User
  }

  extend type Mutation {
    createUser(name: String!, zooId: String!, avatar: String): User
  }
`;

export const resolvers: GraphQLResolvers = {
  Zoo: {
    visitors({ id }) {
      return findUsersByZooId(id);
    },
  },
  Message: {
    poster({ id }) {
      return findUserForMessage(id);
    },
  },
  Query: {
    user(_parent, { id }) {
      return findUserById(id);
    },
  },
  Mutation: {
    createUser(_parent, args) {
      return createUser(args);
    },
  },
};
