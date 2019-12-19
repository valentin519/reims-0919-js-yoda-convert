import React from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage';

// import LinkRedirectory from './components/links/link.component';
// import { Route, Switch } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
// import Converter from './components/Converter';



function App() {
  return (
    <div className="App">
 
        <BrowserRouter>
          
          <Switch>
            <Route exact path="/" exact component={WelcomePage} />
            <Route path="/main" component={} />
          </Switch>
          
        </BrowserRouter>  */}

      <WelcomePage/>
    </div>
  );
}

export default App;
