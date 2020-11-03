//create a list component which changes with props values
import React from "react";
import ReactDom from "react-dom";
import List from "./list";
import {Router,Link} from "@reach/router"
import Details from "./Details";

const App = () => {
  return (
    <React.StrictMode>
      <div>
          <Link to="/">
            <h1>AdoptPets.com</h1>
          </Link>
          <Router>
              <List path='/'/>
              <Details path='/details/:id' component={Details}/>
          </Router>
      </div>
    </React.StrictMode>
  );
};
ReactDom.render(<App />, document.getElementById("target"));
