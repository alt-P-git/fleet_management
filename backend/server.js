const express = require("express");
const http = require("http");
const app = express();
const fetch = require('node-fetch');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get("/dashboard", (req, res) => {
    res.send("Hello World");
});

app.get('/bing-api', async (req, res) => {
    try {
      const bingResponse = await axios.get('https://www.bing.com/fd/ls/lsp.aspx', {
        params: req.query,
      });
      console.log(bingResponse)
      res.json(bingResponse.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
});

app.listen(5000, () => {
    console.log("Server running on port 4000");
});