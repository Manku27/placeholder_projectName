import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid } from "@chakra-ui/react";
import { DROP_DOWN, INPUT } from "../types/dataEntryFieldTypes";
import { InputField } from "./InputField";
import { DropDown } from "./DropDown";

interface Props {
  fields: any;
  onSubmit: (data: any) => void;
  customButtons?: any;
  validationSchema: any;
  isSubmitting?: boolean;
  defaultValues?: any;
  fieldColumnSizeXs?: number;
  disableDefaultSubmitButton?: boolean;
}

export const Form = ({
  fields,
  validationSchema,
  isSubmitting = false,
  customButtons,
  onSubmit,
  defaultValues,
  fieldColumnSizeXs = 6,
  disableDefaultSubmitButton = false
}: Props) => {
  const fieldObjectKeys = Object.keys(fields) as Array<keyof typeof fields>;

  let preparedDefaultValues: any = {};
  if (defaultValues) {
    preparedDefaultValues = defaultValues;
  } else {
    fieldObjectKeys.forEach((fieldName: string) => {
      const field = fields[fieldName];
      if (field.defaultValue) {
        preparedDefaultValues[fieldName] = field.defaultValue;
      }
      //  default value of controller can be used if not supplied here
    });
  }

  const { handleSubmit, control } = useForm({
    defaultValues: preparedDefaultValues,
    mode: "onChange",
    resolver: validationSchema ? yupResolver(validationSchema) : undefined
  });

  const defaultButtons = (
    <Grid item xs={6} sx={{ float: "right" }}>
      <Button
        isSubmitting
        loadingText="Submitting"
        variant="outline"
        bg={"blue.400"}
        color={"white"}
        _hover={{
          bg: "blue.500"
        }}
        disabled={disableDefaultSubmitButton}
      >
        Submit
      </Button>
    </Grid>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container rowGap={3} columnGap={{ xs: 5, sm: 5, md: 6 }}>
        {fieldObjectKeys.map((fieldName: string) => {
          let renderCurrentField = null;
          const field = fields[fieldName];
          if (field) {
            const { meta, ...rest } = field;
            switch (meta.fieldType) {
              case INPUT: {
                renderCurrentField = (
                  <InputField control={control} name={fieldName} {...rest} />
                );
                break;
              }
              case DROP_DOWN: {
                renderCurrentField = (
                  <DropDown control={control} name={fieldName} {...rest} />
                );
                break;
              }
              default:
                renderCurrentField = null;
            }
            return (
              <Grid
                item
                xs={meta.fieldXs ? meta.fieldXs : fieldColumnSizeXs}
                key={fieldName}
              >
                {renderCurrentField}
              </Grid>
            );
          }
          return null;
        })}
        {customButtons ? customButtons : defaultButtons}
      </Grid>
    </form>
  );
};
