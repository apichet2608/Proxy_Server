import React from "react";
import Buttonmode from "../ThemeSwitch/ThemeSwitch";
import Drawer from "./Drawer";
import Title from "./Title";
function Navbar() {
  return (
    <>
      <div className="navbar bg-primary text-primary-content border-none">
        <div className="">
          <Drawer />
        </div>
        <div className="flex-1 place-content-between">
          <Title />
          <Buttonmode />
        </div>
      </div>
    </>
  );
}

export default Navbar;
