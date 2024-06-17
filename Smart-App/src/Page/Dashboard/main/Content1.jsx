import React from "react";
import AutoCompleteMUI from "../Components/AutoComplete/AutoCompleteMUI";
import TextFieldMUI from "../Components/TextFieldMUI/TextFieldMUI";
import DateMUI from "../Components/DateTimeMUI/DateMUI";
import TableDataMUI from "../Components/TableDataMUI/TableDataMUI";

function page() {
  const data = [
    {
      id: 1,
      name: "John Doe",
      age: 25,
      email: "",
    },
    {
      id: 2,
      name: "Jane Doe",
      age: 35,
      email: "",
    },
    {
      id: 3,
      name: "John Doe",
      age: 25,
      email: "",
    },
    {
      id: 4,
      name: "Jane Doe",
      age: 35,
      email: "",
    },
    {
      id: 5,
      name: "John Doe",
      age: 25,
      email: "",
    },
    {
      id: 6,
      name: "Jane Doe",
      age: 35,
      email: "",
    },
    {
      id: 7,
      name: "John Doe",
      age: 25,
      email: "",
    },
    {
      id: 8,
      name: "Jane Doe",
      age: 35,
      email: "",
    },
    {
      id: 9,
      name: "John Doe",
      age: 25,
      email: "",
    },
    {
      id: 10,
      name: "Jane Doe",
      age: 35,
      email: "",
    },
  ];

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 xl:col-span-6 bg-base-200 p-8 rounded-2xl h-min">
            <h2 className="text-lg font-semibold">Input Components</h2>
            <div className="text-base-content mt-4 grid grid-cols-1 gap-2">
              <AutoCompleteMUI />
              <TextFieldMUI />
              <DateMUI />
            </div>
          </div>
          <div className="col-span-12 xl:col-span-6 bg-base-200 p-8 rounded-2xl">
            <h2 className="text-lg font-semibold">Input Components</h2>
            <div className="text-base-content mt-4 grid grid-cols-1 gap-2">
              <TableDataMUI datas={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
