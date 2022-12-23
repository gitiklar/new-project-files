const serverUrl = "http://localhost:3001/api";

const getToken = () => localStorage.getItem("accessToken") || "";

const doFetch = async (url, method, sendToken, body = null) => {
  const options = {
    method: method,
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  };
  body && (options.body = JSON.stringify(body));
  sendToken && (options.headers["Authorization"] = `Bearer ${getToken()}`);
  const response = await fetch(url, options);
  if (response.headers.get("Content-Type").startsWith("application/json")) {
    return await response.json();
  }
  return response;
};

export const postRequest = async (url, sendToken, data) => {
  return await doFetch(`${serverUrl}${url}`, "POST", sendToken, data);
};

export const getRequest = async (url, sendToken, data) => {
  return await doFetch(`${serverUrl}${url}`, "GET", sendToken, data);
};
