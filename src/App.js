import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Profile from './pages/templates/profile';
import Home  from './pages/home';

function App() {
  return (
    <>
    <Router>
      <div>
                
        <Switch>
           <Route exact path="/" >
              <Home/>
             </Route> 
          <Route path="/profile/:id" children={<Profile />} />
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
