export const AUTH_USER_STORAGE_KEY = "authUser";

export interface AuthUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  role: UserRole;
  jwtToken: string;
  refreshToken: string;
}

export enum UserRole {
  Admin = "Admin",
  Contributor = "Contributor",
  General = "General"
}

export const ROUTE_GUARD_TYPE_AUTH = "AUTH";

export const ROUTE_GUARD_TYPE_UNAUTH = "UNAUTH";

export const ROUTE_GUARD_TYPE_GENERAL = "GENERAL";

export interface LoginPayload {
  email: string;
  password: string;
}
