/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createOrder = /* GraphQL */ `mutation CreateOrder(
  $input: CreateOrderInput!
  $condition: ModelOrderConditionInput
) {
  createOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateOrderMutationVariables,
  APITypes.CreateOrderMutation
>;
export const updateOrder = /* GraphQL */ `mutation UpdateOrder(
  $input: UpdateOrderInput!
  $condition: ModelOrderConditionInput
) {
  updateOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateOrderMutationVariables,
  APITypes.UpdateOrderMutation
>;
export const deleteOrder = /* GraphQL */ `mutation DeleteOrder(
  $input: DeleteOrderInput!
  $condition: ModelOrderConditionInput
) {
  deleteOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteOrderMutationVariables,
  APITypes.DeleteOrderMutation
>;
export const createSettings = /* GraphQL */ `mutation CreateSettings(
  $input: CreateSettingsInput!
  $condition: ModelSettingsConditionInput
) {
  createSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSettingsMutationVariables,
  APITypes.CreateSettingsMutation
>;
export const updateSettings = /* GraphQL */ `mutation UpdateSettings(
  $input: UpdateSettingsInput!
  $condition: ModelSettingsConditionInput
) {
  updateSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSettingsMutationVariables,
  APITypes.UpdateSettingsMutation
>;
export const deleteSettings = /* GraphQL */ `mutation DeleteSettings(
  $input: DeleteSettingsInput!
  $condition: ModelSettingsConditionInput
) {
  deleteSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSettingsMutationVariables,
  APITypes.DeleteSettingsMutation
>;
export const createProfile = /* GraphQL */ `mutation CreateProfile(
  $input: CreateProfileInput!
  $condition: ModelProfileConditionInput
) {
  createProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProfileMutationVariables,
  APITypes.CreateProfileMutation
>;
export const updateProfile = /* GraphQL */ `mutation UpdateProfile(
  $input: UpdateProfileInput!
  $condition: ModelProfileConditionInput
) {
  updateProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProfileMutationVariables,
  APITypes.UpdateProfileMutation
>;
export const deleteProfile = /* GraphQL */ `mutation DeleteProfile(
  $input: DeleteProfileInput!
  $condition: ModelProfileConditionInput
) {
  deleteProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProfileMutationVariables,
  APITypes.DeleteProfileMutation
>;
export const createCustomer = /* GraphQL */ `mutation CreateCustomer(
  $input: CreateCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  createCustomer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCustomerMutationVariables,
  APITypes.CreateCustomerMutation
>;
export const updateCustomer = /* GraphQL */ `mutation UpdateCustomer(
  $input: UpdateCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  updateCustomer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCustomerMutationVariables,
  APITypes.UpdateCustomerMutation
>;
export const deleteCustomer = /* GraphQL */ `mutation DeleteCustomer(
  $input: DeleteCustomerInput!
  $condition: ModelCustomerConditionInput
) {
  deleteCustomer(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCustomerMutationVariables,
  APITypes.DeleteCustomerMutation
>;
export const createCampaign = /* GraphQL */ `mutation CreateCampaign(
  $input: CreateCampaignInput!
  $condition: ModelCampaignConditionInput
) {
  createCampaign(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCampaignMutationVariables,
  APITypes.CreateCampaignMutation
>;
export const updateCampaign = /* GraphQL */ `mutation UpdateCampaign(
  $input: UpdateCampaignInput!
  $condition: ModelCampaignConditionInput
) {
  updateCampaign(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCampaignMutationVariables,
  APITypes.UpdateCampaignMutation
>;
export const deleteCampaign = /* GraphQL */ `mutation DeleteCampaign(
  $input: DeleteCampaignInput!
  $condition: ModelCampaignConditionInput
) {
  deleteCampaign(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCampaignMutationVariables,
  APITypes.DeleteCampaignMutation
>;
