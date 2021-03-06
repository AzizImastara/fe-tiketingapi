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
import AdminRoute from "./helpers/routes/adminRoute";

import CounterClass from "./pages/basic/Counter/counter.class";
import CounterFunc from "./pages/basic/Counter/counter.functional";

import { Provider } from "react-redux";
import { store, persistor } from "./stores/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              {/* Basic */}
              <PublicRoute path="/basic-react" exact component={BasicReact} />
              <PublicRoute path="/basic-login" exact component={BasicLogin} />
              <PrivateRoute path="/basic-home" exact component={BasicHome} />
              <Route path="/basic-detail/:movieId" exact component={BasicMovieDetail} />
              <Route path="/basic-order" exact component={BasicOrder} />
              <PublicRoute path="/basic-counter-class" exact component={CounterClass} />
              <PublicRoute path="/basic-counter-func" exact component={CounterFunc} />

              {/* Public */}
              <PublicRoute path="/" restricted={true} exact component={Login} />
              <PublicRoute path="/Register" exact component={Register} />

              {/* User */}
              <PrivateRoute path="/Home" exact component={Home} />
              <PrivateRoute path="/MovieDetail/:movieId" exact component={MovieDetail} />
              <PrivateRoute path="/Order" exact component={Order} />
              <PrivateRoute path="/Payment" exact component={Payment} />
              <PrivateRoute path="/Ticket/:id" exact component={Ticket} />
              <PrivateRoute path="/User" exact component={User} />

              {/* Admin */}
              <AdminRoute path="/ManageMovie" exact component={ManageMovie} />
              <AdminRoute path="/ManageSchedule" exact component={ManageSchedule} />
              <AdminRoute path="/Dashboard" exact component={Dashboard} />
            </Switch>
          </Router>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            backgroundcolor="black"
            rtl={false}
            pauseOnFocusLoss
            draggable
          />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
