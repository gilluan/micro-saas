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
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { Field, getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, processFile, validateField } from "./utils";
import { API } from "aws-amplify";
import { listCampaigns, listSettings } from "../graphql/queries";
import { createProfile, updateCampaign } from "../graphql/mutations";
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
export default function ProfileCreateForm(props) {
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
    phone: "",
    email: "",
    logo: undefined,
    Settings: undefined,
    Campaigns: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [email, setEmail] = React.useState(initialValues.email);
  const [logo, setLogo] = React.useState(initialValues.logo);
  const [Settings, setSettings] = React.useState(initialValues.Settings);
  const [SettingsLoading, setSettingsLoading] = React.useState(false);
  const [SettingsRecords, setSettingsRecords] = React.useState([]);
  const [Campaigns, setCampaigns] = React.useState(initialValues.Campaigns);
  const [CampaignsLoading, setCampaignsLoading] = React.useState(false);
  const [CampaignsRecords, setCampaignsRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setPhone(initialValues.phone);
    setEmail(initialValues.email);
    setLogo(initialValues.logo);
    setSettings(initialValues.Settings);
    setCurrentSettingsValue(undefined);
    setCurrentSettingsDisplayValue("");
    setCampaigns(initialValues.Campaigns);
    setCurrentCampaignsValue(undefined);
    setCurrentCampaignsDisplayValue("");
    setErrors({});
  };
  const [currentSettingsDisplayValue, setCurrentSettingsDisplayValue] =
    React.useState("");
  const [currentSettingsValue, setCurrentSettingsValue] =
    React.useState(undefined);
  const SettingsRef = React.createRef();
  const [currentCampaignsDisplayValue, setCurrentCampaignsDisplayValue] =
    React.useState("");
  const [currentCampaignsValue, setCurrentCampaignsValue] =
    React.useState(undefined);
  const CampaignsRef = React.createRef();
  const getIDValue = {
    Settings: (r) => JSON.stringify({ id: r?.id }),
    Campaigns: (r) => JSON.stringify({ id: r?.id }),
  };
  const SettingsIdSet = new Set(
    Array.isArray(Settings)
      ? Settings.map((r) => getIDValue.Settings?.(r))
      : getIDValue.Settings?.(Settings)
  );
  const CampaignsIdSet = new Set(
    Array.isArray(Campaigns)
      ? Campaigns.map((r) => getIDValue.Campaigns?.(r))
      : getIDValue.Campaigns?.(Campaigns)
  );
  const getDisplayValue = {
    Settings: (r) =>
      `${r?.enableWhatsapp ? r?.enableWhatsapp + " - " : ""}${r?.id}`,
    Campaigns: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    phone: [{ type: "Required" }, { type: "Phone" }],
    email: [{ type: "Required" }, { type: "Email" }],
    logo: [],
    Settings: [],
    Campaigns: [],
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
  const fetchSettingsRecords = async (value) => {
    setSettingsLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [
            { enableWhatsapp: { contains: value } },
            { id: { contains: value } },
          ],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await API.graphql({
          query: listSettings.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listSettings?.items;
      var loaded = result.filter(
        (item) => !SettingsIdSet.has(getIDValue.Settings?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setSettingsRecords(newOptions.slice(0, autocompleteLength));
    setSettingsLoading(false);
  };
  const fetchCampaignsRecords = async (value) => {
    setCampaignsLoading(true);
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
          query: listCampaigns.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listCampaigns?.items;
      var loaded = result.filter(
        (item) => !CampaignsIdSet.has(getIDValue.Campaigns?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setCampaignsRecords(newOptions.slice(0, autocompleteLength));
    setCampaignsLoading(false);
  };
  React.useEffect(() => {
    fetchSettingsRecords("");
    fetchCampaignsRecords("");
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
          phone,
          email,
          logo,
          Settings,
          Campaigns,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
          const modelFieldsToSave = {
            name: modelFields.name,
            phone: modelFields.phone,
            email: modelFields.email,
            logo: modelFields.logo,
            profileSettingsId: modelFields?.Settings?.id,
          };
          const profile = (
            await API.graphql({
              query: createProfile.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createProfile;
          const promises = [];
          promises.push(
            ...Campaigns.reduce((promises, original) => {
              promises.push(
                API.graphql({
                  query: updateCampaign.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: original.id,
                      profileID: profile.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
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
      {...getOverrideProps(overrides, "ProfileCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              phone,
              email,
              logo,
              Settings,
              Campaigns,
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
        label="Phone"
        isRequired={true}
        isReadOnly={false}
        type="tel"
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone: value,
              email,
              logo,
              Settings,
              Campaigns,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone,
              email: value,
              logo,
              Settings,
              Campaigns,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <Field
        errorMessage={errors.logo?.errorMessage}
        hasError={errors.logo?.hasError}
        label={"Logo"}
        isRequired={false}
        isReadOnly={false}
      >
        <StorageManager
          onUploadSuccess={({ key }) => {
            setLogo((prev) => {
              let value = key;
              if (onChange) {
                const modelFields = {
                  name,
                  phone,
                  email,
                  logo: value,
                  Settings,
                  Campaigns,
                };
                const result = onChange(modelFields);
                value = result?.logo ?? value;
              }
              return value;
            });
          }}
          onFileRemove={({ key }) => {
            setLogo((prev) => {
              let value = initialValues?.logo;
              if (onChange) {
                const modelFields = {
                  name,
                  phone,
                  email,
                  logo: value,
                  Settings,
                  Campaigns,
                };
                const result = onChange(modelFields);
                value = result?.logo ?? value;
              }
              return value;
            });
          }}
          processFile={processFile}
          accessLevel={"private"}
          acceptedFileTypes={[]}
          isResumable={false}
          showThumbnails={true}
          maxFileCount={1}
          {...getOverrideProps(overrides, "logo")}
        ></StorageManager>
      </Field>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              phone,
              email,
              logo,
              Settings: value,
              Campaigns,
            };
            const result = onChange(modelFields);
            value = result?.Settings ?? value;
          }
          setSettings(value);
          setCurrentSettingsValue(undefined);
          setCurrentSettingsDisplayValue("");
        }}
        currentFieldValue={currentSettingsValue}
        label={"Settings"}
        items={Settings ? [Settings] : []}
        hasError={errors?.Settings?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Settings", currentSettingsValue)
        }
        errorMessage={errors?.Settings?.errorMessage}
        getBadgeText={getDisplayValue.Settings}
        setFieldValue={(model) => {
          setCurrentSettingsDisplayValue(
            model ? getDisplayValue.Settings(model) : ""
          );
          setCurrentSettingsValue(model);
        }}
        inputFieldRef={SettingsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Settings"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Settings"
          value={currentSettingsDisplayValue}
          options={SettingsRecords.filter(
            (r) => !SettingsIdSet.has(getIDValue.Settings?.(r))
          ).map((r) => ({
            id: getIDValue.Settings?.(r),
            label: getDisplayValue.Settings?.(r),
          }))}
          isLoading={SettingsLoading}
          onSelect={({ id, label }) => {
            setCurrentSettingsValue(
              SettingsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentSettingsDisplayValue(label);
            runValidationTasks("Settings", label);
          }}
          onClear={() => {
            setCurrentSettingsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchSettingsRecords(value);
            if (errors.Settings?.hasError) {
              runValidationTasks("Settings", value);
            }
            setCurrentSettingsDisplayValue(value);
            setCurrentSettingsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Settings", currentSettingsDisplayValue)
          }
          errorMessage={errors.Settings?.errorMessage}
          hasError={errors.Settings?.hasError}
          ref={SettingsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Settings")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              phone,
              email,
              logo,
              Settings,
              Campaigns: values,
            };
            const result = onChange(modelFields);
            values = result?.Campaigns ?? values;
          }
          setCampaigns(values);
          setCurrentCampaignsValue(undefined);
          setCurrentCampaignsDisplayValue("");
        }}
        currentFieldValue={currentCampaignsValue}
        label={"Campaigns"}
        items={Campaigns}
        hasError={errors?.Campaigns?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Campaigns", currentCampaignsValue)
        }
        errorMessage={errors?.Campaigns?.errorMessage}
        getBadgeText={getDisplayValue.Campaigns}
        setFieldValue={(model) => {
          setCurrentCampaignsDisplayValue(
            model ? getDisplayValue.Campaigns(model) : ""
          );
          setCurrentCampaignsValue(model);
        }}
        inputFieldRef={CampaignsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Campaigns"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Campaign"
          value={currentCampaignsDisplayValue}
          options={CampaignsRecords.filter(
            (r) => !CampaignsIdSet.has(getIDValue.Campaigns?.(r))
          ).map((r) => ({
            id: getIDValue.Campaigns?.(r),
            label: getDisplayValue.Campaigns?.(r),
          }))}
          isLoading={CampaignsLoading}
          onSelect={({ id, label }) => {
            setCurrentCampaignsValue(
              CampaignsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentCampaignsDisplayValue(label);
            runValidationTasks("Campaigns", label);
          }}
          onClear={() => {
            setCurrentCampaignsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchCampaignsRecords(value);
            if (errors.Campaigns?.hasError) {
              runValidationTasks("Campaigns", value);
            }
            setCurrentCampaignsDisplayValue(value);
            setCurrentCampaignsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Campaigns", currentCampaignsDisplayValue)
          }
          errorMessage={errors.Campaigns?.errorMessage}
          hasError={errors.Campaigns?.hasError}
          ref={CampaignsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Campaigns")}
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
