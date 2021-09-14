const API_URL = "https://randomuser.me/api/";

async function request(endpoint, method = "GET", data = null) {
  const config = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer"
    }
  };

  if (method === "POST" || method === "PATCH") {
    config.body = JSON.stringify(data);
  }
  const url = `${API_URL}${endpoint}`;

  return await fetch(url, config).then((request) => request.json());
}

function get(endpoint) {
  return request(endpoint);
}

function post(endpoint, data) {
  return request(endpoint, "POST", data);
}

function patch(endpoint, data) {
  return request(endpoint, "PATCH", data);
}

function _delete(endpoint) {
  return request(endpoint, "DELETE");
}

export default {
  get,
  post,
  patch,
  delete: _delete
};
