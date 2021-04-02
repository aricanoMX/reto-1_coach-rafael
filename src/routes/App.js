import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Layout } from 'components/Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Offer } from 'pages/Offer/Offer';
import { NotFound } from 'pages/NotFound/NotFound';
import { GlobalStyle } from 'styles/GlobalStyles';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      {/* <Layout> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/make-offer" component={Offer} />
        <Route component={NotFound} />
      </Switch>
      {/* </Layout> */}
    </BrowserRouter>
  );
};
