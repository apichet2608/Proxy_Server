import React from "react";
import ListItem from "./ListItem/ListItem_1/ListItem_1";
import ListItem_2 from "./ListItem/ListiTem_2/ListiTem_2";
import ListItem_3 from "./ListItem/ListItem_3/ListItem_3";
import ListItem_4 from "./ListItem/ListItem_4/ListItem_4";
import TitleDrawer from "./TitleDrawer";

import DashboardIcon from "../../../../public/Icon/Common/icons8-dashboard-96.png";
import ReportIcon from "../../../../public/Icon/Common/report.png";
import IOT from "../../../../public/Icon/Common/iot.png";
import SMF from "../../../../public/Icon/Common/industry-40.png";

function ListButton({ closeDrawer }) {
  return (
    <ul className="menu px-4 py-0 w-80 min-h-full bg-base-100 text-base-content rounded-r-xl ">
      <TitleDrawer closeDrawer={closeDrawer} />
      <div className="mt-2"></div>
      <ListItem
        iconPaths={[{ img: DashboardIcon }]}
        title="App2"
        links={[
          { path: "/app2/dashboard", label: "Dashboard" },
          { path: "/app2/dashboard2", label: "Dashboard2" },
        ]}
        closeDrawer={closeDrawer}
      />
      <li></li>
    </ul>
  );
}

export default ListButton;
