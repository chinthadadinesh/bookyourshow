var express=require("express")
var router = express.Router();
var db=require('../db');

router.route("/")
	.get((req,res,next)=>{
		db.Theater.find({})
		.then((theater)=>{
			res.send(theater);
		})
		.catch((err)=>{
			res.send("Error occured")
		})
	})
	.post((req,res,next)=>{
		var myMovie=new db.Theater(req.body)

		myMovie.save((err,movie)=>{
			if(err) res.send("Unable to insert Movie")
			res.send(movie);
		})
		
	})


module.exports=router;