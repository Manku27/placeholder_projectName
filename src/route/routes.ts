import {
  ROUTE_GUARD_TYPE_AUTH,
  ROUTE_GUARD_TYPE_GENERAL,
  ROUTE_GUARD_TYPE_UNAUTH,
  UserRole
} from "../types/user";
import { AdminLandingScreen } from "../views/pages/AdminLandingScreen";
import { ContributorLandingScreen } from "../views/pages/ContributorLandingScreen";
import { LoginScreen } from "../views/pages/LoginScreen";
import { LandingScreen } from "../views/pages/LandingScreen";
import { Home } from "../views/pages/Home";
import { NotFoundScreen } from "../views/pages/NotFoundScreen";

export const LOGIN_ROUTE = {
  name: "Login",
  path: "/login",
  guard: ROUTE_GUARD_TYPE_UNAUTH,
  component: LoginScreen,
  exact: true,
  roles: [UserRole.General]
};

export const HOME_ROUTE = {
  name: "__Home__",
  path: "/",
  guard: ROUTE_GUARD_TYPE_GENERAL,
  component: Home,
  exact: true,
  roles: [UserRole.General]
};

export const LANDING_ROUTE = {
  name: "Landing",
  path: "/landing",
  guard: ROUTE_GUARD_TYPE_GENERAL,
  component: LandingScreen,
  exact: true,
  roles: [UserRole.General]
};

export const ADMIN_LANDING_ROUTE = {
  name: "Admin Landing",
  path: "/admin/landing",
  guard: ROUTE_GUARD_TYPE_AUTH,
  component: AdminLandingScreen,
  exact: true,
  roles: [UserRole.Admin]
};

export const CONTRIBUTOR_LANDING_ROUTE = {
  name: "Contributor Landing",
  path: "/contributor/landing",
  guard: ROUTE_GUARD_TYPE_AUTH,
  component: ContributorLandingScreen,
  exact: true,
  roles: [UserRole.Contributor]
};

export const NOT_FOUND_ROUTE = {
  name: "Page Not Found",
  path: "*",
  guard: ROUTE_GUARD_TYPE_GENERAL,
  component: NotFoundScreen,
  exact: false,
  roles: [UserRole.General]
};

export const ROUTES = [
  { ...LOGIN_ROUTE },
  { ...HOME_ROUTE },
  { ...LANDING_ROUTE },
  { ...ADMIN_LANDING_ROUTE },
  { ...CONTRIBUTOR_LANDING_ROUTE },

  // keeep this last or it will override other routes
  { ...NOT_FOUND_ROUTE }
];
