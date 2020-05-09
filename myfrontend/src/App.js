import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import LandingPage from './Components/LandingPage/LandingPage';
import NavHeader from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="finalcontent">
      <Router>
        <NavHeader />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" component={LogIn}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/myquiz" component={LandingPage}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
