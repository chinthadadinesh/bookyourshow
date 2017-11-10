import React, {Component} from 'react'
import Theateres from './Theateres'


class Movie extends Component{
	constructor(props){
		super(props);
         this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
        
	}
    _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

	render(){
		return (
				 <div className="movieList p-2">
      <div className="row">
       <div className="col-2 text-center">
           <img src="images/moviesNow/1.jpg" height="80" alt=""/>
       </div>
       <div className="col-8 movieTitle">
           {this.props.title}
           <span className="d-block">
               {this.props.language} {this.props.certificate}
           </span>
       </div>
       <div className="col-2 text-center pt-3">
           {this.props.rating}
           <span className="d-block">
              <button onClick={this._onButtonClick}>Button</button>
        {this.state.showComponent ?
           <Theateres theaters={this.state.theaters}/> :
           null
        }
           </span>
       </div>
       </div>
   </div>
			)
	}
}

class Movies extends Component{
	constructor(props){
		super(props);

		this.state={
			movies:[],
			isLoaded: false,
			errored: false
		}

		this.getMovies=this.getMovies.bind(this);
	}

	getMovies(){
		fetch('/api/movies')
		.then((response)=>response.json())
		.then((movies)=>{
			this.setState({
				movies:movies,
                isLoaded: true
                
				
			})
		})
	}

	componentDidMount(){
		this.getMovies();
	}

	render(){
		if(this.state.isLoaded) {
			return(
				    <div className="container content mt-5 mb-5">
                      <div className="row">
                         <div className="col-12 col-sm-6 moviesList">
                             <h3 className="text-center">Movies</h3>
                             
                            {
                                this.state.movies.map((movie)=>{
                                   return <Movie title={movie.title} language={movie.language} certificate={movie.certificate} rating={movie.rating}/>
            })
                            }
                             

                          </div>
                        </div>
                    </div>
			)
		}
		else if(this.state.errored){
			return(<div>Failed to load movies</div>)
		}
		else{
			return(<div>Loading..</div>)
		}
	}

}

export default Movies;