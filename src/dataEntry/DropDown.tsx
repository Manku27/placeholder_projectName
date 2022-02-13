import { FormErrorMessage, FormLabel, Select } from "@chakra-ui/react";
import { useController } from "react-hook-form";

interface Props {
  control: any;
  label: string;
  name: any;
  options: any;
}

export const DropDown = ({ control, label, name, options, ...rest }: Props) => {
  const {
    field: comboBox,
    fieldState: { error }
  } = useController({
    name,
    control,
    defaultValue: ""
  });

  let preparedOptions = options;
  if (typeof options[0] === typeof "string") {
    preparedOptions = options.map((option: string) => {
      let preparedOption: any = {};
      preparedOption.value = preparedOption.description = option;
      return preparedOption;
    });
  }

  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Select placeholder={label} {...comboBox}>
        {preparedOptions.map((optionElement: any) => (
          <option value={optionElement.value}>
            {optionElement.description}
          </option>
        ))}
      </Select>

      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </>
  );
};
