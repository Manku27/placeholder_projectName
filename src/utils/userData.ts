import { AuthUser, AUTH_USER_STORAGE_KEY } from "../types/user";

const getAuthUser = () => {
  const authUser = localStorage.getItem(AUTH_USER_STORAGE_KEY);
  const parsedAuthUser: AuthUser = authUser ? JSON.parse(authUser) : null;
  return parsedAuthUser;
};

const setAuthUserToStorage = (user: AuthUser) => {
  const authUser = JSON.stringify(user);
  localStorage.setItem(AUTH_USER_STORAGE_KEY, authUser);
};

const AuthService = {
  getAuthUser,
  setAuthUserToStorage
};

export { AuthService };
