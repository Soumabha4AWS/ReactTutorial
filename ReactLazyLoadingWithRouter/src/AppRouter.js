import './App.css';

import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";


const LazyAboutUs = React.lazy(()=> import("./component/AboutUsComponent"));
const LazyContactUs = React.lazy(()=> import("./component/ContactUsComponent"));

function AppRouter(props) {

  return (
      <Switch>
            <Suspense fallback='loading'>
                <Route path="/contactus" component={LazyContactUs} />
                <Route path="/aboutus" component={LazyAboutUs} />
            </Suspense>
      </Switch>
  );
}

export default AppRouter;
