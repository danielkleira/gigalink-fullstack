import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";
import Body from "../Pages";

import { useState } from "react";

const Routes = () => {
  const [authenticated, setAuthenthicated] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login
              authenticated={authenticated}
              setAuthenthicated={setAuthenthicated}
            />
          </Route>

          <Route exact path="/cadastro/">
            <Cadastro />
          </Route>

          <Route exact path="/dashboard/">
            <Body
              authenticated={authenticated}
              setAuthenthicated={setAuthenthicated}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
