import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./Components/NavBar.js";
import HomePage from "./Components/HomePage.js";
import Login from "./Components/Login.js";
import SignUp from "./Components/SignUp.js";
// import InstructorPage from "./Components/InstructorPage.js";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            {/* <Route exact path="/signup" component={InstructorPage} /> */}
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
      <footer>
        <h3>Anywhere Fitness Copyright 2021 </h3> <br />
        <p style={{ color: "#EE6C4D" }}>
          Collaborators: Bradly Lewis, Bryan Guner, Chelsea Ceballos, <br /> Kat
          Yevsukov, Teresa Franxman{" "}
        </p>
      </footer>
    </>
  );
}

export default App;
