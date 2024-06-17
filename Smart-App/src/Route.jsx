import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Page/Dashboard/main/page";
import Dashboard2 from "./Page/Dashboard2/main/Dashboard2";
function RouteComponents() {
  return (
    <>
      <Routes>
        <Route path="/app2/dashboard" element={<Dashboard />} />
        <Route path="/app2/dashboard2" element={<Dashboard2 />} />
      </Routes>
    </>
  );
}

export default RouteComponents;
