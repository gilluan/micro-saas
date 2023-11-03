/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { listProfiles } from "../graphql/queries";
import { createCampaign } from "../graphql/mutations";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function CampaignCreateForm(props) {
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
    name: "",
    startsAt: "",
    finishesAt: "",
    validFrom: "",
    validUntil: "",
    minValue: "",
    bonus: "",
    profileID: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [startsAt, setStartsAt] = React.useState(initialValues.startsAt);
  const [finishesAt, setFinishesAt] = React.useState(initialValues.finishesAt);
  const [validFrom, setValidFrom] = React.useState(initialValues.validFrom);
  const [validUntil, setValidUntil] = React.useState(initialValues.validUntil);
  const [minValue, setMinValue] = React.useState(initialValues.minValue);
  const [bonus, setBonus] = React.useState(initialValues.bonus);
  const [profileID, setProfileID] = React.useState(initialValues.profileID);
  const [profileIDLoading, setProfileIDLoading] = React.useState(false);
  const [profileIDRecords, setProfileIDRecords] = React.useState([]);
  const [selectedProfileIDRecords, setSelectedProfileIDRecords] =
    React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setStartsAt(initialValues.startsAt);
    setFinishesAt(initialValues.finishesAt);
    setValidFrom(initialValues.validFrom);
    setValidUntil(initialValues.validUntil);
    setMinValue(initialValues.minValue);
    setBonus(initialValues.bonus);
    setProfileID(initialValues.profileID);
    setCurrentProfileIDValue(undefined);
    setCurrentProfileIDDisplayValue("");
    setErrors({});
  };
  const [currentProfileIDDisplayValue, setCurrentProfileIDDisplayValue] =
    React.useState("");
  const [currentProfileIDValue, setCurrentProfileIDValue] =
    React.useState(undefined);
  const profileIDRef = React.createRef();
  const getDisplayValue = {
    profileID: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    startsAt: [],
    finishesAt: [],
    validFrom: [],
    validUntil: [],
    minValue: [],
    bonus: [],
    profileID: [{ type: "Required" }],
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
  const fetchProfileIDRecords = async (value) => {
    setProfileIDLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ name: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await API.graphql({
          query: listProfiles.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listProfiles?.items;
      var loaded = result.filter((item) => profileID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setProfileIDRecords(newOptions.slice(0, autocompleteLength));
    setProfileIDLoading(false);
  };
  React.useEffect(() => {
    fetchProfileIDRecords("");
  }, []);
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          startsAt,
          finishesAt,
          validFrom,
          validUntil,
          minValue,
          bonus,
          profileID,
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
            query: createCampaign.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "CampaignCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              startsAt,
              finishesAt,
              validFrom,
              validUntil,
              minValue,
              bonus,
              profileID,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Starts at"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={startsAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              startsAt: value,
              finishesAt,
              validFrom,
              validUntil,
              minValue,
              bonus,
              profileID,
            };
            const result = onChange(modelFields);
            value = result?.startsAt ?? value;
          }
          if (errors.startsAt?.hasError) {
            runValidationTasks("startsAt", value);
          }
          setStartsAt(value);
        }}
        onBlur={() => runValidationTasks("startsAt", startsAt)}
        errorMessage={errors.startsAt?.errorMessage}
        hasError={errors.startsAt?.hasError}
        {...getOverrideProps(overrides, "startsAt")}
      ></TextField>
      <TextField
        label="Finishes at"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={finishesAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              startsAt,
              finishesAt: value,
              validFrom,
              validUntil,
              minValue,
              bonus,
              profileID,
            };
            const result = onChange(modelFields);
            value = result?.finishesAt ?? value;
          }
          if (errors.finishesAt?.hasError) {
            runValidationTasks("finishesAt", value);
          }
          setFinishesAt(value);
        }}
        onBlur={() => runValidationTasks("finishesAt", finishesAt)}
        errorMessage={errors.finishesAt?.errorMessage}
        hasError={errors.finishesAt?.hasError}
        {...getOverrideProps(overrides, "finishesAt")}
      ></TextField>
      <TextField
        label="Valid from"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={validFrom}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              startsAt,
              finishesAt,
              validFrom: value,
              validUntil,
              minValue,
              bonus,
              profileID,
            };
            const result = onChange(modelFields);
            value = result?.validFrom ?? value;
          }
          if (errors.validFrom?.hasError) {
            runValidationTasks("validFrom", value);
          }
          setValidFrom(value);
        }}
        onBlur={() => runValidationTasks("validFrom", validFrom)}
        errorMessage={errors.validFrom?.errorMessage}
        hasError={errors.validFrom?.hasError}
        {...getOverrideProps(overrides, "validFrom")}
      ></TextField>
      <TextField
        label="Valid until"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={validUntil}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              startsAt,
              finishesAt,
              validFrom,
              validUntil: value,
              minValue,
              bonus,
              profileID,
            };
            const result = onChange(modelFields);
            value = result?.validUntil ?? value;
          }
          if (errors.validUntil?.hasError) {
            runValidationTasks("validUntil", value);
          }
          setValidUntil(value);
        }}
        onBlur={() => runValidationTasks("validUntil", validUntil)}
        errorMessage={errors.validUntil?.errorMessage}
        hasError={errors.validUntil?.hasError}
        {...getOverrideProps(overrides, "validUntil")}
      ></TextField>
      <TextField
        label="Min value"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={minValue}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              startsAt,
              finishesAt,
              validFrom,
              validUntil,
              minValue: value,
              bonus,
              profileID,
            };
            const result = onChange(modelFields);
            value = result?.minValue ?? value;
          }
          if (errors.minValue?.hasError) {
            runValidationTasks("minValue", value);
          }
          setMinValue(value);
        }}
        onBlur={() => runValidationTasks("minValue", minValue)}
        errorMessage={errors.minValue?.errorMessage}
        hasError={errors.minValue?.hasError}
        {...getOverrideProps(overrides, "minValue")}
      ></TextField>
      <TextField
        label="Bonus"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={bonus}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              startsAt,
              finishesAt,
              validFrom,
              validUntil,
              minValue,
              bonus: value,
              profileID,
            };
            const result = onChange(modelFields);
            value = result?.bonus ?? value;
          }
          if (errors.bonus?.hasError) {
            runValidationTasks("bonus", value);
          }
          setBonus(value);
        }}
        onBlur={() => runValidationTasks("bonus", bonus)}
        errorMessage={errors.bonus?.errorMessage}
        hasError={errors.bonus?.hasError}
        {...getOverrideProps(overrides, "bonus")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              startsAt,
              finishesAt,
              validFrom,
              validUntil,
              minValue,
              bonus,
              profileID: value,
            };
            const result = onChange(modelFields);
            value = result?.profileID ?? value;
          }
          setProfileID(value);
          setCurrentProfileIDValue(undefined);
        }}
        currentFieldValue={currentProfileIDValue}
        label={"Profile id"}
        items={profileID ? [profileID] : []}
        hasError={errors?.profileID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("profileID", currentProfileIDValue)
        }
        errorMessage={errors?.profileID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.profileID(
                profileIDRecords.find((r) => r.id === value) ??
                  selectedProfileIDRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentProfileIDDisplayValue(
            value
              ? getDisplayValue.profileID(
                  profileIDRecords.find((r) => r.id === value) ??
                    selectedProfileIDRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentProfileIDValue(value);
          const selectedRecord = profileIDRecords.find((r) => r.id === value);
          if (selectedRecord) {
            setSelectedProfileIDRecords([selectedRecord]);
          }
        }}
        inputFieldRef={profileIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Profile id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Profile"
          value={currentProfileIDDisplayValue}
          options={profileIDRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.profileID?.(r),
            }))}
          isLoading={profileIDLoading}
          onSelect={({ id, label }) => {
            setCurrentProfileIDValue(id);
            setCurrentProfileIDDisplayValue(label);
            runValidationTasks("profileID", label);
          }}
          onClear={() => {
            setCurrentProfileIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchProfileIDRecords(value);
            if (errors.profileID?.hasError) {
              runValidationTasks("profileID", value);
            }
            setCurrentProfileIDDisplayValue(value);
            setCurrentProfileIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("profileID", currentProfileIDValue)}
          errorMessage={errors.profileID?.errorMessage}
          hasError={errors.profileID?.hasError}
          ref={profileIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "profileID")}
        ></Autocomplete>
      </ArrayField>
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
