import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
       <nav className="nav-wrapper red darken-3">
           <div className="container">
               <a className="brand-logo center">Project</a>
               <ul className="right">
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/about">About</Link></li>
                   <li><Link to="/contact">Contact</Link></li>
               </ul>
            
                <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>

                
                <ul id='dropdown1' class='dropdown-content'>
                    <li><a href="#!">one</a></li>
                    <li><a href="#!">two</a></li>
                    <li class="divider" tabindex="-1"></li>
                    <li><a href="#!">three</a></li>
                    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
                    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
                </ul>
           </div>
       </nav>

    )
}

export default Navbar