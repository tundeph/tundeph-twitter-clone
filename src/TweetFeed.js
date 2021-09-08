//ABOUT: This is the main body for the Tweet feed, it contains the <TweetHeader> and <Tweets> components

import React, { useState, useEffect } from "react";
import "./TweetFeed.css";
import TweetHeader from "./TweetHeader";
import Tweets from "./Tweets";
import db from "./firebase";
import FlipMove from "react-flip-move";

function TweetFeed() {
  const [tweets, setTweets] = useState([]);

  //useEffect is used to track changes in the  database and instantly show it
  //in the tweet feed.
  useEffect(() => {
    db.collection("tweets").onSnapshot((snapshot) =>
      setTweets(
        snapshot.docs.map((doc) => {
          // doc.id is batched into an object with doc.data to serve as key for the objects
          //when rendering the data onto UI in <Tweets> component below
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
      {/* <FlipMove> component was imported to give tweets an animation effect */}
      <FlipMove>
        {tweets.map((post) => {
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
