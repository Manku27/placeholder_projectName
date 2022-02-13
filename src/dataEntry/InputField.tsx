import {
  Button,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import { useState } from "react";
import { useController } from "react-hook-form";

interface Props {
  control: any;
  label: string;
  name: any;
  type: any;
}

export const InputField = ({
  control,
  label,
  name,
  type = "text",
  ...rest
}: Props) => {
  const {
    field: input,
    fieldState: { error }
  } = useController({
    name,
    control,
    defaultValue: ""
  });

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <FormLabel>{label}</FormLabel>
      {type === "password" ? (
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            variant="outlined"
            isFullWidth={true}
            isInvalid={!!error}
            errorBorderColor="crimson"
            sx={{ mt: 1 }}
            {...input}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      ) : (
        <Input
          type={type}
          placeholder={label}
          variant="outlined"
          isFullWidth={true}
          isInvalid={!!error}
          errorBorderColor="crimson"
          sx={{ mt: 1 }}
          {...input}
        />
      )}

      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </>
  );
};
