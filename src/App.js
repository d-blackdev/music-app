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
import Discover from "./Pages/Discover/Discover";

function App() {
  
  return (
    <div className="App">
      {/* <Suspense fallback={SplashScreen}> */}
      <TopNav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route  path="/signup" component={SignUp} />
        <Route  path="/library" component={Library} />
        <Route  path="/settings" component={Settings} />
        <Route  path="/albums" component={Home} />
        <Route  path="/playlists" component={Playlist} />
        <Route  path="/chat" component={Chat} />
        <Route path="/profile" component={Profile} />
        <Route path="/discovery" component={Discover}/>
      </Switch>
      <BottomNav />
      {/* </Suspense> */}
    </div>
  );
}

export default App;
