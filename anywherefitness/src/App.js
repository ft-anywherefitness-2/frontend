import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './Components/NavBar.js'
import HomePage from './Components/HomePage.js'
import Login from './Components/Login.js'
import SignUp from './Components/SignUp.js'

const initialValues = {name:'', username: '', password: '', role: '', type:'', 'startTime': '', duration: '', intensityLevel: '', location: '', registeredAttendees: '', maxClassSize: '', classType: '', date: '' }

function App() {
  const [formValues, setFormValues] = useState(initialValues)

  // HANDLERS /////////////////////////////////
  const inputChange = (name, value) => setFormValues({ ...formValues, [name]: value })

  return (
    <>
      <Router>
        <NavBar />
     

    <div className="pages">
      <Switch>
        <Route exact path="/signup">
          <SignUp
            formValues={formValues}
            change={inputChange}
            // submit={}
            // disabled={}
            // errors={}
          />
        </Route>
        <Route exact path="/login" component={Login}/>
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
