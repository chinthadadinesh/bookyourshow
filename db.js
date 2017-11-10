//Connect to mongodb
var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/bookyourshow")
mongoose.Promise = Promise;  

//Create schema
var movieSchema=mongoose.Schema({
	title: String,
	language: String,
	certificate: String,
	rating: Number,
    theaters:[String]
})

//Create model
exports.Movie=mongoose.model("Movie",movieSchema,"movies")

//Create schema
var theaterSchema=mongoose.Schema({
	theatername: String,
	location: String,
})

//Create model
exports.Theater=mongoose.model("Theater",theaterSchema,"theaters")
