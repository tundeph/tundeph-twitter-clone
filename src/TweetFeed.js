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
      setTweets(
        snapshot.docs.map((doc) => {
          // console.log(doc.id);
          return [doc.id, doc.data()];
        })
      )
    );
  }, []);

  return (
    <div className="tweetFeed">
      {/* Tweet Header */}
      <TweetHeader />
      {/* Tweets */}
      {/* {tweets.map((tweets) => ( */}

      <FlipMove>
        {tweets.map((post) => {
          // console.log(post[0]);
          return (
            <Tweets
              key={post[0]}
              displayName={post[1].displayName}
              userName={post[1].userName}
              verified={post[1].verified}
              text={post[1].text}
              image={post[1].image}
              avatar={post[1].avatar}
            />
          );
        })}
      </FlipMove>

      {/* Tweets */}
    </div>
  );
}

export default TweetFeed;
