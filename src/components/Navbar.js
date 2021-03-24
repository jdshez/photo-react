import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import M from 'materialize-css'; 

class Navbar extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
          })
    }

    render() {
        return (
            
            <nav className="nav-wrapper transparent z-depth-0">
                <div className="container">
                    <a className="brand-logo black-text">Jack Han Photography</a>
                    <a class='dropdown-trigger btn-flat white' href='#' data-target='dropdown1'>
                        <i className="material-icons black-text">menu</i>
                    </a>
                    <ul className="black-text right hide-on-med-and-down ">
                        <li className="black-text"><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>     
                     
                     <ul id='dropdown1' class='dropdown-content'>
                         <li><Link to="/">Home</Link></li>
                         <li><Link to="/about">About</Link></li>
                         <li class="divider" tabindex="-1"></li>
                         <li><Link to="/gallery">Gallery</Link></li>
                         <li><Link to="/services"><i class="material-icons">view_module</i>Services</Link></li>
                         <li><Link to="/contact"><i class="material-icons">cloud</i>Contact</Link></li>
                     </ul>
                </div>
            </nav>
     
         )
    }
    
}

export default Navbar