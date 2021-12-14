import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
  useToast
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validation/validationSchema";
import { LoginPayload } from "../../types/user";

export function LoginScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginPayload>({ resolver: yupResolver(loginSchema) });
  const toast = useToast();
  const onSubmit = (data: any) => {
    console.log("data", data);
    toast({
      title: "Submitted!",
      status: "success",
      position: "top-right",
      duration: 3000,
      isClosable: true
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Sign in to your account</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to start <Link color={"blue.400"}>contributing</Link> ✌️
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl
                  isInvalid={!!errors?.email}
                  errortext={errors?.email?.message}
                  p="4"
                  isRequired
                >
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                  />
                  <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={!!errors?.password?.message}
                  errortext={errors?.password?.message}
                  px="4"
                  pb="4"
                  isRequired
                >
                  <FormLabel>Password</FormLabel>
                  <Input type="password" {...register("password")} />
                  <FormErrorMessage>
                    {errors?.password?.message}
                  </FormErrorMessage>
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500"
                    }}
                    type="submit"
                    disabled={!!errors.email || !!errors.password}
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </form>
    </>
  );
}
