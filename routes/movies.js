var express=require("express")
var router = express.Router();
var db=require('../db');

router.route("/")
	.get((req,res,next)=>{
		db.Movie.find({})
		.then((movies)=>{
			res.send(movies);
		})
		.catch((err)=>{
			res.send("Error occured")
		})
	})
	.post((req,res,next)=>{
		var myMovie=new db.Movie(req.body)

		myMovie.save((err,movie)=>{
			if(err) res.send("Unable to insert Movie")
			res.send(movie);
		})
		
	})
router.route("/:id/theaters")
	.get((req,res,next)=>{
		db.Movie.findById(req.params.id)
		.then((movie)=>{
			console.log(movie);
			//var theaters=movie.theaters;
			console.log(movie.theaters)
			db.Theater.find({_id: { $in: movie.theaters }},(err,theaters)=>{
				if(err) res.send(err);
				res.send(theaters);
			})
		})
		.catch((err)=>{
			res.send("Error occured")
		})
	})

router.route("/:id/theaters")
	.post((req,res,next)=>{
		db.Movie.findByIdAndUpdate(req.params.id,{$push: {theaters: req.body.theaterId}})
		.then((movie)=>{
			res.send(movie);
		})
		.catch((err)=>{
			res.send("Error occured")
		})
	})
	

//Api for search Movie titles
router.get("/search/:search",(req,res,next)=>{
	
	db.Movie.find({title:{ '$regex' : req.params.search, '$options' : 'i' } })
	.then((movies)=>{
		res.send(movies);
	})
	.catch((err)=>{
		res.send("Unable to find record")
	})
})


router.route("/:id")
	.get((req,res,next)=>{
		var movieId=req.params.id;
		db.Movie.findOne({_id:movieId},(err,movie)=>{
			if(err) res.send("Unable to find Movie")
			res.send(movie);
		})
	})
	.put((req,res,next)=>{
		var movieId=req.params.id;
		db.Movie.findOneAndUpdate({author:movieId},{$set:req.body},{new: true},(err,movie)=>{
			if(err) res.send("Unable to update Movie")
			res.send(movie)
		});
	})
	.delete((req,res,next)=>{
		var movieId=req.params.id;

		db.Movie.findByIdAndRemove(movieId, (err,movie)=>{
			if(err) res.send("Unable to delete Movie")
			res.send(movie)
		});
	})

module.exports=router;