import React from "react";
import Sidemenu from "./Sidemenu";
import TweetFeed from "./TweetFeed";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidemenu />

      {/* TweetFeed */}
      <TweetFeed />

      {/* RightWidget  */}
    </div>
  );
}

export default App;
