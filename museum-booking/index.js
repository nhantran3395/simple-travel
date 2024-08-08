import fetch from "node-fetch";

const WEBSERVICE_URL =
  "https://sz5y4rtbza.execute-api.ap-southeast-2.amazonaws.com/Prod";

async function handler(event) {
  console.log("triggered with payload", event);

  const url = new URL(WEBSERVICE_URL + "/museum");
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(event),
  });
  const json = await response.json();

  console.log("received response", json);
  return json;
}

export { handler };
