/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateOrder = /* GraphQL */ `subscription OnCreateOrder(
  $filter: ModelSubscriptionOrderFilterInput
  $owner: String
) {
  onCreateOrder(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrderSubscriptionVariables,
  APITypes.OnCreateOrderSubscription
>;
export const onUpdateOrder = /* GraphQL */ `subscription OnUpdateOrder(
  $filter: ModelSubscriptionOrderFilterInput
  $owner: String
) {
  onUpdateOrder(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrderSubscriptionVariables,
  APITypes.OnUpdateOrderSubscription
>;
export const onDeleteOrder = /* GraphQL */ `subscription OnDeleteOrder(
  $filter: ModelSubscriptionOrderFilterInput
  $owner: String
) {
  onDeleteOrder(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrderSubscriptionVariables,
  APITypes.OnDeleteOrderSubscription
>;
export const onCreateSettings = /* GraphQL */ `subscription OnCreateSettings(
  $filter: ModelSubscriptionSettingsFilterInput
  $owner: String
) {
  onCreateSettings(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSettingsSubscriptionVariables,
  APITypes.OnCreateSettingsSubscription
>;
export const onUpdateSettings = /* GraphQL */ `subscription OnUpdateSettings(
  $filter: ModelSubscriptionSettingsFilterInput
  $owner: String
) {
  onUpdateSettings(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSettingsSubscriptionVariables,
  APITypes.OnUpdateSettingsSubscription
>;
export const onDeleteSettings = /* GraphQL */ `subscription OnDeleteSettings(
  $filter: ModelSubscriptionSettingsFilterInput
  $owner: String
) {
  onDeleteSettings(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSettingsSubscriptionVariables,
  APITypes.OnDeleteSettingsSubscription
>;
export const onCreateProfile = /* GraphQL */ `subscription OnCreateProfile(
  $filter: ModelSubscriptionProfileFilterInput
  $owner: String
) {
  onCreateProfile(filter: $filter, owner: $owner) {
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
    createdAt
    updatedAt
    profileSettingsId
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
    createdAt
    updatedAt
    profileSettingsId
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
    createdAt
    updatedAt
    profileSettingsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProfileSubscriptionVariables,
  APITypes.OnDeleteProfileSubscription
>;
export const onCreateCustomer = /* GraphQL */ `subscription OnCreateCustomer(
  $filter: ModelSubscriptionCustomerFilterInput
  $owner: String
) {
  onCreateCustomer(filter: $filter, owner: $owner) {
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
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCustomerSubscriptionVariables,
  APITypes.OnCreateCustomerSubscription
>;
export const onUpdateCustomer = /* GraphQL */ `subscription OnUpdateCustomer(
  $filter: ModelSubscriptionCustomerFilterInput
  $owner: String
) {
  onUpdateCustomer(filter: $filter, owner: $owner) {
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
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCustomerSubscriptionVariables,
  APITypes.OnUpdateCustomerSubscription
>;
export const onDeleteCustomer = /* GraphQL */ `subscription OnDeleteCustomer(
  $filter: ModelSubscriptionCustomerFilterInput
  $owner: String
) {
  onDeleteCustomer(filter: $filter, owner: $owner) {
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
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCustomerSubscriptionVariables,
  APITypes.OnDeleteCustomerSubscription
>;
export const onCreateCampaign = /* GraphQL */ `subscription OnCreateCampaign(
  $filter: ModelSubscriptionCampaignFilterInput
  $owner: String
) {
  onCreateCampaign(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCampaignSubscriptionVariables,
  APITypes.OnCreateCampaignSubscription
>;
export const onUpdateCampaign = /* GraphQL */ `subscription OnUpdateCampaign(
  $filter: ModelSubscriptionCampaignFilterInput
  $owner: String
) {
  onUpdateCampaign(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCampaignSubscriptionVariables,
  APITypes.OnUpdateCampaignSubscription
>;
export const onDeleteCampaign = /* GraphQL */ `subscription OnDeleteCampaign(
  $filter: ModelSubscriptionCampaignFilterInput
  $owner: String
) {
  onDeleteCampaign(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCampaignSubscriptionVariables,
  APITypes.OnDeleteCampaignSubscription
>;
