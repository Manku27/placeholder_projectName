import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ROUTES } from "./route/routes";
import "./styles.css";
import { RouteGuard } from "./route/RouteGuard";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./views/theme/theme";

export default function App() {
  return (
    <div className="App">
      {/* localisazation provider with dateadaptor */}
      <ChakraProvider theme={theme}>
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
      </ChakraProvider>
    </div>
  );
}
