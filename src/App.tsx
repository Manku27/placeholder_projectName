import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ROUTES } from "./route/routes";
import "./styles.css";
import { RouteGuard } from "./route/RouteGuard";

export default function App() {
  return (
    <div className="App">
      {/* localisazation provider with dateadaptor */}
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      <Router>
        <Switch>
          {ROUTES.map((route) => (
            <RouteGuard
              exact={route.exact}
              guard={route.guard}
              key={route.name}
              path={route.path}
              roles={route.roles}
            >
              <route.component />
            </RouteGuard>
          ))}
        </Switch>
      </Router>
    </div>
  );
}
