var express=require("express");
var bodyParser=require("body-parser");
var routes=require('./routes');

var app= express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));

// app.use(express.static("public"));

app.all("/",(req,res,next)=>{
	console.log("Request came from " + req.connection.remoteAddress);
	console.log("test")
	next();
})

app.use("/api/movies",routes.movies);
app.use("/api/theaters",routes.theaters);

app.listen(3001,()=>{
	console.log("Server is started at port 3001");
})