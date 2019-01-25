import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CauseHomePage from "./pages/CausePage/CauseHomePage";
import CausePage from "./pages/CausePage/CausePage";
import NavBar from './modules/NavBar';
import GlobalStyle from "./Normalize";
import BoardPage from "./pages/OurBoardPage/BoardPage";
import AboutHomePage from "./pages/AboutPage/AboutHomePage";
import withTracker from "./../components/google_analytics/withTracker";
import Footer from './modules/Footer';

class App extends Component {


  render() {
    return (
      <>
          <GlobalStyle />

            <BrowserRouter>
            <>
              <NavBar />

              <Switch>
                <Route exact path="/" component={withTracker(HomePage)} />
                <Route exact path="/cause" component={withTracker(CauseHomePage)} />
                <Route exact path="/cause/:slug" component={withTracker(CausePage)} />
                <Route exact path="/board-page" component={withTracker(BoardPage)} />
                <Route exact path="/about" component={withTracker(AboutHomePage)} />

              </Switch>
              <Footer />
              </>
            </BrowserRouter>
      </>
      );
  }

}
import("react-ga").then(ReactGA => {
  // ReactGA.initialize('UA-132415809-3')
  ReactGA.initialize('UA-132349651-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
});


export default App;