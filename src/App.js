import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import LandingPage from './Components/LandingPage/LandingPage';
import TagPage from './Components/Tag/TagPage';
import Footer from './Components/Footer/Footer';
import ArtistPage from './Components/Artist/ArtistPage'
import AlbumPage from './Components/Album/AlbumPage'
import SearchPage from './Components/Search/SearchPage'

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)} >
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }} className="background">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/tag/:tagId" component={TagPage} />
          <Route exact path="/artist/:artistName" component={ArtistPage} />
          <Route exact path="/artist/:artistName/album/:albumName" component={AlbumPage} />
          <Route exact path="/search/:query" component={SearchPage} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;

