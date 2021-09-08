//ABOUT: This is the header part of the TweetFeed where tweets are actually typed out and posted

import React, { useState } from "react";
import "./TweetHeader.css";
import { Avatar, Button } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import GifIcon from "@material-ui/icons/Gif";
import BarChartIcon from "@material-ui/icons/BarChart";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import db from "./firebase";

function TweetHeader() {
  const [tweetMessage, setTweetMessage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("tweets").add({
      avatar: "https://carpaddy.com/assets/img/testimonial-3.png ",
      displayName: "Toluu",
      image:
        "https://media.giphy.com/media/ICeaRr3cDaF4EeDXj6/giphy.gif?cid=ecf05e47dca6dec1da64f94c4ffec9e47faef33401473447&rid=giphy.gif&ct=g",
      text: tweetMessage,
      userName: "toluu_",
      verified: true,
    });

    setTweetMessage("");
  };
  return (
    <div className="tweetBox">
      <div className="tweetHeader">
        Home <StarBorderIcon className="headerIcon" />
      </div>
      <form>
        <div className="tweetInput">
          <Avatar src="https://carpaddy.com/assets/img/testimonial-3.png" />
          <div className="tweetRight">
            <div className="tweetTextarea">
              <textarea
                placeholder="What's happening?"
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage}
              ></textarea>
            </div>
            <div className="tweetButtons">
              <div className="left">
                <CropOriginalIcon />
                <GifIcon />
                <BarChartIcon />
                <SentimentSatisfiedIcon />
              </div>
              <div className="right">
                <Button className="tweetBox_tweetButton" onClick={sendTweet}>
                  Tweet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TweetHeader;
