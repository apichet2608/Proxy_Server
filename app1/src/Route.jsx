import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Page/Dashboard/main/page";
import Dashboard2 from "./Page/Dashboard2/main/page";
function RouteComponents() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/app1" element={<Dashboard />} />
        <Route path="/app1/dashboard" element={<Dashboard />} />
        <Route path="/app1/dashboard2" element={<Dashboard2 />} />
      </Routes>
    </>
  );
}

export default RouteComponents;
