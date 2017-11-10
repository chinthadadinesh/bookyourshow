import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Theaters extends Component{
    constructor(props){
        super(props);
        
      
        this.state={
            theaters:this.props.theaters,
            isLoaded:false
        }
        
    }
    getMovies(){
		fetch('/api/theaters')
		.then((response)=>response.json())
		.then((Theatere)=>{
			this.setState({
				theaters:Theatere,
				isLoaded:true
			})
		})
	}

	/*componentDidMount(){
		this.getMovies();
	}*/
    render(){
    return(
        <div className="container content mt-5 mb-5">
                      <div className="row">
                         <div className="col-12 col-sm-6 moviesList">
                             <h3 className="text-center">Theaters</h3>
                            {
                                this.state.theaters.map((theater)=>{
                                   return <Theater theatername={theater.theatername} location={theater.location} booking={theater.booking}/>
                               })
                            }
                            </div>
                        </div>
                    </div>
    )
    }
}
class Theater extends Component{
    constructor(props){
        super(props);
    }
    render(){
    return(
        <div class="movieList p-2">
        <div class="row">
         <div class="col-3 text-center">
             <img src="http://az616578.vo.msecnd.net/files/2016/07/27/636052545090088283-1654507121_Theatre.jpg" height="80" width="100" alt=""/>
         </div>
         <div class="col-7 movieTitle">
            {this.props.theatername}
             <span class="d-block">
                 {this.props.location}
        <div className="showTimings">
               <button className="btn btn-primary">11:00</button>
               <button className="btn btn-primary">02:30</button>
               <button className="btn btn-danger">06:00</button>
               <button className="btn btn-primary">09:30</button>
             </div>
             </span>
         </div>
         <div class="col-2 text-center pt-4">
            Book
          </div>
        
        </div>
     </div>
    )
    }
}

export default Theaters