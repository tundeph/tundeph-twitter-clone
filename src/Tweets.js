import React from "react";
import "./Tweets.css";
import Avatar from "@material-ui/core/Avatar";
import VerifiedUserRoundedIcon from "@material-ui/icons/VerifiedUserRounded";
import RepeatRoundedIcon from "@material-ui/icons/RepeatRounded";
import ReplyRoundedIcon from "@material-ui/icons/ReplyRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import ShareRoundedIcon from "@material-ui/icons/ShareRounded";

function Tweets({
  displayName,
  userName,
  verified,
  timestamp,
  text,
  image,
  avatar,
}) {
  return (
    <div className="tweets">
      <div className="tweets__avatar">
        <Avatar src={avatar}>A</Avatar>
      </div>
      <div className="tweets__body">
        <div className="tweets__header">
          <div className="tweets__headerText">
            <span>
              <h4> {displayName}</h4>{" "}
            </span>
            <span>
              {verified && <VerifiedUserRoundedIcon fontSize="inherit" />}
            </span>
            <span className="tweets__username">@{userName} </span>
          </div>
        </div>

        <div className="tweets__text">
          <p> {text} </p>
        </div>
        <img src={image} alt="tweet img" />

        <div className="tweets__footer">
          <span>
            <ReplyRoundedIcon fontSize="small" />
            <span className="icon__number"> 5</span>
          </span>
          <span>
            <RepeatRoundedIcon fontSize="small" />
            <span className="icon__number">12</span>
          </span>

          <span>
            <FavoriteBorderRoundedIcon fontSize="small" />
            <span className="icon__number">25</span>
          </span>

          <span>
            <ShareRoundedIcon fontSize="small" />
            <span className="icon__number">300</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Tweets;
