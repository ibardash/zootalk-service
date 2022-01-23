import { gql } from "apollo-server-koa";

export const typeDefs = gql`
  type Query {
    _empty: Boolean
  }

  type Mutation {
    _empty: Boolean
  }

  type Subscription {
    _empty: Boolean
  }

  enum Location {
    WEST
    CENTRE
    EAST
  }
`;

export const resolvers = {};
