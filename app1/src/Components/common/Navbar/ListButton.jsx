import React from "react";
import ListItem from "./ListItem/ListItem_1/ListItem_1";
import TitleDrawer from "./TitleDrawer";

import DashboardIcon from "../../../../public/Icon/Common/icons8-dashboard-96.png";

function ListButton({ closeDrawer }) {
  return (
    <ul className="menu px-4 py-0 w-80 min-h-full bg-base-100 text-base-content rounded-r-xl ">
      <TitleDrawer closeDrawer={closeDrawer} />
      <div className="mt-2"></div>
      <ListItem
        iconPaths={[{ img: DashboardIcon }]}
        title="App1"
        links={[
          { path: "/app1/dashboard", label: "Dashboard" },
          { path: "/app1/dashboard2", label: "Dashboard2" },
        ]}
        closeDrawer={closeDrawer}
      />
      <li></li>
    </ul>
  );
}

export default ListButton;
