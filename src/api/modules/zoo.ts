import { gql } from "apollo-server-koa";
import { GraphQLResolvers } from "local/api/resolverTypes.generated";

export const typeDefs = gql`
  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }

  extend type Query {
    messages: [String!]!
  }

  extend type Mutation {
    sendMessage(message: String!): String
  }
`;

const messages: string[] = [];

export const resolvers: GraphQLResolvers = {
  Query: {
    messages(): string[] {
      return messages;
    },
  },
  Mutation: {
    sendMessage(_parent, { message }): string {
      messages.push(message);
      return message;
    },
  },
};
