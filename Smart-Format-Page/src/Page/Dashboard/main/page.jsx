import React, { useState, useEffect } from "react";
import TabComponents from "./Tab";
import Tab_1 from "./Tab/Tab_1/Tab_1";
import Tab_2 from "./Tab/Tab_2/Tab_2";

function page() {
  const labelProps = [
    {
      label: "TAB 1",
    },
    {
      label: "TAB 2",
    },
  ];
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="container">
        <TabComponents
          value={value}
          handleChange={handleChange}
          labeltab={labelProps}
        />
        {value === 0 && <Tab_1 />}
        {value === 1 && <Tab_2 />}
      </div>
    </>
  );
}

export default page;
