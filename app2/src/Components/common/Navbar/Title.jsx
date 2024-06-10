import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
function Title() {
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setTitle("Smart Factory App2");
        break;
      default:
        setTitle("Smart Factory App2");
    }
  }, [location]);

  return (
    <>
      <a className="font-semibold font-Inter mx-4">{title}</a>
    </>
  );
}

export default Title;
