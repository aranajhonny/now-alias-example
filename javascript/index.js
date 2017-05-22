var express = require("express");
var app = express();
app.get("/", function(req, res) {
  res.send(
    `
  	<a href="/javascript">Javascript</a>
  	<a href="/python">Python</a>
  	<a href="/ruby">Ruby</a>
  	`
  );
});
app.get("/javascript", function(req, res) {
  res.send("Hello from node.js");
});
var server = app.listen(80, function() {
  console.log("running on port 80");
});
