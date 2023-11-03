/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateOrderInput = {
  id?: string | null,
  products?: Array< ProductInfoJSONInput | null > | null,
  customerID: string,
};

export type ProductInfoJSONInput = {
  name?: string | null,
  value?: number | null,
  quantity?: number | null,
};

export type ModelOrderConditionInput = {
  customerID?: ModelIDInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
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

export type Order = {
  __typename: "Order",
  id: string,
  products?:  Array<ProductInfoJSON | null > | null,
  customerID: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ProductInfoJSON = {
  __typename: "ProductInfoJSON",
  name?: string | null,
  value?: number | null,
  quantity?: number | null,
};

export type UpdateOrderInput = {
  id: string,
  products?: Array< ProductInfoJSONInput | null > | null,
  customerID?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type CreateSettingsInput = {
  id?: string | null,
  enableWhatsapp?: boolean | null,
  enableSMS?: boolean | null,
  enableEmail?: boolean | null,
  currency?: CurrencyEnum | null,
};

export enum CurrencyEnum {
  BRL = "BRL",
  USD = "USD",
  EUR = "EUR",
}


export type ModelSettingsConditionInput = {
  enableWhatsapp?: ModelBooleanInput | null,
  enableSMS?: ModelBooleanInput | null,
  enableEmail?: ModelBooleanInput | null,
  currency?: ModelCurrencyEnumInput | null,
  and?: Array< ModelSettingsConditionInput | null > | null,
  or?: Array< ModelSettingsConditionInput | null > | null,
  not?: ModelSettingsConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelCurrencyEnumInput = {
  eq?: CurrencyEnum | null,
  ne?: CurrencyEnum | null,
};

export type Settings = {
  __typename: "Settings",
  id: string,
  enableWhatsapp?: boolean | null,
  enableSMS?: boolean | null,
  enableEmail?: boolean | null,
  currency?: CurrencyEnum | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateSettingsInput = {
  id: string,
  enableWhatsapp?: boolean | null,
  enableSMS?: boolean | null,
  enableEmail?: boolean | null,
  currency?: CurrencyEnum | null,
};

export type DeleteSettingsInput = {
  id: string,
};

export type CreateProfileInput = {
  id?: string | null,
  name?: string | null,
  phone?: string | null,
  email?: string | null,
  logo?: string | null,
  profileSettingsId?: string | null,
};

export type ModelProfileConditionInput = {
  name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
  profileSettingsId?: ModelIDInput | null,
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

export type Profile = {
  __typename: "Profile",
  id: string,
  name?: string | null,
  phone?: string | null,
  email?: string | null,
  logo?: string | null,
  Settings?: Settings | null,
  Campaigns?: ModelCampaignConnection | null,
  createdAt: string,
  updatedAt: string,
  profileSettingsId?: string | null,
  owner?: string | null,
};

export type ModelCampaignConnection = {
  __typename: "ModelCampaignConnection",
  items:  Array<Campaign | null >,
  nextToken?: string | null,
};

export type Campaign = {
  __typename: "Campaign",
  id: string,
  name?: string | null,
  startsAt?: string | null,
  finishesAt?: string | null,
  validFrom?: string | null,
  validUntil?: string | null,
  minValue?: number | null,
  bonus?: number | null,
  profileID: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateProfileInput = {
  id: string,
  name?: string | null,
  phone?: string | null,
  email?: string | null,
  logo?: string | null,
  profileSettingsId?: string | null,
};

export type DeleteProfileInput = {
  id: string,
};

export type CreateCustomerInput = {
  id?: string | null,
  name?: string | null,
  phone?: string | null,
  email?: string | null,
  points?: number | null,
  history?: CustomerPointsJSONInput | null,
};

export type CustomerPointsJSONInput = {
  campaignId?: string | null,
  value?: number | null,
  validUntil?: string | null,
};

export type ModelCustomerConditionInput = {
  name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  points?: ModelIntInput | null,
  and?: Array< ModelCustomerConditionInput | null > | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  not?: ModelCustomerConditionInput | null,
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

export type Customer = {
  __typename: "Customer",
  id: string,
  name?: string | null,
  phone?: string | null,
  email?: string | null,
  points?: number | null,
  history?: CustomerPointsJSON | null,
  Orders?: ModelOrderConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type CustomerPointsJSON = {
  __typename: "CustomerPointsJSON",
  campaignId?: string | null,
  value?: number | null,
  validUntil?: string | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type UpdateCustomerInput = {
  id: string,
  name?: string | null,
  phone?: string | null,
  email?: string | null,
  points?: number | null,
  history?: CustomerPointsJSONInput | null,
};

export type DeleteCustomerInput = {
  id: string,
};

export type CreateCampaignInput = {
  id?: string | null,
  name?: string | null,
  startsAt?: string | null,
  finishesAt?: string | null,
  validFrom?: string | null,
  validUntil?: string | null,
  minValue?: number | null,
  bonus?: number | null,
  profileID: string,
};

export type ModelCampaignConditionInput = {
  name?: ModelStringInput | null,
  startsAt?: ModelStringInput | null,
  finishesAt?: ModelStringInput | null,
  validFrom?: ModelStringInput | null,
  validUntil?: ModelStringInput | null,
  minValue?: ModelFloatInput | null,
  bonus?: ModelIntInput | null,
  profileID?: ModelIDInput | null,
  and?: Array< ModelCampaignConditionInput | null > | null,
  or?: Array< ModelCampaignConditionInput | null > | null,
  not?: ModelCampaignConditionInput | null,
};

export type ModelFloatInput = {
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

export type UpdateCampaignInput = {
  id: string,
  name?: string | null,
  startsAt?: string | null,
  finishesAt?: string | null,
  validFrom?: string | null,
  validUntil?: string | null,
  minValue?: number | null,
  bonus?: number | null,
  profileID?: string | null,
};

export type DeleteCampaignInput = {
  id: string,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  customerID?: ModelIDInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelSettingsFilterInput = {
  id?: ModelIDInput | null,
  enableWhatsapp?: ModelBooleanInput | null,
  enableSMS?: ModelBooleanInput | null,
  enableEmail?: ModelBooleanInput | null,
  currency?: ModelCurrencyEnumInput | null,
  and?: Array< ModelSettingsFilterInput | null > | null,
  or?: Array< ModelSettingsFilterInput | null > | null,
  not?: ModelSettingsFilterInput | null,
};

export type ModelSettingsConnection = {
  __typename: "ModelSettingsConnection",
  items:  Array<Settings | null >,
  nextToken?: string | null,
};

export type ModelProfileFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
  profileSettingsId?: ModelIDInput | null,
};

export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items:  Array<Profile | null >,
  nextToken?: string | null,
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  points?: ModelIntInput | null,
  and?: Array< ModelCustomerFilterInput | null > | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  not?: ModelCustomerFilterInput | null,
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items:  Array<Customer | null >,
  nextToken?: string | null,
};

export type ModelCampaignFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  startsAt?: ModelStringInput | null,
  finishesAt?: ModelStringInput | null,
  validFrom?: ModelStringInput | null,
  validUntil?: ModelStringInput | null,
  minValue?: ModelFloatInput | null,
  bonus?: ModelIntInput | null,
  profileID?: ModelIDInput | null,
  and?: Array< ModelCampaignFilterInput | null > | null,
  or?: Array< ModelCampaignFilterInput | null > | null,
  not?: ModelCampaignFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  customerID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
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

export type ModelSubscriptionSettingsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  enableWhatsapp?: ModelSubscriptionBooleanInput | null,
  enableSMS?: ModelSubscriptionBooleanInput | null,
  enableEmail?: ModelSubscriptionBooleanInput | null,
  currency?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSettingsFilterInput | null > | null,
  or?: Array< ModelSubscriptionSettingsFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
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

export type ModelSubscriptionProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  logo?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfileFilterInput | null > | null,
};

export type ModelSubscriptionCustomerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  points?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
  or?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
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

export type ModelSubscriptionCampaignFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  startsAt?: ModelSubscriptionStringInput | null,
  finishesAt?: ModelSubscriptionStringInput | null,
  validFrom?: ModelSubscriptionStringInput | null,
  validUntil?: ModelSubscriptionStringInput | null,
  minValue?: ModelSubscriptionFloatInput | null,
  bonus?: ModelSubscriptionIntInput | null,
  profileID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCampaignFilterInput | null > | null,
  or?: Array< ModelSubscriptionCampaignFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
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

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    products?:  Array< {
      __typename: "ProductInfoJSON",
      name?: string | null,
      value?: number | null,
      quantity?: number | null,
    } | null > | null,
    customerID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    products?:  Array< {
      __typename: "ProductInfoJSON",
      name?: string | null,
      value?: number | null,
      quantity?: number | null,
    } | null > | null,
    customerID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    products?:  Array< {
      __typename: "ProductInfoJSON",
      name?: string | null,
      value?: number | null,
      quantity?: number | null,
    } | null > | null,
    customerID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateSettingsMutationVariables = {
  input: CreateSettingsInput,
  condition?: ModelSettingsConditionInput | null,
};

export type CreateSettingsMutation = {
  createSettings?:  {
    __typename: "Settings",
    id: string,
    enableWhatsapp?: boolean | null,
    enableSMS?: boolean | null,
    enableEmail?: boolean | null,
    currency?: CurrencyEnum | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateSettingsMutationVariables = {
  input: UpdateSettingsInput,
  condition?: ModelSettingsConditionInput | null,
};

export type UpdateSettingsMutation = {
  updateSettings?:  {
    __typename: "Settings",
    id: string,
    enableWhatsapp?: boolean | null,
    enableSMS?: boolean | null,
    enableEmail?: boolean | null,
    currency?: CurrencyEnum | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteSettingsMutationVariables = {
  input: DeleteSettingsInput,
  condition?: ModelSettingsConditionInput | null,
};

export type DeleteSettingsMutation = {
  deleteSettings?:  {
    __typename: "Settings",
    id: string,
    enableWhatsapp?: boolean | null,
    enableSMS?: boolean | null,
    enableEmail?: boolean | null,
    currency?: CurrencyEnum | null,
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
    phone?: string | null,
    email?: string | null,
    logo?: string | null,
    Settings?:  {
      __typename: "Settings",
      id: string,
      enableWhatsapp?: boolean | null,
      enableSMS?: boolean | null,
      enableEmail?: boolean | null,
      currency?: CurrencyEnum | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Campaigns?:  {
      __typename: "ModelCampaignConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    profileSettingsId?: string | null,
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
    phone?: string | null,
    email?: string | null,
    logo?: string | null,
    Settings?:  {
      __typename: "Settings",
      id: string,
      enableWhatsapp?: boolean | null,
      enableSMS?: boolean | null,
      enableEmail?: boolean | null,
      currency?: CurrencyEnum | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Campaigns?:  {
      __typename: "ModelCampaignConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    profileSettingsId?: string | null,
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
    phone?: string | null,
    email?: string | null,
    logo?: string | null,
    Settings?:  {
      __typename: "Settings",
      id: string,
      enableWhatsapp?: boolean | null,
      enableSMS?: boolean | null,
      enableEmail?: boolean | null,
      currency?: CurrencyEnum | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Campaigns?:  {
      __typename: "ModelCampaignConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    profileSettingsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    id: string,
    name?: string | null,
    phone?: string | null,
    email?: string | null,
    points?: number | null,
    history?:  {
      __typename: "CustomerPointsJSON",
      campaignId?: string | null,
      value?: number | null,
      validUntil?: string | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    id: string,
    name?: string | null,
    phone?: string | null,
    email?: string | null,
    points?: number | null,
    history?:  {
      __typename: "CustomerPointsJSON",
      campaignId?: string | null,
      value?: number | null,
      validUntil?: string | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    id: string,
    name?: string | null,
    phone?: string | null,
    email?: string | null,
    points?: number | null,
    history?:  {
      __typename: "CustomerPointsJSON",
      campaignId?: string | null,
      value?: number | null,
      validUntil?: string | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateCampaignMutationVariables = {
  input: CreateCampaignInput,
  condition?: ModelCampaignConditionInput | null,
};

export type CreateCampaignMutation = {
  createCampaign?:  {
    __typename: "Campaign",
    id: string,
    name?: string | null,
    startsAt?: string | null,
    finishesAt?: string | null,
    validFrom?: string | null,
    validUntil?: string | null,
    minValue?: number | null,
    bonus?: number | null,
    profileID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCampaignMutationVariables = {
  input: UpdateCampaignInput,
  condition?: ModelCampaignConditionInput | null,
};

export type UpdateCampaignMutation = {
  updateCampaign?:  {
    __typename: "Campaign",
    id: string,
    name?: string | null,
    startsAt?: string | null,
    finishesAt?: string | null,
    validFrom?: string | null,
    validUntil?: string | null,
    minValue?: number | null,
    bonus?: number | null,
    profileID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCampaignMutationVariables = {
  input: DeleteCampaignInput,
  condition?: ModelCampaignConditionInput | null,
};

export type DeleteCampaignMutation = {
  deleteCampaign?:  {
    __typename: "Campaign",
    id: string,
    name?: string | null,
    startsAt?: string | null,
    finishesAt?: string | null,
    validFrom?: string | null,
    validUntil?: string | null,
    minValue?: number | null,
    bonus?: number | null,
    profileID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    products?:  Array< {
      __typename: "ProductInfoJSON",
      name?: string | null,
      value?: number | null,
      quantity?: number | null,
    } | null > | null,
    customerID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      customerID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSettingsQueryVariables = {
  id: string,
};

export type GetSettingsQuery = {
  getSettings?:  {
    __typename: "Settings",
    id: string,
    enableWhatsapp?: boolean | null,
    enableSMS?: boolean | null,
    enableEmail?: boolean | null,
    currency?: CurrencyEnum | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListSettingsQueryVariables = {
  filter?: ModelSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSettingsQuery = {
  listSettings?:  {
    __typename: "ModelSettingsConnection",
    items:  Array< {
      __typename: "Settings",
      id: string,
      enableWhatsapp?: boolean | null,
      enableSMS?: boolean | null,
      enableEmail?: boolean | null,
      currency?: CurrencyEnum | null,
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
    phone?: string | null,
    email?: string | null,
    logo?: string | null,
    Settings?:  {
      __typename: "Settings",
      id: string,
      enableWhatsapp?: boolean | null,
      enableSMS?: boolean | null,
      enableEmail?: boolean | null,
      currency?: CurrencyEnum | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Campaigns?:  {
      __typename: "ModelCampaignConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    profileSettingsId?: string | null,
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
      phone?: string | null,
      email?: string | null,
      logo?: string | null,
      createdAt: string,
      updatedAt: string,
      profileSettingsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCustomerQueryVariables = {
  id: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    id: string,
    name?: string | null,
    phone?: string | null,
    email?: string | null,
    points?: number | null,
    history?:  {
      __typename: "CustomerPointsJSON",
      campaignId?: string | null,
      value?: number | null,
      validUntil?: string | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      id: string,
      name?: string | null,
      phone?: string | null,
      email?: string | null,
      points?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCampaignQueryVariables = {
  id: string,
};

export type GetCampaignQuery = {
  getCampaign?:  {
    __typename: "Campaign",
    id: string,
    name?: string | null,
    startsAt?: string | null,
    finishesAt?: string | null,
    validFrom?: string | null,
    validUntil?: string | null,
    minValue?: number | null,
    bonus?: number | null,
    profileID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCampaignsQueryVariables = {
  filter?: ModelCampaignFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCampaignsQuery = {
  listCampaigns?:  {
    __typename: "ModelCampaignConnection",
    items:  Array< {
      __typename: "Campaign",
      id: string,
      name?: string | null,
      startsAt?: string | null,
      finishesAt?: string | null,
      validFrom?: string | null,
      validUntil?: string | null,
      minValue?: number | null,
      bonus?: number | null,
      profileID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersByCustomerIDQueryVariables = {
  customerID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByCustomerIDQuery = {
  ordersByCustomerID?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      customerID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CampaignsByProfileIDQueryVariables = {
  profileID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCampaignFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CampaignsByProfileIDQuery = {
  campaignsByProfileID?:  {
    __typename: "ModelCampaignConnection",
    items:  Array< {
      __typename: "Campaign",
      id: string,
      name?: string | null,
      startsAt?: string | null,
      finishesAt?: string | null,
      validFrom?: string | null,
      validUntil?: string | null,
      minValue?: number | null,
      bonus?: number | null,
      profileID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
  owner?: string | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    products?:  Array< {
      __typename: "ProductInfoJSON",
      name?: string | null,
      value?: number | null,
      quantity?: number | null,
    } | null > | null,
    customerID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
  owner?: string | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    products?:  Array< {
      __typename: "ProductInfoJSON",
      name?: string | null,
      value?: number | null,
      quantity?: number | null,
    } | null > | null,
    customerID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
  owner?: string | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    products?:  Array< {
      __typename: "ProductInfoJSON",
      name?: string | null,
      value?: number | null,
      quantity?: number | null,
    } | null > | null,
    customerID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionSettingsFilterInput | null,
  owner?: string | null,
};

export type OnCreateSettingsSubscription = {
  onCreateSettings?:  {
    __typename: "Settings",
    id: string,
    enableWhatsapp?: boolean | null,
    enableSMS?: boolean | null,
    enableEmail?: boolean | null,
    currency?: CurrencyEnum | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionSettingsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSettingsSubscription = {
  onUpdateSettings?:  {
    __typename: "Settings",
    id: string,
    enableWhatsapp?: boolean | null,
    enableSMS?: boolean | null,
    enableEmail?: boolean | null,
    currency?: CurrencyEnum | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionSettingsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSettingsSubscription = {
  onDeleteSettings?:  {
    __typename: "Settings",
    id: string,
    enableWhatsapp?: boolean | null,
    enableSMS?: boolean | null,
    enableEmail?: boolean | null,
    currency?: CurrencyEnum | null,
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
    phone?: string | null,
    email?: string | null,
    logo?: string | null,
    Settings?:  {
      __typename: "Settings",
      id: string,
      enableWhatsapp?: boolean | null,
      enableSMS?: boolean | null,
      enableEmail?: boolean | null,
      currency?: CurrencyEnum | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Campaigns?:  {
      __typename: "ModelCampaignConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    profileSettingsId?: string | null,
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
    phone?: string | null,
    email?: string | null,
    logo?: string | null,
    Settings?:  {
      __typename: "Settings",
      id: string,
      enableWhatsapp?: boolean | null,
      enableSMS?: boolean | null,
      enableEmail?: boolean | null,
      currency?: CurrencyEnum | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Campaigns?:  {
      __typename: "ModelCampaignConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    profileSettingsId?: string | null,
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
    phone?: string | null,
    email?: string | null,
    logo?: string | null,
    Settings?:  {
      __typename: "Settings",
      id: string,
      enableWhatsapp?: boolean | null,
      enableSMS?: boolean | null,
      enableEmail?: boolean | null,
      currency?: CurrencyEnum | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Campaigns?:  {
      __typename: "ModelCampaignConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    profileSettingsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
  owner?: string | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    id: string,
    name?: string | null,
    phone?: string | null,
    email?: string | null,
    points?: number | null,
    history?:  {
      __typename: "CustomerPointsJSON",
      campaignId?: string | null,
      value?: number | null,
      validUntil?: string | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "Customer",
    id: string,
    name?: string | null,
    phone?: string | null,
    email?: string | null,
    points?: number | null,
    history?:  {
      __typename: "CustomerPointsJSON",
      campaignId?: string | null,
      value?: number | null,
      validUntil?: string | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "Customer",
    id: string,
    name?: string | null,
    phone?: string | null,
    email?: string | null,
    points?: number | null,
    history?:  {
      __typename: "CustomerPointsJSON",
      campaignId?: string | null,
      value?: number | null,
      validUntil?: string | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateCampaignSubscriptionVariables = {
  filter?: ModelSubscriptionCampaignFilterInput | null,
  owner?: string | null,
};

export type OnCreateCampaignSubscription = {
  onCreateCampaign?:  {
    __typename: "Campaign",
    id: string,
    name?: string | null,
    startsAt?: string | null,
    finishesAt?: string | null,
    validFrom?: string | null,
    validUntil?: string | null,
    minValue?: number | null,
    bonus?: number | null,
    profileID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCampaignSubscriptionVariables = {
  filter?: ModelSubscriptionCampaignFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCampaignSubscription = {
  onUpdateCampaign?:  {
    __typename: "Campaign",
    id: string,
    name?: string | null,
    startsAt?: string | null,
    finishesAt?: string | null,
    validFrom?: string | null,
    validUntil?: string | null,
    minValue?: number | null,
    bonus?: number | null,
    profileID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCampaignSubscriptionVariables = {
  filter?: ModelSubscriptionCampaignFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCampaignSubscription = {
  onDeleteCampaign?:  {
    __typename: "Campaign",
    id: string,
    name?: string | null,
    startsAt?: string | null,
    finishesAt?: string | null,
    validFrom?: string | null,
    validUntil?: string | null,
    minValue?: number | null,
    bonus?: number | null,
    profileID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
