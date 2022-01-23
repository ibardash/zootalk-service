import { gql } from "apollo-server-koa";
import { GraphQLResolvers } from "local/api/resolverTypes.generated";
import { PubSub } from "graphql-subscriptions";
import { createMessage, findMessagesByChatId } from "local/domain/repository";

const pubsub = new PubSub();

export const typeDefs = gql`
  type Message {
    id: String!
    content: String
    poster: String!
  }

  extend type Chat {
    messages: [Message!]
  }

  extend type Mutation {
    postMessage(content: String!, poster: String!, chatId: String!): Message
  }

  extend type Subscription {
    messagePosted: Message
  }
`;

export const resolvers: GraphQLResolvers = {
  Chat: {
    messages({ id }) {
      return findMessagesByChatId(id);
    },
  },
  Mutation: {
    postMessage(_parent, args) {
      const message = createMessage(args);

      pubsub.publish("MESSAGE_POSTED", {
        messagePosted: message,
      });

      return message;
    },
  },
  Subscription: {
    messagePosted: {
      // TS error due to: https://github.com/dotansimha/graphql-code-generator/issues/7197
      subscribe: () => pubsub.asyncIterator(["MESSAGE_POSTED"]),
    },
  },
};
