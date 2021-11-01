import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicReact from "./pages/basic/React";
import BasicLogin from "./pages/basic/Login";
import BasicHome from "./pages/basic/Home";
import BasicMovieDetail from "./pages/basic/DetailMovie";
import BasicOrder from "./pages/basic/Order";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/main/Home";
import MovieDetail from "./pages/main/MovieDetail";
import Order from "./pages/main/Order";
import Payment from "./pages/main/Payment";
import Ticket from "./pages/main/Ticket";
import User from "./pages/main/User";

import ManageMovie from "./pages/main/ManageMovie";
import ManageSchedule from "./pages/main/ManageSchedule";
import Dashboard from "./pages/main/Dashboard";

import PrivateRoute from "./helpers/routes/privateRoute";
import PublicRoute from "./helpers/routes/publicRoute";

import CounterClass from "./pages/basic/Counter/counter.class";
import CounterFunc from "./pages/basic/Counter/counter.functional";

import { Provider } from "react-redux";
import store from "./stores/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <PublicRoute path="/basic-react" exact component={BasicReact} />
            <PublicRoute path="/basic-login" restricted={true} exact component={BasicLogin} />
            <PrivateRoute path="/basic-home" exact component={BasicHome} />
            <Route path="/basic-detail/:movieId" exact component={BasicMovieDetail} />
            <Route path="/basic-order" exact component={BasicOrder} />
            <Route path="/Login" exact component={Login} />
            <Route path="/Register" exact component={Register} />
            <Route path="/Home" exact component={Home} />
            <Route path="/MovieDetail/:movieId" exact component={MovieDetail} />
            <Route path="/Order" exact component={Order} />
            <Route path="/Payment" exact component={Payment} />
            <Route path="/Ticket" exact component={Ticket} />
            <Route path="/User" exact component={User} />
            <PublicRoute path="/basic-counter-class" exact component={CounterClass} />
            <PublicRoute path="/basic-counter-func" exact component={CounterFunc} />
            <Route path="/ManageMovie" exact component={ManageMovie} />
            <Route path="/ManageSchedule" exact component={ManageSchedule} />
            <Route path="/Dashboard" exact component={Dashboard} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
