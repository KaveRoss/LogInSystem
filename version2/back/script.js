var express = require('express');
var mysql = require('mysql');
app = express();



var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'users'
});

connection.connect(function(error) {
  if(!!error) {
    console.log('Error');
  } else {
    console.log('Connected');
  }
});

  app.get('/users', function(req, res,) {
      connection.query("SELECT * FROM users", function(error, rows, fields) {
      if(!!error) {
        console.log('Error in the query');
      } else {
        console.log('successful query\n');
        console.log(rows);
        this.responseText;
      }
    });
  })

  // app.get('/users', function(req, resp,) {
  //     console.log(f);
  //     var name = localStorage.getItem(f);
  //     var sql = 'SELECT * FROM users WHERE name = ' + mysql.escape(name);
  //     connection.query(sql,function(error, rows, fields) {
  //     if(!!error) {
  //       console.log('Error in the query');
  //     } else {
  //       console.log('successful query\n');
  //       console.log(rows);
  //     }
  //   });
  // })



app.listen(1337);


