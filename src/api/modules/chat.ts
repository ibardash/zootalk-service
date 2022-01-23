import { gql } from "apollo-server-koa";
import { GraphQLResolvers } from "local/api/resolverTypes.generated";
import { findChatForUser } from "local/domain/repository";

export const typeDefs = gql`
  type Chat {
    id: String!
  }

  extend type User {
    chat: Chat
  }
`;

export const resolvers: GraphQLResolvers = {
  User: {
    chat({ id }) {
      return findChatForUser(id);
    },
  },
};
