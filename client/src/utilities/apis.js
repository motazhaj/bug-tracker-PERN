const baseUrl = "http://localhost:5000";

export const addNewBugApi = async (body) => {
  const result = await fetch(baseUrl + "/newbug", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  return await result.json();
};

export const fetchAllBugsApi = async () => {
  const result = await fetch(baseUrl + "/bugs");
  return await result.json();
};

export const fetchBugApi = async (id) => {
  const result = await fetch(baseUrl + "/bugs/" + id);
  return await result.json();
};

export const updateBugApi = async (id, body) => {
  const result = await fetch(baseUrl + "/bugs/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await result.json();
};

export const resolveBugApi = async (id, body) => {
  const result = await fetch(baseUrl + "/resolvebug/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await result.json();
};

export const deleteBugApi = async (id) => {
  return fetch(baseUrl + "/bugs/" + id, {
    method: "DELETE",
  });
};
