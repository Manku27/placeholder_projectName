import * as yup from "yup";
import { PasswordRegex } from "../../constants/regex";

export const signUpvalidationSchema = yup.object({
  userName: yup.string().required("Required"),
  passWord: yup.string().min(8).required("Required"),
  userRole: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      PasswordRegex,
      "Password must have at least one uppercase letter, one lowercase letter, one number and one special character."
    )
});
