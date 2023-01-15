import axios from "axios";
const data = {};

// ---------------------------------
//              FETCH
// ---------------------------------
fetch("url", {
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  cache: "cache", // *default, no-cache, reload, force-cache, only-if-cached
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: JSON.stringify(data), // body data type must match "Content-Type" header
});

// ---------------------------------
//              AXIOS
// ---------------------------------
axios({
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  url: "/user/12345",
  data,
});

const configAxios = {
  params: {
    limit: 100,
    offset: 0,
  },
  headers: { "Content-Type": "application/json" },
};

// GET
axios.get("url", configAxios);

// POST
axios.post("/user", data, configAxios);

// PUT
axios.put("/user", data, configAxios);

// PATCH
axios.patch("/user", data, configAxios);

// PUT
axios.delete("/user", configAxios);

// CANCELACIÓN opcional
const controller = new AbortController();

axios
  .get("/foo/bar", {
    signal: controller.signal,
  })
  .then(function (response) {
    //...
  });
// cancel the request
controller.abort();
