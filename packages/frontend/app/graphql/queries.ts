/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getOrder = /* GraphQL */ `query GetOrder($id: ID!) {
  getOrder(id: $id) {
    id
    products {
      name
      value
      quantity
      __typename
    }
    customerID
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetOrderQueryVariables, APITypes.GetOrderQuery>;
export const listOrders = /* GraphQL */ `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      customerID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
export const getSettings = /* GraphQL */ `query GetSettings($id: ID!) {
  getSettings(id: $id) {
    id
    enableWhatsapp
    enableSMS
    enableEmail
    currency
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSettingsQueryVariables,
  APITypes.GetSettingsQuery
>;
export const listSettings = /* GraphQL */ `query ListSettings(
  $filter: ModelSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      enableWhatsapp
      enableSMS
      enableEmail
      currency
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSettingsQueryVariables,
  APITypes.ListSettingsQuery
>;
export const getProfile = /* GraphQL */ `query GetProfile($id: ID!) {
  getProfile(id: $id) {
    id
    name
    phone
    email
    logo
    Settings {
      id
      enableWhatsapp
      enableSMS
      enableEmail
      currency
      createdAt
      updatedAt
      owner
      __typename
    }
    Campaigns {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    profileSettingsId
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProfileQueryVariables,
  APITypes.GetProfileQuery
>;
export const listProfiles = /* GraphQL */ `query ListProfiles(
  $filter: ModelProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      phone
      email
      logo
      createdAt
      updatedAt
      profileSettingsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProfilesQueryVariables,
  APITypes.ListProfilesQuery
>;
export const getCustomer = /* GraphQL */ `query GetCustomer($id: ID!) {
  getCustomer(id: $id) {
    id
    name
    phone
    email
    points
    history {
      campaignId
      value
      validUntil
      __typename
    }
    Orders {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCustomerQueryVariables,
  APITypes.GetCustomerQuery
>;
export const listCustomers = /* GraphQL */ `query ListCustomers(
  $filter: ModelCustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      phone
      email
      points
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCustomersQueryVariables,
  APITypes.ListCustomersQuery
>;
export const getCampaign = /* GraphQL */ `query GetCampaign($id: ID!) {
  getCampaign(id: $id) {
    id
    name
    startsAt
    finishesAt
    validFrom
    validUntil
    minValue
    bonus
    profileID
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCampaignQueryVariables,
  APITypes.GetCampaignQuery
>;
export const listCampaigns = /* GraphQL */ `query ListCampaigns(
  $filter: ModelCampaignFilterInput
  $limit: Int
  $nextToken: String
) {
  listCampaigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      startsAt
      finishesAt
      validFrom
      validUntil
      minValue
      bonus
      profileID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCampaignsQueryVariables,
  APITypes.ListCampaignsQuery
>;
export const ordersByCustomerID = /* GraphQL */ `query OrdersByCustomerID(
  $customerID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  ordersByCustomerID(
    customerID: $customerID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      customerID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrdersByCustomerIDQueryVariables,
  APITypes.OrdersByCustomerIDQuery
>;
export const campaignsByProfileID = /* GraphQL */ `query CampaignsByProfileID(
  $profileID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCampaignFilterInput
  $limit: Int
  $nextToken: String
) {
  campaignsByProfileID(
    profileID: $profileID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      startsAt
      finishesAt
      validFrom
      validUntil
      minValue
      bonus
      profileID
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CampaignsByProfileIDQueryVariables,
  APITypes.CampaignsByProfileIDQuery
>;
