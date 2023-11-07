/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $owner: String
) {
  onCreateTodo(filter: $filter, owner: $owner) {
    id
    description
    done
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $owner: String
) {
  onUpdateTodo(filter: $filter, owner: $owner) {
    id
    description
    done
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $owner: String
) {
  onDeleteTodo(filter: $filter, owner: $owner) {
    id
    description
    done
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onCreateProfile = /* GraphQL */ `subscription OnCreateProfile(
  $filter: ModelSubscriptionProfileFilterInput
  $owner: String
) {
  onCreateProfile(filter: $filter, owner: $owner) {
    id
    name
    age
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProfileSubscriptionVariables,
  APITypes.OnCreateProfileSubscription
>;
export const onUpdateProfile = /* GraphQL */ `subscription OnUpdateProfile(
  $filter: ModelSubscriptionProfileFilterInput
  $owner: String
) {
  onUpdateProfile(filter: $filter, owner: $owner) {
    id
    name
    age
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProfileSubscriptionVariables,
  APITypes.OnUpdateProfileSubscription
>;
export const onDeleteProfile = /* GraphQL */ `subscription OnDeleteProfile(
  $filter: ModelSubscriptionProfileFilterInput
  $owner: String
) {
  onDeleteProfile(filter: $filter, owner: $owner) {
    id
    name
    age
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProfileSubscriptionVariables,
  APITypes.OnDeleteProfileSubscription
>;
