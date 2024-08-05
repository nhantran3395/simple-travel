import fetch from "node-fetch";

const WEBSERVICE_URL =
  "https://sz5y4rtbza.execute-api.ap-southeast-2.amazonaws.com/Prod";

async function handler(event) {
  const payload = event.body;
  const url = new URL(WEBSERVICE_URL + "/museum");
  return fetch(url, {
    method: "POST",
    body: payload,
  });
}

export { handler };
