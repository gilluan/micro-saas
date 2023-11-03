/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Campaign } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CampaignUpdateFormInputValues = {
    name?: string;
    startsAt?: string;
    finishesAt?: string;
    validFrom?: string;
    validUntil?: string;
    minValue?: number;
    bonus?: number;
    profileID?: string;
};
export declare type CampaignUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    startsAt?: ValidationFunction<string>;
    finishesAt?: ValidationFunction<string>;
    validFrom?: ValidationFunction<string>;
    validUntil?: ValidationFunction<string>;
    minValue?: ValidationFunction<number>;
    bonus?: ValidationFunction<number>;
    profileID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CampaignUpdateFormOverridesProps = {
    CampaignUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    startsAt?: PrimitiveOverrideProps<TextFieldProps>;
    finishesAt?: PrimitiveOverrideProps<TextFieldProps>;
    validFrom?: PrimitiveOverrideProps<TextFieldProps>;
    validUntil?: PrimitiveOverrideProps<TextFieldProps>;
    minValue?: PrimitiveOverrideProps<TextFieldProps>;
    bonus?: PrimitiveOverrideProps<TextFieldProps>;
    profileID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type CampaignUpdateFormProps = React.PropsWithChildren<{
    overrides?: CampaignUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    campaign?: Campaign;
    onSubmit?: (fields: CampaignUpdateFormInputValues) => CampaignUpdateFormInputValues;
    onSuccess?: (fields: CampaignUpdateFormInputValues) => void;
    onError?: (fields: CampaignUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CampaignUpdateFormInputValues) => CampaignUpdateFormInputValues;
    onValidate?: CampaignUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CampaignUpdateForm(props: CampaignUpdateFormProps): React.ReactElement;
