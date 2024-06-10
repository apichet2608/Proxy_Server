import React from "react";

function titlePic({ Pic }) {
  return (
    <>
      <div className="flex gap-2">
        {Pic.map((path, index) => (
          <img
            key={index}
            src={path.icon}
            alt="icon"
            width={"24px"}
            height={"24px"}
          />
        ))}
      </div>
    </>
  );
}

export default titlePic;
