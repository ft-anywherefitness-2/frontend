import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <Router>
        <NavBar />
     

    <div className="pages">
      <Switch>
         {/* component={Signup} */}
         <Route exact path="/signup" />
         {/* component={Login} */}
         <Route exact path="/login" />
        
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
