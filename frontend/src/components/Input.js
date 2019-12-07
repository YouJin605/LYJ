import React from 'react';
import axios from 'axios'

async function makePostRequest() {

    let res = await axios.post('https://127.0.0.1/api/contact');

    console.log(`Status code: ${res.status}`);
    console.log(`Status text: ${res.statusText}`);
    console.log(`Request method: ${res.request.method}`);
    console.log(`Path: ${res.request.path}`);

    console.log(`Date: ${res.headers.date}`);
    console.log(`Data: ${res.data}`);
}

makePostRequest();