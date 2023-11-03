/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CarCreateFormInputValues = {
    name?: string;
    year?: string;
};
export declare type CarCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    year?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarCreateFormOverridesProps = {
    CarCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CarCreateFormProps = React.PropsWithChildren<{
    overrides?: CarCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CarCreateFormInputValues) => CarCreateFormInputValues;
    onSuccess?: (fields: CarCreateFormInputValues) => void;
    onError?: (fields: CarCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CarCreateFormInputValues) => CarCreateFormInputValues;
    onValidate?: CarCreateFormValidationValues;
} & React.CSSProperties>;
export default function CarCreateForm(props: CarCreateFormProps): React.ReactElement;
