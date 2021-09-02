import React from "react";
import "./Sidemenu.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import MenuOptions from "./MenuOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonIcon from "@material-ui/icons/Person";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Button from "@material-ui/core/Button";

const Sidemenu = () => {
  return (
    <div className="sidemenu">
      {/*  Twitter icon */}
      <TwitterIcon className="twitter__top__icon" />

      <MenuOptions active text="Home" Icon={<HomeIcon />} />
      <MenuOptions text="Explore" Icon={<SearchIcon />} />
      <MenuOptions text="Notifications" Icon={<NotificationsIcon />} />
      <MenuOptions text="Messages" Icon={<MailOutlineIcon />} />
      <MenuOptions text="Bookmarks" Icon={<BookmarkBorderIcon />} />
      <MenuOptions text="Lists" Icon={<ListAltIcon />} />
      <MenuOptions text="Profile" Icon={<PersonIcon />} />
      <MenuOptions text="More" Icon={<MoreHorizIcon />} />

      <Button variant="outlined" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidemenu;
