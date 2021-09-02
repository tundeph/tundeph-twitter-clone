import React from "react";
import "./Widgets.css";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widget__top">
        <Input
          disableUnderline={true}
          placeholder="Search Twitter"
          startAdornment={
            <InputAdornment position="start">
              <SearchRoundedIcon />
            </InputAdornment>
          }
        />
      </div>
    </div>
  );
}

export default Widgets;
