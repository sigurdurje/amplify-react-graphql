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
export declare type IngredientListCreateFormInputValues = {
    recipe?: string;
    ingredient?: string;
    unit?: string;
    value?: number;
};
export declare type IngredientListCreateFormValidationValues = {
    recipe?: ValidationFunction<string>;
    ingredient?: ValidationFunction<string>;
    unit?: ValidationFunction<string>;
    value?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IngredientListCreateFormOverridesProps = {
    IngredientListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    recipe?: PrimitiveOverrideProps<TextFieldProps>;
    ingredient?: PrimitiveOverrideProps<TextFieldProps>;
    unit?: PrimitiveOverrideProps<TextFieldProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type IngredientListCreateFormProps = React.PropsWithChildren<{
    overrides?: IngredientListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: IngredientListCreateFormInputValues) => IngredientListCreateFormInputValues;
    onSuccess?: (fields: IngredientListCreateFormInputValues) => void;
    onError?: (fields: IngredientListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: IngredientListCreateFormInputValues) => IngredientListCreateFormInputValues;
    onValidate?: IngredientListCreateFormValidationValues;
} & React.CSSProperties>;
export default function IngredientListCreateForm(props: IngredientListCreateFormProps): React.ReactElement;
