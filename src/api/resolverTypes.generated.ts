import { LOCATION } from 'local/domain/types';
import Location = LOCATION;
import { GraphQLResolveInfo } from 'graphql';
import { Context } from 'local/api/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GraphQLChat = {
  __typename?: 'Chat';
  id: Scalars['String'];
  messages?: Maybe<Array<GraphQLMessage>>;
  zoo?: Maybe<GraphQLZoo>;
};

export { Location };

export type GraphQLMessage = {
  __typename?: 'Message';
  content?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  poster: Scalars['String'];
};

export type GraphQLMutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['Boolean']>;
  createUser?: Maybe<GraphQLUser>;
  postMessage?: Maybe<GraphQLMessage>;
};


export type GraphQLMutationCreateUserArgs = {
  name: Scalars['String'];
  zooId: Scalars['String'];
};


export type GraphQLMutationPostMessageArgs = {
  chatId: Scalars['String'];
  content: Scalars['String'];
  poster: Scalars['String'];
};

export type GraphQLQuery = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['Boolean']>;
  chat?: Maybe<GraphQLChat>;
  user?: Maybe<GraphQLUser>;
  zoo?: Maybe<GraphQLZoo>;
  zoos?: Maybe<Array<GraphQLZoo>>;
};


export type GraphQLQueryChatArgs = {
  id: Scalars['String'];
};


export type GraphQLQueryUserArgs = {
  id: Scalars['String'];
};


export type GraphQLQueryZooArgs = {
  location: Location;
};

export type GraphQLSubscription = {
  __typename?: 'Subscription';
  _empty?: Maybe<Scalars['Boolean']>;
  messagePosted?: Maybe<GraphQLMessage>;
};

export type GraphQLUser = {
  __typename?: 'User';
  chat?: Maybe<GraphQLChat>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  zoo?: Maybe<GraphQLZoo>;
};

export type GraphQLZoo = {
  __typename?: 'Zoo';
  id: Scalars['String'];
  location: Location;
  name?: Maybe<Scalars['String']>;
  visitors?: Maybe<Array<Maybe<GraphQLUser>>>;
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Chat: ResolverTypeWrapper<GraphQLChat>;
  Location: LOCATION;
  Message: ResolverTypeWrapper<GraphQLMessage>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<GraphQLUser>;
  Zoo: ResolverTypeWrapper<GraphQLZoo>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type GraphQLResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Chat: GraphQLChat;
  Message: GraphQLMessage;
  Mutation: {};
  Query: {};
  String: Scalars['String'];
  Subscription: {};
  User: GraphQLUser;
  Zoo: GraphQLZoo;
}>;

export type GraphQLChatResolvers<ContextType = Context, ParentType extends GraphQLResolversParentTypes['Chat'] = GraphQLResolversParentTypes['Chat']> = ResolversObject<{
  id?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  messages?: Resolver<Maybe<Array<GraphQLResolversTypes['Message']>>, ParentType, ContextType>;
  zoo?: Resolver<Maybe<GraphQLResolversTypes['Zoo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GraphQLLocationResolvers = EnumResolverSignature<{ CENTRE?: any, EAST?: any, WEST?: any }, GraphQLResolversTypes['Location']>;

export type GraphQLMessageResolvers<ContextType = Context, ParentType extends GraphQLResolversParentTypes['Message'] = GraphQLResolversParentTypes['Message']> = ResolversObject<{
  content?: Resolver<Maybe<GraphQLResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  poster?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GraphQLMutationResolvers<ContextType = Context, ParentType extends GraphQLResolversParentTypes['Mutation'] = GraphQLResolversParentTypes['Mutation']> = ResolversObject<{
  _empty?: Resolver<Maybe<GraphQLResolversTypes['Boolean']>, ParentType, ContextType>;
  createUser?: Resolver<Maybe<GraphQLResolversTypes['User']>, ParentType, ContextType, RequireFields<GraphQLMutationCreateUserArgs, 'name' | 'zooId'>>;
  postMessage?: Resolver<Maybe<GraphQLResolversTypes['Message']>, ParentType, ContextType, RequireFields<GraphQLMutationPostMessageArgs, 'chatId' | 'content' | 'poster'>>;
}>;

export type GraphQLQueryResolvers<ContextType = Context, ParentType extends GraphQLResolversParentTypes['Query'] = GraphQLResolversParentTypes['Query']> = ResolversObject<{
  _empty?: Resolver<Maybe<GraphQLResolversTypes['Boolean']>, ParentType, ContextType>;
  chat?: Resolver<Maybe<GraphQLResolversTypes['Chat']>, ParentType, ContextType, RequireFields<GraphQLQueryChatArgs, 'id'>>;
  user?: Resolver<Maybe<GraphQLResolversTypes['User']>, ParentType, ContextType, RequireFields<GraphQLQueryUserArgs, 'id'>>;
  zoo?: Resolver<Maybe<GraphQLResolversTypes['Zoo']>, ParentType, ContextType, RequireFields<GraphQLQueryZooArgs, 'location'>>;
  zoos?: Resolver<Maybe<Array<GraphQLResolversTypes['Zoo']>>, ParentType, ContextType>;
}>;

export type GraphQLSubscriptionResolvers<ContextType = Context, ParentType extends GraphQLResolversParentTypes['Subscription'] = GraphQLResolversParentTypes['Subscription']> = ResolversObject<{
  _empty?: SubscriptionResolver<Maybe<GraphQLResolversTypes['Boolean']>, "_empty", ParentType, ContextType>;
  messagePosted?: SubscriptionResolver<Maybe<GraphQLResolversTypes['Message']>, "messagePosted", ParentType, ContextType>;
}>;

export type GraphQLUserResolvers<ContextType = Context, ParentType extends GraphQLResolversParentTypes['User'] = GraphQLResolversParentTypes['User']> = ResolversObject<{
  chat?: Resolver<Maybe<GraphQLResolversTypes['Chat']>, ParentType, ContextType>;
  id?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<GraphQLResolversTypes['String']>, ParentType, ContextType>;
  zoo?: Resolver<Maybe<GraphQLResolversTypes['Zoo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GraphQLZooResolvers<ContextType = Context, ParentType extends GraphQLResolversParentTypes['Zoo'] = GraphQLResolversParentTypes['Zoo']> = ResolversObject<{
  id?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<GraphQLResolversTypes['Location'], ParentType, ContextType>;
  name?: Resolver<Maybe<GraphQLResolversTypes['String']>, ParentType, ContextType>;
  visitors?: Resolver<Maybe<Array<Maybe<GraphQLResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GraphQLResolvers<ContextType = Context> = ResolversObject<{
  Chat?: GraphQLChatResolvers<ContextType>;
  Location?: GraphQLLocationResolvers;
  Message?: GraphQLMessageResolvers<ContextType>;
  Mutation?: GraphQLMutationResolvers<ContextType>;
  Query?: GraphQLQueryResolvers<ContextType>;
  Subscription?: GraphQLSubscriptionResolvers<ContextType>;
  User?: GraphQLUserResolvers<ContextType>;
  Zoo?: GraphQLZooResolvers<ContextType>;
}>;

