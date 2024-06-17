import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
function Title() {
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/app2/dashboard":
        setTitle("Dashboard");
        break;
      case "/app2/dashboard":
        setTitle("Dashboard2");
        break;
      default:
        setTitle("Smart Factory Dashboard App");
    }
  }, [location]);

  return (
    <>
      <a className="font-semibold font-Inter mx-4">{title}</a>
    </>
  );
}

export default Title;
