import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import team from '../Image/team.jpg';
import NavBar from './NavBar';
import Footer from './Footer';
import Styles from './about.module.css'
class  About extends Component {
    state = {  }
    render() { 
        return (
            <div> <div style={{backgroundColor:'gray',paddingBottom:'4vh'}}>
            <NavBar/>
            <div>
             <img className={Styles.image} src={team} >
            </img>
          
                <h5  style={{marginTop:'6vh',color:'white',textAlign:'center'}}>
                    Cricnews 
                </h5>
          
            <h3 style={{color:'white',textAlign:'center',overflow:'hidden'}}>Welcome to Cricnews , we bring you all the exciting, latest cricket news, updates and stats. Cricnews is your doorway to cricket world.So what are you waiting for , you are just one click away from connecting to the cricket world. Show us your support by liking our Instagram and Facebook page and follow us on Twitter. </h3>

            </div></div>
           
                <Footer/>
            </div>
            

        )}
}
 
export default About ;