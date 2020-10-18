import React from "react";
import "./App.css";
import BottomNav from "./Component/Navbar/BottomNav/BottomNav";
import TopNav from "./Component/Navbar/TopNav/TopNav";
import SplashScreen from "./Component/SplashScreen/SplashScreen";
import { Switch, Route } from "react-router-dom";
import { Suspense } from "react";
import SignUp from "./Containers/SignUp/SignUp";
import Library from "./Component/Library/Library";
import Settings from "./Pages/Settings/Settings";
import Home from "./Component/Home/Home";
import Playlist from "./Pages/Settings/Playlist/Playlist";
import Chat from "./Pages/Settings/Chat/Chat";
import Profile from "./Pages/Settings/Profile/Profile";
// const Login = React.lazy(() => import('./Containers/Login/Login'))
import Login from "./Containers/Login/Login";

function App() {
  
  return (
    <div className="App">
      {/* <Suspense fallback={SplashScreen}> */}
      <TopNav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/library" component={Library} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/albums" component={Home} />
        <Route exact path="/playlists" component={Playlist} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
      <BottomNav />
      {/* </Suspense> */}
    </div>
  );
}

export default App;
