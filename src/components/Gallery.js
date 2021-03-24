import React, { Component } from 'react'
import Building2 from '../images/building2.jpg'
import Building3 from '../images/building3.jpg'
import City2 from '../images/city2.jpg'
import City3 from '../images/city3.jpg'
import City4 from '../images/city4.jpg'
import Port1 from '../images/port1.jpg'
import Port2 from '../images/port2.jpg'
import Nat2 from '../images/nat2.jpg'
import Nat1 from '../images/nat1.jpg'
import M from 'materialize-css';

class Gallery extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.materialboxed');
            var instances = M.Materialbox.init(elems);
          });
    }
    render () {

        return (
            <div className="foot-control section"> {/* Main wrapper only used to control sticky footer */}
                
                {/* Main content */}
                <div className="container content"> 
                    <h4 className="center intro">Portrait</h4>
                    <div className="row">
                        <div className="col s12 m6 l6 materialboxed" href="#one!"><img className="responsive-img" src="http://lorempixel.com/400/600/people/1"></img></div>
                        <div className="col s12 m6 l6 valign-wrapper">
                            <div className="row port">
                            <div className="col s12 m6 l6 materialboxed" href="#two!"><img className="responsive-img" src="http://lorempixel.com/400/600/people/6"></img></div>
                            <div className="col s12 m6 l6 materialboxed" href="#three!"><img className="responsive-img" src="http://lorempixel.com/400/600/people/7"></img></div>
                            <div className="col s12 m6 l6 materialboxed" href="#four!"><img className="responsive-img" src="http://lorempixel.com/400/600/people/8"></img></div>
                            <div className="col s12 m6 l6 materialboxed" href="#five!"><img className="responsive-img" src="http://lorempixel.com/400/600/people/10"></img></div>
                            </div>
                        </div>  
                    </div>
                    <h4 className="center intro">City</h4>
                    <div className="row">
                        <div className="col s12 m6 l6 valign-wrapper">
                            <div className="row port">
                                <div className="col s12 m6 l6 materialboxed" href="#two!"><img className="responsive-img" src="http://lorempixel.com/400/600/city/6"></img></div>
                                <div className="col s12 m6 l6 materialboxed" href="#three!"><img className="responsive-img" src="http://lorempixel.com/400/600/city/7"></img></div>
                                <div className="col s12 m6 l6 materialboxed" href="#four!"><img className="responsive-img" src="http://lorempixel.com/400/600/city/8"></img></div>
                                <div className="col s12 m6 l6 materialboxed" href="#five!"><img className="responsive-img" src="http://lorempixel.com/400/600/city/10"></img></div>
                            </div>
                        </div>
                            <div className="col s12 m6 l6 materialboxed" href="#one!"><img className="responsive-img" src="http://lorempixel.com/400/600/city/1"></img></div>  
                    </div>
                    <h4 className="center intro">Fashion</h4>
                    <div className="row">
                        <div className="col s12 m6 l6 materialboxed" href="#one!"><img className="responsive-img" src="http://lorempixel.com/400/600/fashion/1"></img></div>
                        <div className="col s12 m6 l6 valign-wrapper">
                            <div className="row port">
                            <div className="col s12 m6 l6 materialboxed" href="#two!"><img className="responsive-img" src="http://lorempixel.com/400/600/fashion/6"></img></div>
                            <div className="col s12 m6 l6 materialboxed" href="#three!"><img className="responsive-img" src="http://lorempixel.com/400/600/fashion/7"></img></div>
                            <div className="col s12 m6 l6 materialboxed" href="#four!"><img className="responsive-img" src="http://lorempixel.com/400/600/fashion/8"></img></div>
                            <div className="col s12 m6 l6 materialboxed" href="#five!"><img className="responsive-img" src="http://lorempixel.com/400/600/fashion/10"></img></div>
                            </div>
                        </div>  
                    </div>
                </div>
                
                {/* Footer */}
                <footer className="page-footer grey darken-4">
                    <div className="container">
                        <div className="row">
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                        © 2014 Copyright Text
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                        </div>
                    </div>
                </footer>               
            </div>           
        )
    }
}
    

export default Gallery