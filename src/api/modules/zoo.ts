import { gql } from "apollo-server-koa";
import { GraphQLResolvers } from "local/api/resolverTypes.generated";
import { PubSub } from "graphql-subscriptions";

const pubsub = new PubSub();

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

  extend type Subscription {
    messagePosted: String
  }
`;

const messages: string[] = [];

export const resolvers: GraphQLResolvers = {
  Query: {
    messages() {
      return messages;
    },
  },
  Mutation: {
    sendMessage(_parent, { message }) {
      messages.push(message);
      pubsub.publish("MESSAGE_POSTED", {
        messagePosted: message,
      });

      return message;
    },
  },
  Subscription: {
    messagePosted: {
      // error due to: https://github.com/dotansimha/graphql-code-generator/issues/7197
      subscribe: () => pubsub.asyncIterator(["MESSAGE_POSTED"]),
    },
  },
};
