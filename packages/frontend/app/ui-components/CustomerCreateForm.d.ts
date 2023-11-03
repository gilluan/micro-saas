/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CustomerCreateFormInputValues = {
    name?: string;
    phone?: string;
    email?: string;
    points?: number;
    history?: string;
};
export declare type CustomerCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    points?: ValidationFunction<number>;
    history?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomerCreateFormOverridesProps = {
    CustomerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
    history?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type CustomerCreateFormProps = React.PropsWithChildren<{
    overrides?: CustomerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CustomerCreateFormInputValues) => CustomerCreateFormInputValues;
    onSuccess?: (fields: CustomerCreateFormInputValues) => void;
    onError?: (fields: CustomerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CustomerCreateFormInputValues) => CustomerCreateFormInputValues;
    onValidate?: CustomerCreateFormValidationValues;
} & React.CSSProperties>;
export default function CustomerCreateForm(props: CustomerCreateFormProps): React.ReactElement;
