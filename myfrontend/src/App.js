import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import LandingPage from './Components/LandingPage/LandingPage';
import NavHeader from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Instructions from './Components/Instructions/Instructions';
import 'bootstrap/dist/css/bootstrap.min.css';

// Codes added

import StartQuiz from "./Components/StartQuiz";
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";

//End of added codes

const App = () => {
  return (
    <div className="finalcontent">
      <Router>
        <NavHeader />
        <StartQuiz />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" component={LogIn}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/myquiz" component={LandingPage}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/instructions" component={Instructions}></Route>

          
          <Route path="/quiz" component={Quiz}></Route>
          <Route path="/result" component={Result}></Route>
      

          
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
