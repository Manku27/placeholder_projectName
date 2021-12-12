import { RouteProps } from "../types/route";
import { AuthService } from "../utils/userData";
import {
  ROUTE_GUARD_TYPE_AUTH,
  ROUTE_GUARD_TYPE_UNAUTH,
  UserRole
} from "../types/user";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import { HOME_ROUTE, LANDING_ROUTE } from "./routes";
import { AuthenticatedScreen } from "../views/pages/AuthenticatedScreen";

export const RouteGuard = ({
  children,
  exact,
  guard,
  path,
  roles
}: RouteProps) => {
  const authUser = AuthService.getAuthUser();
  const isAuthenticated = authUser ? true : false;

  const renderProp = ({ Location }: any) => {
    if (guard === ROUTE_GUARD_TYPE_AUTH && !isAuthenticated) {
      return (
        <Redirect
          to={{ pathname: LANDING_ROUTE.path, state: { from: Location } }}
        />
      );
    } else if (
      isAuthenticated &&
      // user is trying to access a route which cant be accessed by someone who is already logged in
      (guard === ROUTE_GUARD_TYPE_UNAUTH ||
        // user is trying to access unauthorised route
        (authUser &&
          roles.indexOf(authUser.role) === -1 &&
          roles.indexOf(UserRole.General) === -1))
    ) {
      return (
        <Redirect
          to={{ pathname: HOME_ROUTE.path, state: { from: Location } }}
        />
      );
    }

    return guard === ROUTE_GUARD_TYPE_AUTH ? (
      <AuthenticatedScreen>{children}</AuthenticatedScreen>
    ) : (
      children
    );
  };

  return <Route exact={exact} path={path} render={renderProp} />;
};
