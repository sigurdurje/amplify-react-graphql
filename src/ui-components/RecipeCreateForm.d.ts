/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RecipeCreateFormInputValues = {
    name?: string;
    description?: string;
    category?: string;
    added?: string;
    addedby?: string;
    userid?: string;
};
export declare type RecipeCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    added?: ValidationFunction<string>;
    addedby?: ValidationFunction<string>;
    userid?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecipeCreateFormOverridesProps = {
    RecipeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    added?: PrimitiveOverrideProps<TextFieldProps>;
    addedby?: PrimitiveOverrideProps<TextFieldProps>;
    userid?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecipeCreateFormProps = React.PropsWithChildren<{
    overrides?: RecipeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RecipeCreateFormInputValues) => RecipeCreateFormInputValues;
    onSuccess?: (fields: RecipeCreateFormInputValues) => void;
    onError?: (fields: RecipeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RecipeCreateFormInputValues) => RecipeCreateFormInputValues;
    onValidate?: RecipeCreateFormValidationValues;
} & React.CSSProperties>;
export default function RecipeCreateForm(props: RecipeCreateFormProps): React.ReactElement;
