import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar'
import LandingPage from './Components/LandingPage/LandingPage'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)} >
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }} className="background">
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;

