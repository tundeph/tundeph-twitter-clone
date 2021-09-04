import React, { useState, useEffect } from "react";
import "./TweetFeed.css";
import TweetHeader from "./TweetHeader";
import Tweets from "./Tweets";
import db from "./firebase";
import FlipMove from "react-flip-move";

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

      <FlipMove>
        {tweets.map((post) => (
          <Tweets
            key={post.text}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>

      {/* Tweets */}
    </div>
  );
}

export default TweetFeed;
