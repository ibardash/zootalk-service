import { GraphQLResolveInfo } from 'graphql';
import { Context } from 'local/api/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GraphQLAuthor = {
  __typename?: 'Author';
  books?: Maybe<Array<Maybe<GraphQLBook>>>;
  name?: Maybe<Scalars['String']>;
};

export type GraphQLBook = {
  __typename?: 'Book';
  author?: Maybe<GraphQLAuthor>;
  title?: Maybe<Scalars['String']>;
};

export type GraphQLMutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['Boolean']>;
  sendMessage?: Maybe<Scalars['String']>;
};


export type GraphQLMutationSendMessageArgs = {
  message: Scalars['String'];
};

export type GraphQLQuery = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['Boolean']>;
  messages: Array<Scalars['String']>;
};

export type GraphQLSubscription = {
  __typename?: 'Subscription';
  _empty?: Maybe<Scalars['Boolean']>;
  messagePosted?: Maybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type GraphQLResolversTypes = ResolversObject<{
  Author: ResolverTypeWrapper<GraphQLAuthor>;
  Book: ResolverTypeWrapper<GraphQLBook>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type GraphQLResolversParentTypes = ResolversObject<{
  Author: GraphQLAuthor;
  Book: GraphQLBook;
  Boolean: Scalars['Boolean'];
  Mutation: {};
  Query: {};
  String: Scalars['String'];
  Subscription: {};
}>;

export type GraphQLAuthorResolvers<ContextType = Context, ParentType extends GraphQLResolversParentTypes['Author'] = GraphQLResolversParentTypes['Author']> = ResolversObject<{
  books?: Resolver<Maybe<Array<Maybe<GraphQLResolversTypes['Book']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<GraphQLResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GraphQLBookResolvers<ContextType = Context, ParentType extends GraphQLResolversParentTypes['Book'] = GraphQLResolversParentTypes['Book']> = ResolversObject<{
  author?: Resolver<Maybe<GraphQLResolversTypes['Author']>, ParentType, ContextType>;
  title?: Resolver<Maybe<GraphQLResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GraphQLMutationResolvers<ContextType = Context, ParentType extends GraphQLResolversParentTypes['Mutation'] = GraphQLResolversParentTypes['Mutation']> = ResolversObject<{
  _empty?: Resolver<Maybe<GraphQLResolversTypes['Boolean']>, ParentType, ContextType>;
  sendMessage?: Resolver<Maybe<GraphQLResolversTypes['String']>, ParentType, ContextType, RequireFields<GraphQLMutationSendMessageArgs, 'message'>>;
}>;

export type GraphQLQueryResolvers<ContextType = Context, ParentType extends GraphQLResolversParentTypes['Query'] = GraphQLResolversParentTypes['Query']> = ResolversObject<{
  _empty?: Resolver<Maybe<GraphQLResolversTypes['Boolean']>, ParentType, ContextType>;
  messages?: Resolver<Array<GraphQLResolversTypes['String']>, ParentType, ContextType>;
}>;

export type GraphQLSubscriptionResolvers<ContextType = Context, ParentType extends GraphQLResolversParentTypes['Subscription'] = GraphQLResolversParentTypes['Subscription']> = ResolversObject<{
  _empty?: SubscriptionResolver<Maybe<GraphQLResolversTypes['Boolean']>, "_empty", ParentType, ContextType>;
  messagePosted?: SubscriptionResolver<Maybe<GraphQLResolversTypes['String']>, "messagePosted", ParentType, ContextType>;
}>;

export type GraphQLResolvers<ContextType = Context> = ResolversObject<{
  Author?: GraphQLAuthorResolvers<ContextType>;
  Book?: GraphQLBookResolvers<ContextType>;
  Mutation?: GraphQLMutationResolvers<ContextType>;
  Query?: GraphQLQueryResolvers<ContextType>;
  Subscription?: GraphQLSubscriptionResolvers<ContextType>;
}>;

