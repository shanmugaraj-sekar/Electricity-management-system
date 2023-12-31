const endpoint = "http://localhost:3006/ebData";

const addReading = (requestBody) =>
  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

export const readingAPI = { addReading };
