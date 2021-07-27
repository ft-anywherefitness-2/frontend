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
      <footer>
        <h3>Anywhere Fitness Copyright 2021 </h3> <br/>
        <p style={{color:"#EE6C4D"}}>Collaborators: Bradly Lewis, Bryan Guner, Chelsea Ceballos, <br/> Kat Yevsukov, Teresa Franxman  </p>
      </footer>

    </>
  );
}

export default App;
