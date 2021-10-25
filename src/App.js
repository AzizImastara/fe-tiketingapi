import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicReact from "./pages/basic/React";
import BasicLogin from "./pages/basic/Login";
import BasicHome from "./pages/basic/Home";
import BasicMovieDetail from "./pages/basic/DetailMovie";
import BasicOrder from "./pages/basic/Order";
import Login from "./pages/auth/Login";
import Home from "./pages/main/Home";
import MovieDetail from "./pages/main/MovieDetail";
import Order from "./pages/main/Order";
import Payment from "./pages/main/Payment";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/basic-react" exact component={BasicReact} />
          <Route path="/basic-login" exact component={BasicLogin} />
          <Route path="/basic-home" exact component={BasicHome} />
          <Route path="/basic-detail/:movieId" exact component={BasicMovieDetail} />
          <Route path="/basic-order" exact component={BasicOrder} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Home" exact component={Home} />
          <Route path="/MovieDetail" exact component={MovieDetail} />
          <Route path="/Order" exact component={Order} />
          <Route path="/Payment" exact component={Payment} />
        </Switch>
      </Router>
    );
  }
}

export default App;
