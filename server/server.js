// server/server.js
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App"
const path = require('path');
import fs from 'fs';
import PageNotFound from "../src/components/pages/PageNotFound/PageNotFound";


const app = express();
const router = express.Router()
app.use(express.static(path.join(__dirname,"..", 'build')));
app.use((req,res,next)=>{
  if(/\.js|\.css/.test(req.path)){
    res.redirect('/build'+req.path)
  }else{
    next();
  }
})

app.get('/*', (req, res) => {
  try {
    const test = ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>,
    );
  
    const indexFile = path.resolve(path.join(__dirname,"..", 'build',"index.html"));
  
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        const pageNotFoundHtml = ReactDOMServer.renderToString(<PageNotFound />);
        return res.status(404).send(pageNotFoundHtml);
      }
  
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${test}</div>`)
      );
    });
  } catch (error) {
    console.error('Error rendering React component:', error);
    return res.status(500).send('Oops, something went wrong!');
  }
});

app.use(express.json()); // Parse JSON bodies
router.use(express.static(path.resolve(__dirname,"..", 'build'),{maxAge:'10d'}));
// const initializeDatabase = require('./db');

// // Initialize and synchronize the database
// initializeDatabase()



app.listen(3002, () => {
  console.log("App is running on http://localhost:3002");
});