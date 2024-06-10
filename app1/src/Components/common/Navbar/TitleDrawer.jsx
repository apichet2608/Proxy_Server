import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import TitlePic from "./titlePic";

import DashboardIcon from "../../../../public/Icon/Common/icons8-test-50.png";

function TitleDrawer({ closeDrawer }) {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div className="bg-base-100 flex gap-2">
          <TitlePic Pic={[{ icon: DashboardIcon }]} />
          <p className="text-2xl font-extrabold text-center m-auto">
            Fujikura A1
          </p>
        </div>
        <button
          type="button"
          data-view-component="true"
          className="btn btn-ghost btn-square bg-base-200 text-error"
          onClick={closeDrawer}
        >
          <CloseIcon />
        </button>
      </div>
    </>
  );
}

export default TitleDrawer;
