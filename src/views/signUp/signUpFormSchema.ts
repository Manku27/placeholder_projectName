import { USER_ROLE_OPTIONS } from "../../constants/userConstants";
import { DROP_DOWN, INPUT } from "../../types/dataEntryFieldTypes";

export const SIGN_UP_SCHEMA = {
  userName: {
    label: "Pick a User Name",
    meta: {
      fieldType: INPUT,
      fieldXs: 12
    }
  },
  passWord: {
    label: "Set a Password",
    meta: {
      fieldType: INPUT,
      fieldXs: 12
    },
    type: "password"
  },
  userRole: {
    label: "Choose a Role",
    meta: {
      fieldType: DROP_DOWN,
      fieldXs: 12
    },
    options: USER_ROLE_OPTIONS
  }
};
