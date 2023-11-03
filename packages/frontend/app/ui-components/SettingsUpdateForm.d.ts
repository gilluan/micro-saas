/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Settings } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SettingsUpdateFormInputValues = {
    enableWhatsapp?: boolean;
    enableSMS?: boolean;
    enableEmail?: boolean;
    currency?: string;
};
export declare type SettingsUpdateFormValidationValues = {
    enableWhatsapp?: ValidationFunction<boolean>;
    enableSMS?: ValidationFunction<boolean>;
    enableEmail?: ValidationFunction<boolean>;
    currency?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SettingsUpdateFormOverridesProps = {
    SettingsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    enableWhatsapp?: PrimitiveOverrideProps<SwitchFieldProps>;
    enableSMS?: PrimitiveOverrideProps<SwitchFieldProps>;
    enableEmail?: PrimitiveOverrideProps<SwitchFieldProps>;
    currency?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type SettingsUpdateFormProps = React.PropsWithChildren<{
    overrides?: SettingsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    settings?: Settings;
    onSubmit?: (fields: SettingsUpdateFormInputValues) => SettingsUpdateFormInputValues;
    onSuccess?: (fields: SettingsUpdateFormInputValues) => void;
    onError?: (fields: SettingsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SettingsUpdateFormInputValues) => SettingsUpdateFormInputValues;
    onValidate?: SettingsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SettingsUpdateForm(props: SettingsUpdateFormProps): React.ReactElement;
