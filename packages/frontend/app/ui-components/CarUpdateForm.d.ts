/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Car } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CarUpdateFormInputValues = {
    name?: string;
    year?: string;
};
export declare type CarUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    year?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarUpdateFormOverridesProps = {
    CarUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CarUpdateFormProps = React.PropsWithChildren<{
    overrides?: CarUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    car?: Car;
    onSubmit?: (fields: CarUpdateFormInputValues) => CarUpdateFormInputValues;
    onSuccess?: (fields: CarUpdateFormInputValues) => void;
    onError?: (fields: CarUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CarUpdateFormInputValues) => CarUpdateFormInputValues;
    onValidate?: CarUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CarUpdateForm(props: CarUpdateFormProps): React.ReactElement;
