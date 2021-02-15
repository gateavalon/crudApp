const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const path = require('path');
const route = require('./server/routes/router');
const DBconnection = require('./server/database/connection')


dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;

//Parse request
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

//load routes
app.use('/', route);

//Connect to DB
DBconnection;

app.listen(3002, () => { console.log(`server started on ${3002}`) })