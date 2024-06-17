import React, { useState, useEffect } from "react";
import GetAPI from "../../../API/GetAPI";
import PostAPI from "../../../API/PostAPI";
import PutAPI from "../../../API/PutAPI";
import DeleteAPI from "../../../API/DeleteAPI";
function Tab_1() {
  useEffect(() => {
    GETAPI();
  }, []);

  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const GETAPI = async () => {
    let params = {};
    let url = "http://10.17.66.242:3000/smart_format_page/dashboard/getdata";
    let response = await GetAPI(params, url);

    console.log(response);
    if (response.status === "OK") {
      console.log("OK");
      setData(response.data);
    } else if (response.status === "ERROR") {
      console.log("ERROR");
      setData([]);
    } else {
      console.log("Catch");
      setData([]);
    }
  };

  const POSTAPI = async () => {
    let body = {
      name: name,
      email: email,
    };
    let url = "http://10.17.66.242:3000/smart_format_page/dashboard/create";
    let response = await PostAPI(body, url);
    if (response.status === "OK") {
      console.log("OK");
    } else if (response.status === "ERROR") {
      console.log("ERROR");
    } else {
      console.log("Catch");
    }
    GETAPI();
  };

  const PUTAPI = async (value) => {
    let id = value;
    let url = `http://10.17.66.242:3000/smart_format_page/dashboard/editdata/${id}`;
    let body = {
      name: name,
      email: email,
    };
    let response = await PutAPI(body, url);
    console.log(response);
    if (response.status === "OK") {
      console.log("OK");
    } else if (response.status === "ERROR") {
      console.log("ERROR");
    } else {
      console.log("Catch");
    }
    GETAPI();
  };

  const DELETEAPI = async (value) => {
    let id = value;
    let url = `http://10.17.66.242:3000/smart_format_page/dashboard/delete/${id}`;

    let body = {
      name: name,
      email: email,
    };
    let response = await DeleteAPI(body, url);
    console.log(response);
    if (response.status === "OK") {
      console.log("OK");
    } else if (response.status === "ERROR") {
      console.log("ERROR");
    } else {
      console.log("Catch");
    }
    GETAPI();
  };

  return (
    <div className="container">
      <h1 className=" text-start text-2xl font-bold">API</h1>
      <div className="flex  gap-2">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-info" onClick={GETAPI}>
          GET API
        </button>
        <button className="btn btn-info" onClick={POSTAPI}>
          POST API
        </button>
      </div>

      <div className="overflow-x-auto mt-2">
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <table className="table">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-base-300">Name</th>
              <th className="px-4 py-2 border border-base-300">Email</th>
              <th className="px-4 py-2 border border-base-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.email}</td>
                  <td className="border px-4 py-2">
                    <div className="flex gap-2 ">
                      <button
                        className="btn btn-info"
                        onClick={() => PUTAPI(item.id)}
                      >
                        PUT
                      </button>
                      <button
                        className="btn btn-info"
                        onClick={() => DELETEAPI(item.id)}
                      >
                        DELETE
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tab_1;
