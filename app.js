var express = require("express");
var mysql = require("mysql");
var bodyParser = require('body-parser');
app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(bodyParser.raw());

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users",
});

connection.connect(function (error) {
  if (!!error) {
    console.log("Error");
  } else {
    console.log("Connected");
  }
});

app.get("/all", (Request, response) =>{
  connection.query('SELECT * FROM users', (error, result, fields) =>{
    if(!!error){
      response.send('error');
    } else{
      if(result.length > 0){
        response.send(result);
      } else{
        response.send('not in db');
      }
    }
  });
});

app.post("/login", (request, response) => {
  console.log(request.body);
  let name = request.body.name;
  let password = request.body.password;
  connection.query(`SELECT * FROM users WHERE name = '${name}' AND password = '${password}'`, (error, result, fields) => {
    if (!!error) {
      console.log("Error in the query"+ error);
    } else {
      console.log("successful query\n");
      console.log(result);
    }
    if(result.length > 0){
      console.log("in db");
      response.send(result);
    }else{
      response.send("error");
    }
  });
});

app.post("/register", (request, response) =>{
  let name = request.body.name;
  let password = request.body.password;
  connection.query(`INSERT INTO users (name, password) VALUES ('${name}', ${password})`, (error, result, fields) =>{
    if(!!error){
      console.log(error);
    } else {
      console.log("successful query\n");
      console.log(result);
      response.sendStatus(200);
    }
  });
});

app.listen(1337);
