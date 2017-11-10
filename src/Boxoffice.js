import React,{Component} from 'react'
import Movies from './Movies'
import Theateres from './Theateres'
class Boxoffice extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            theaters:[]
        }
    }
    onMovieselected(movie)
    {
        fetch("/api/movies/"+movie._id+"/theaters")
      .then((response)=>response.json())
		.then((theaters)=>{
			this.setState({
				theaters:theaters
                
				
			})
		})
    }
    render()
    {
        return(
            <div class="container content mt-5 mb-5">
            <div className="row">
            
            <Movies onMovieselected={this.onMovieselected}/>
           
            
            <Theateres theaters={this.state.theaters}/>
            
            
            </div>
            </div>
        
        
        )
    }
            }
            
export default Boxoffice;