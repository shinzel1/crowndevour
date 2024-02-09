// server/server.js
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App"
const path = require('path');
import fs from 'fs';

const app = express();
const router = express.Router()
// app.use(express.static(path.join(__dirname,"..", 'build')));
// app.get("/*", (req, res) => {
//   const entryPoint = [""];

//   const { pipe, abort: _abort } = ReactDOMServer.renderToPipeableStream(
//     <StaticRouter location={req.url}>
//       <App />
//     </StaticRouter>,
//     {
//       bootstrapScripts: entryPoint,
//       onShellReady() {
//         res.statusCode = 200;
//         res.setHeader("Content-type", "text/html");
//         pipe(res);
//       },
//       onShellError() {
//         res.statusCode = 500;
//         res.send("<!doctype html><p>Loading...</p>");
//       },
//     }
//   );
// });
app.use(express.static(path.join(__dirname,"..", 'build')));
app.use((req,res,next)=>{
  if(/\.js|\.css/.test(req.path)){
    res.redirect('/build'+req.path)
  }else{
    next();
  }
})

app.get('/*', (req, res) => {
  const test = ReactDOMServer.renderToString(
     <StaticRouter location={req.url}>
      <App />
    </StaticRouter>,
  );
  const indexFile = path.resolve(path.join(__dirname,"..", 'build',"index.html"));

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${test}</div>`)
    );
  });
});


router.use(express.static(path.resolve(__dirname,"..", 'build'),{maxAge:'10d'}));

app.listen(3002, () => {
  console.log("App is running on http://localhost:3002");
});