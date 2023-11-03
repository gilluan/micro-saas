/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { createSettings } from "../graphql/mutations";
export default function SettingsCreateForm(props) {
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
    enableWhatsapp: false,
    enableSMS: false,
    enableEmail: false,
    currency: "",
  };
  const [enableWhatsapp, setEnableWhatsapp] = React.useState(
    initialValues.enableWhatsapp
  );
  const [enableSMS, setEnableSMS] = React.useState(initialValues.enableSMS);
  const [enableEmail, setEnableEmail] = React.useState(
    initialValues.enableEmail
  );
  const [currency, setCurrency] = React.useState(initialValues.currency);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setEnableWhatsapp(initialValues.enableWhatsapp);
    setEnableSMS(initialValues.enableSMS);
    setEnableEmail(initialValues.enableEmail);
    setCurrency(initialValues.currency);
    setErrors({});
  };
  const validations = {
    enableWhatsapp: [],
    enableSMS: [],
    enableEmail: [],
    currency: [],
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
          enableWhatsapp,
          enableSMS,
          enableEmail,
          currency,
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
            query: createSettings.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "SettingsCreateForm")}
      {...rest}
    >
      <SwitchField
        label="Enable whatsapp"
        defaultChecked={false}
        isDisabled={false}
        isChecked={enableWhatsapp}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              enableWhatsapp: value,
              enableSMS,
              enableEmail,
              currency,
            };
            const result = onChange(modelFields);
            value = result?.enableWhatsapp ?? value;
          }
          if (errors.enableWhatsapp?.hasError) {
            runValidationTasks("enableWhatsapp", value);
          }
          setEnableWhatsapp(value);
        }}
        onBlur={() => runValidationTasks("enableWhatsapp", enableWhatsapp)}
        errorMessage={errors.enableWhatsapp?.errorMessage}
        hasError={errors.enableWhatsapp?.hasError}
        {...getOverrideProps(overrides, "enableWhatsapp")}
      ></SwitchField>
      <SwitchField
        label="Enable sms"
        defaultChecked={false}
        isDisabled={false}
        isChecked={enableSMS}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              enableWhatsapp,
              enableSMS: value,
              enableEmail,
              currency,
            };
            const result = onChange(modelFields);
            value = result?.enableSMS ?? value;
          }
          if (errors.enableSMS?.hasError) {
            runValidationTasks("enableSMS", value);
          }
          setEnableSMS(value);
        }}
        onBlur={() => runValidationTasks("enableSMS", enableSMS)}
        errorMessage={errors.enableSMS?.errorMessage}
        hasError={errors.enableSMS?.hasError}
        {...getOverrideProps(overrides, "enableSMS")}
      ></SwitchField>
      <SwitchField
        label="Enable email"
        defaultChecked={false}
        isDisabled={false}
        isChecked={enableEmail}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              enableWhatsapp,
              enableSMS,
              enableEmail: value,
              currency,
            };
            const result = onChange(modelFields);
            value = result?.enableEmail ?? value;
          }
          if (errors.enableEmail?.hasError) {
            runValidationTasks("enableEmail", value);
          }
          setEnableEmail(value);
        }}
        onBlur={() => runValidationTasks("enableEmail", enableEmail)}
        errorMessage={errors.enableEmail?.errorMessage}
        hasError={errors.enableEmail?.hasError}
        {...getOverrideProps(overrides, "enableEmail")}
      ></SwitchField>
      <SelectField
        label="Currency"
        placeholder="Please select an option"
        isDisabled={false}
        value={currency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              enableWhatsapp,
              enableSMS,
              enableEmail,
              currency: value,
            };
            const result = onChange(modelFields);
            value = result?.currency ?? value;
          }
          if (errors.currency?.hasError) {
            runValidationTasks("currency", value);
          }
          setCurrency(value);
        }}
        onBlur={() => runValidationTasks("currency", currency)}
        errorMessage={errors.currency?.errorMessage}
        hasError={errors.currency?.hasError}
        {...getOverrideProps(overrides, "currency")}
      >
        <option
          children="Brl"
          value="BRL"
          {...getOverrideProps(overrides, "currencyoption0")}
        ></option>
        <option
          children="Usd"
          value="USD"
          {...getOverrideProps(overrides, "currencyoption1")}
        ></option>
        <option
          children="Eur"
          value="EUR"
          {...getOverrideProps(overrides, "currencyoption2")}
        ></option>
      </SelectField>
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
