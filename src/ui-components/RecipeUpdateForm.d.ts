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
export declare type RecipeUpdateFormInputValues = {
    name?: string;
    description?: string;
    category?: string;
    added?: string;
    addedby?: string;
    userid?: string;
};
export declare type RecipeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    added?: ValidationFunction<string>;
    addedby?: ValidationFunction<string>;
    userid?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecipeUpdateFormOverridesProps = {
    RecipeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    added?: PrimitiveOverrideProps<TextFieldProps>;
    addedby?: PrimitiveOverrideProps<TextFieldProps>;
    userid?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecipeUpdateFormProps = React.PropsWithChildren<{
    overrides?: RecipeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    recipe?: any;
    onSubmit?: (fields: RecipeUpdateFormInputValues) => RecipeUpdateFormInputValues;
    onSuccess?: (fields: RecipeUpdateFormInputValues) => void;
    onError?: (fields: RecipeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RecipeUpdateFormInputValues) => RecipeUpdateFormInputValues;
    onValidate?: RecipeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RecipeUpdateForm(props: RecipeUpdateFormProps): React.ReactElement;
