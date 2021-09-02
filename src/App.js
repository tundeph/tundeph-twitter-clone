import React from "react";
import Sidemenu from "./Sidemenu";
import TweetFeed from "./TweetFeed";
import Widgets from "./Widgets";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidemenu />

      {/* TweetFeed */}
      <TweetFeed />

      {/* Widgets  */}
      <Widgets />
    </div>
  );
}

export default App;
