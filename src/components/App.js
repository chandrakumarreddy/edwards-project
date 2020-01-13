import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Login/login";
import Sites from "./Sites/sites";
import Site from "./Site/site";
import SiteView from "./Site/view";
import PatientView from "./Site/patient/patientView";

function App() {
  return (
    <div className="app">
      <Router>
        <CssBaseline />
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/sites" exact component={Sites} />
          <Route
            path="/sites/:site/:type/:patient"
            exact
            component={PatientView}
          />
          <Route path="/sites/:site/:type" exact component={SiteView} />
          <Route path="/sites/:site" component={Site} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
