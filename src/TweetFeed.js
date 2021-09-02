import React, { useState, useEffect } from "react";
import "./TweetFeed.css";
import TweetHeader from "./TweetHeader";
import Tweets from "./Tweets";
import db from "./firebase";

function TweetFeed() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    db.collection("tweets").onSnapshot((snapshot) =>
      setTweets(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="tweetFeed">
      {/* Tweet Header */}
      <TweetHeader />
      {/* Tweets */}
      {/* {tweets.map((tweets) => ( */}
      {tweets.map((post) => (
        <Tweets
          displayName={post.displayName}
          userName={post.userName}
          verified={post.verified}
          text={post.text}
          image={post.image}
          avatar={post.avatar}
        />
      ))}

      {/* Tweets */}
    </div>
  );
}

export default TweetFeed;
