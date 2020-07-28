import React from "react";
import { Switch, Route } from "react-router-dom";
import history from "../../utils/history";

export const renderRoutes = (routes, extraProps = {}, switchProps = {}) => {
  if (!routes) return null;
  return (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props) => {
            const location = route.check && route.check(props);
            if (location) {
              props.history.push(location);
              return null;
            }
            return <route.component {...props} {...extraProps} route={route} />;
          }}
          history={history}
        />
      ))}
    </Switch>
  );
};
