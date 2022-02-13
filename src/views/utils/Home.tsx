import { Redirect } from "react-router-dom";
import { getHomeRoute } from "../../route/routeMethods";

export function Home() {
  const homeRoute = getHomeRoute();

  return <Redirect to={{ pathname: homeRoute.path }} />;
}
