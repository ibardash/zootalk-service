import { gql } from "apollo-server-koa";

export const typeDefs = gql`
  type Subscription {
    _empty: Boolean
  }

  type Query {
    _empty: Boolean
  }

  type Mutation {
    _empty: Boolean
  }
`;

export const resolvers = {};
