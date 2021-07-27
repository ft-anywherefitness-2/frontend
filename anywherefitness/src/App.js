import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import NavBar from './Components/NavBar.js'
import HomePage from './Components/HomePage.js'
import Login from './Components/Login.js'
import SignUp from './Components/SignUp.js'

function App() {
  return (
    <>
      <Router>
        <NavBar />
     

    <div className="pages">
      <Switch>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
