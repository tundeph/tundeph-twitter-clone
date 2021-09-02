import React from "react";
import "./TweetHeader.css";
import { Avatar, Button } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import GifIcon from "@material-ui/icons/Gif";
import BarChartIcon from "@material-ui/icons/BarChart";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";

function TweetHeader() {
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
              <textarea placeholder="What's happening?"></textarea>
            </div>
            <div className="tweetButtons">
              <div className="left">
                <CropOriginalIcon />
                <GifIcon />
                <BarChartIcon />
                <SentimentSatisfiedIcon />
              </div>
              <div className="right">
                <Button className="tweetBox_tweetButton">Tweet </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TweetHeader;
