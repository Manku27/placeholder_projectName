import { UserRole } from "../types/user";
import { AuthService } from "../utils/userData";
import {
  ADMIN_LANDING_ROUTE,
  CONTRIBUTOR_LANDING_ROUTE,
  LANDING_ROUTE,
  ROUTES
} from "./routes";

export const getHomeRoute = () => {
  const authUser = AuthService.getAuthUser();
  if (authUser && authUser.role === UserRole.Admin) {
    return ADMIN_LANDING_ROUTE;
  } else if (authUser && authUser.role === UserRole.Contributor) {
    return CONTRIBUTOR_LANDING_ROUTE;
  }
  return LANDING_ROUTE;
};

export const getRouteByPath = (name: string) => {
  ROUTES.find((route) => route.path === name);
};
