import { gql } from "apollo-server-koa";
import { GraphQLResolvers } from "local/api/resolverTypes.generated";
import {
  createUser,
  findUserById,
  findUsersByZooId,
} from "local/domain/repository";

export const typeDefs = gql`
  type User {
    id: String!
    name: String
  }

  extend type Zoo {
    visitors: [User]
  }

  extend type Query {
    user(id: String!): User
  }

  extend type Mutation {
    createUser(name: String!, zooId: String!): User
  }
`;

export const resolvers: GraphQLResolvers = {
  Zoo: {
    visitors({ id }) {
      return findUsersByZooId(id);
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
