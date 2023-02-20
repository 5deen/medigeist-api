let Client = require('node-rest-client').Client;

let client = new Client();

// set content-type header and data as json in args parameter
let args = {
    data: { test: "hello" },
    headers: { "Content-Type": "application/json" }
};

const endpoint = "http://localhost:3000/items";

client.post(endpoint, args, function (data, response) {
    // parsed response body as js object
    console.log(data);
    // raw response
    // console.log(response);
});