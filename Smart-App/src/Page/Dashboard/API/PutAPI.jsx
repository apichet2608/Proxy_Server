import axios from "axios";
import { toast } from "react-toastify";

const PutAPI = async (body, url) => {
  let theme = localStorage.getItem("theme");
  let show_toast = toast.loading("⌛️ Please wait...", {
    position: "bottom-right",
    theme: theme !== "light" && theme !== "default" ? "dark" : "light",
    isLoading: true,
    autoClose: false,
  });

  let config = {
    method: "put",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
  };

  try {
    const response = await axios.request(config);
    console.log(response);
    if (response.data.status === "OK") {
      toast.update(show_toast, {
        render: (
          <p>
            <b>Status:</b> {response.data.status}
            <br />
            <b>Desc:</b> {response.data.message}
          </p>
        ),
        type: "success",
        isLoading: false,
        autoClose: 1000,
        position: "bottom-right",
        theme:
          localStorage.getItem("theme") !== "light" &&
          localStorage.getItem("theme") !== "default"
            ? "dark"
            : "light",
      });
      return {
        status: "OK",
        data: response.data.data,
        message: response.data.message,
      };
    } else {
      toast.update(show_toast, {
        render: (
          <p>
            <b>Status:</b> {response.data.status}
            <br />
            <b>Desc:</b> {response.data.message}
          </p>
        ),
        type: "warning",
        isLoading: false,
        autoClose: 1000,
        position: "bottom-right",
        theme: theme !== "light" && theme !== "default" ? "dark" : "light",
      });
      return {
        status: "ERROR",
        data: response.data,
        message: response.data.message,
      };
    }
  } catch (error) {
    let errorMessage = "Error";
    if (error.response && error.response.data) {
      errorMessage = error.response.data.message;
    } else if (error.message) {
      errorMessage = error.message;
    }

    if (error.message === "Network Error") {
      errorMessage = "Please Check Your Network connection⚠️";
    }
    toast.update(show_toast, {
      render: (
        <p>
          <b>Error:</b> {errorMessage}
          <br />
          <b>URL:</b> 🔗{url}
        </p>
      ),
      type: "error",
      isLoading: false,
      autoClose: 2500,
      position: "bottom-right",
      theme: theme !== "light" && theme !== "default" ? "dark" : "light",
    });

    return {
      status: "Catch",
      data: [],
      message: error,
    };
  }
};

export default PutAPI;
