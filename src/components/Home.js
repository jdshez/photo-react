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
import Photog from '../images/photographer.jpg'
import M from 'materialize-css'; 

 class Home extends Component {
   

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, {
                numVisible: 4,
                indicators: true,
            });
        });
    }
  

    render () {

        return (
            <div className="section">
                <header></header>
                
                <div className="container section">
                    <div className="row">
                        <div className="photographer col s9 m3 offset-s3 offset-m1">
                            <img className="responsive-img circle" src={Photog}></img>
                        </div>
                        <div className="col s12 m7 offset-m1 center-align">
                            <h4 className="intro">Hi, I'm Jack Han</h4>
                            <p className="">An on location photographer based in London, U.K. Feel free to take a lot at my work and get in touch...</p>
                        </div>   
                    </div>
                </div>
                <div className="container row section">
                    <div class="carousel">
                        <a class="carousel-item" href="#one!"><img src="http://lorempixel.com/400/600/city/2"></img></a>
                        <a class="carousel-item" href="#two!"><img src="http://lorempixel.com/400/600/city/9"></img></a>
                        <a class="carousel-item" href="#three!"><img src="http://lorempixel.com/400/600/city/7"></img></a>
                        <a class="carousel-item" href="#four!"><img src="http://lorempixel.com/400/600/city/8"></img></a>
                        <a class="carousel-item" href="#five!"><img src="http://lorempixel.com/400/600/city/1"></img></a>    
                    </div>
                    <div className="col s12 m4 l">
                        <img className="responsive-img" src={Port1} alt=""></img>
                    </div>
                    <div className="col s12 m4 l">
                        <img className="responsive-img" src={Nat2} alt=""></img>
                    </div>
                    <div className="col s12 m4 l">
                        <img className="responsive-img" src={City3} alt=""></img>
                    </div>
                    <div className="col s12 m4 l">
                        <img className="responsive-img" src={City4} alt=""></img>
                    </div>
                    <div className="col s12 m4 l">
                        <img className="responsive-img" src={City2} alt=""></img>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default Home