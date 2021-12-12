import { UserRole } from "./user";

export interface RouteProps {
  exact: boolean;
  children: React.ReactNode;
  guard: string;
  path: string;
  roles: UserRole[];
}
