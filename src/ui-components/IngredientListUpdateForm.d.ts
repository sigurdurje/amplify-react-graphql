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
export declare type IngredientListUpdateFormInputValues = {
    recipe?: string;
    ingredient?: string;
    unit?: string;
    value?: number;
};
export declare type IngredientListUpdateFormValidationValues = {
    recipe?: ValidationFunction<string>;
    ingredient?: ValidationFunction<string>;
    unit?: ValidationFunction<string>;
    value?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IngredientListUpdateFormOverridesProps = {
    IngredientListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    recipe?: PrimitiveOverrideProps<TextFieldProps>;
    ingredient?: PrimitiveOverrideProps<TextFieldProps>;
    unit?: PrimitiveOverrideProps<TextFieldProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type IngredientListUpdateFormProps = React.PropsWithChildren<{
    overrides?: IngredientListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ingredientList?: any;
    onSubmit?: (fields: IngredientListUpdateFormInputValues) => IngredientListUpdateFormInputValues;
    onSuccess?: (fields: IngredientListUpdateFormInputValues) => void;
    onError?: (fields: IngredientListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: IngredientListUpdateFormInputValues) => IngredientListUpdateFormInputValues;
    onValidate?: IngredientListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function IngredientListUpdateForm(props: IngredientListUpdateFormProps): React.ReactElement;
