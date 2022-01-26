import { gql } from "apollo-server-koa";

export const typeDefs = gql`
  type Query
  type Mutation
  type Subscription

  enum Location {
    WEST
    CENTRE
    EAST
  }
`;

export const resolvers = {};
