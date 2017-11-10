import React,{Component} from 'react'
class Header extends Component
{
constructor(props)
{
    super(props)
}
render()
{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src="images/OnlineTicketsLogo.png" height="60" alt=""/>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            <i className="fa fa-map-marker" aria-hidden="true"></i> Visakhapatnam
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav my-2 my-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                    Login
                    </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                    Sign Up
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    )
}
}
export default Header;