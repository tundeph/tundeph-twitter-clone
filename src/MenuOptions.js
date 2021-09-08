//ABOUT: These are the menus contained in the sidemenu.js as objects

import React from "react";
import "./MenuOptions.css";

const MenuOptions = ({ active, text, Icon }) => {
  return (
    <div className={`menuOptions ${active && "menuOptions__active"} `}>
      {Icon}
      <h4 className="menuText">{text}</h4>
    </div>
  );
};

export default MenuOptions;
