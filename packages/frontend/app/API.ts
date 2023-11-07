/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  description?: string | null,
  done?: boolean | null,
};

export type ModelTodoConditionInput = {
  description?: ModelStringInput | null,
  done?: ModelBooleanInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  description?: string | null,
  done?: boolean | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateTodoInput = {
  id: string,
  description?: string | null,
  done?: boolean | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateProfileInput = {
  id?: string | null,
  name?: string | null,
  age?: number | null,
};

export type ModelProfileConditionInput = {
  name?: ModelStringInput | null,
  age?: ModelIntInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Profile = {
  __typename: "Profile",
  id: string,
  name?: string | null,
  age?: number | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateProfileInput = {
  id: string,
  name?: string | null,
  age?: number | null,
};

export type DeleteProfileInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  done?: ModelBooleanInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelProfileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  age?: ModelIntInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
};

export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items:  Array<Profile | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  done?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfileFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    description?: string | null,
    done?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    description?: string | null,
    done?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    description?: string | null,
    done?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateProfileMutationVariables = {
  input: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile?:  {
    __typename: "Profile",
    id: string,
    name?: string | null,
    age?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "Profile",
    id: string,
    name?: string | null,
    age?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "Profile",
    id: string,
    name?: string | null,
    age?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    description?: string | null,
    done?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      description?: string | null,
      done?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProfileQueryVariables = {
  id: string,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "Profile",
    id: string,
    name?: string | null,
    age?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfilesQuery = {
  listProfiles?:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      id: string,
      name?: string | null,
      age?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    description?: string | null,
    done?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    description?: string | null,
    done?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    description?: string | null,
    done?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile?:  {
    __typename: "Profile",
    id: string,
    name?: string | null,
    age?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile?:  {
    __typename: "Profile",
    id: string,
    name?: string | null,
    age?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile?:  {
    __typename: "Profile",
    id: string,
    name?: string | null,
    age?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
