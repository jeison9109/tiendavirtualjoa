import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../screens/Home";
import { Information } from "../screens/Information";
import { Payment } from "../screens/Payment";
import { Success } from "../screens/Success";
import { NotFound } from "../screens/NotFound";
import { Checkout } from "../screens/Checkout";
import { Layout } from "../components/Layout";
import AppContext from "../context/AppContex";
import { useInitialState } from "../hooks/useInitialState";
import initialState from "../data/initialState";

export const AppRouter = () => {
  const initialState = useInitialState();
  return (
    <>
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/checkout" component={Checkout} />
              <Route
                exact
                path="/checkout/information"
                component={Information}
              />
              <Route exact path="/checkout/payment" component={Payment} />
              <Route exact path="/checkout/success" component={Success} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
};
