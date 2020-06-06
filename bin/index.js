#!/usr/bin/env node
/**
* MIT License
*
* Copyright (c) 2019 adnan-iug
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

const express = require("express");
const app = express();

let port = process.env.PORT || 3000; // default port
let host = "127.0.0.1";
let hostPort = 443; // default hostPort = 443
let protocol = "https";

const args = process.argv; //  passed args to cli
const indexPort = args.indexOf("-p");
const indexHost = args.indexOf("-host");
const indexHostPort = args.indexOf("-port");
const indexProtocol = args.indexOf("-protocol");

if (indexPort !== -1) {
  port = args[indexPort + 1];
}

if (indexHost !== -1) {
  host = args[indexHost + 1];
}

if (indexHostPort !== -1) {
  hostPort = args[indexHostPort + 1];
}

if (indexProtocol !== -1) {
  protocol = args[indexProtocol + 1];
}

app.use((req, res) => {
res.redirect(`${protocol}://${host}:${port}${req.url}`);
});


function startServer() {
    console.log(`trying to running on port ${port}`);
   app.listen(port, () => { // http server
        console.log(`http server is running at port:${port}`);
    }).on("error", (err) => {
      console.error(err.message);
      process.exit(1);
    });
}


startServer();
