/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createIngredientList } from "../graphql/mutations";
export default function IngredientListCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    recipe: "",
    ingredient: "",
    unit: "",
    value: "",
  };
  const [recipe, setRecipe] = React.useState(initialValues.recipe);
  const [ingredient, setIngredient] = React.useState(initialValues.ingredient);
  const [unit, setUnit] = React.useState(initialValues.unit);
  const [value, setValue] = React.useState(initialValues.value);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setRecipe(initialValues.recipe);
    setIngredient(initialValues.ingredient);
    setUnit(initialValues.unit);
    setValue(initialValues.value);
    setErrors({});
  };
  const validations = {
    recipe: [],
    ingredient: [],
    unit: [],
    value: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          recipe,
          ingredient,
          unit,
          value,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createIngredientList.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "IngredientListCreateForm")}
      {...rest}
    >
      <TextField
        label="Recipe"
        isRequired={false}
        isReadOnly={false}
        value={recipe}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recipe: value,
              ingredient,
              unit,
              value,
            };
            const result = onChange(modelFields);
            value = result?.recipe ?? value;
          }
          if (errors.recipe?.hasError) {
            runValidationTasks("recipe", value);
          }
          setRecipe(value);
        }}
        onBlur={() => runValidationTasks("recipe", recipe)}
        errorMessage={errors.recipe?.errorMessage}
        hasError={errors.recipe?.hasError}
        {...getOverrideProps(overrides, "recipe")}
      ></TextField>
      <TextField
        label="Ingredient"
        isRequired={false}
        isReadOnly={false}
        value={ingredient}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recipe,
              ingredient: value,
              unit,
              value,
            };
            const result = onChange(modelFields);
            value = result?.ingredient ?? value;
          }
          if (errors.ingredient?.hasError) {
            runValidationTasks("ingredient", value);
          }
          setIngredient(value);
        }}
        onBlur={() => runValidationTasks("ingredient", ingredient)}
        errorMessage={errors.ingredient?.errorMessage}
        hasError={errors.ingredient?.hasError}
        {...getOverrideProps(overrides, "ingredient")}
      ></TextField>
      <TextField
        label="Unit"
        isRequired={false}
        isReadOnly={false}
        value={unit}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recipe,
              ingredient,
              unit: value,
              value,
            };
            const result = onChange(modelFields);
            value = result?.unit ?? value;
          }
          if (errors.unit?.hasError) {
            runValidationTasks("unit", value);
          }
          setUnit(value);
        }}
        onBlur={() => runValidationTasks("unit", unit)}
        errorMessage={errors.unit?.errorMessage}
        hasError={errors.unit?.hasError}
        {...getOverrideProps(overrides, "unit")}
      ></TextField>
      <TextField
        label="Value"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={value}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              recipe,
              ingredient,
              unit,
              value: value,
            };
            const result = onChange(modelFields);
            value = result?.value ?? value;
          }
          if (errors.value?.hasError) {
            runValidationTasks("value", value);
          }
          setValue(value);
        }}
        onBlur={() => runValidationTasks("value", value)}
        errorMessage={errors.value?.errorMessage}
        hasError={errors.value?.hasError}
        {...getOverrideProps(overrides, "value")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
