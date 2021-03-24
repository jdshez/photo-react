import React from 'react'
import Building from '../images/building.jpg'

const Contact = () => {
    return (
        
        <section className="foot-control section"> {/* Main wrapper only used to control sticky footer */}
            
            {/* Main content */}
            <section className="container content"> 
            <br></br>
                <div class="row">
                    <div class="col s12 m7">
                        <img className="responsive-img" src={Building} alt="Building"></img>
                    </div>
                    <div className="col m1"></div>
                    <div class="col s12 m4 grey-text text-darken-3 ">
                        <h4 className="intro">Get in touch</h4>
                        <br></br>
                        <div className="">
                            <div className="valign-wrapper ">
                                <i className="material-icons ">phone</i>
                                <span>+44 208 567 1234</span>
                            </div>
                                
                            <br/>
                            <div className="valign-wrapper ">
                                <i className="material-icons ">email</i>
                                <span>photos@yourmail.com</span>
                            </div>
                        </div>
                        
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s7 m10 l6">
                                    <input id="first_name" type="text" class="validate"/>
                                    <label for="first_name">First Name</label>
                                </div>
                                <div class="input-field col s7 m10 l6">
                                    <input id="last_name" type="text" class="validate"/>
                                    <label for="last_name">Last Name</label>
                                </div>   
                                <div class="input-field col s8 m12">
                                    <input id="email" type="email" class="validate"/>
                                    <label for="email">Email</label>
                                </div>
                                <div class="input-field col s12 ">
                                    <textarea id="message" className="materialize-textarea"></textarea>
                                    <label for="message">Message</label>
                                </div>
                                <div class="col s12 center">
                                    <button class="grey-darken-3 btn-flat" type="submit" name="action">
                                    Submit
                                    <i class="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>                                                                            
                        </form>                                                     
                    </div>                  
                        
                </div>
            </section>
            
            {/* Footer */}
            <footer class="page-footer black">
                <div class="container black">
                    <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">Footer Content</h5>
                        <p class="white-text">You can use rows and columns here to organize your footer content.</p>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">Links</h5>
                        <ul>
                        <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                    © 2020 Copyright Text
                    <a class="grey-text text-lighten-4 right" href="#"><i className="material-icons">arrow_upwards</i></a>
                    </div>
                </div>
            </footer>
            
        </section>
    )
}

export default Contact