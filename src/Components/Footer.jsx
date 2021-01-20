import React, { Component } from 'react';
import FB from '../Image/fb.png';
import Twitter from '../Image/twitter.png';
import Insta from '../Image/Insta.jpg'
import {AiFillTwitterCircle,AiFillFacebook,AiFillInstagram} from 'react-icons/ai'

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Footer" style={{marginTop:'5vh'}}>
                <div className='d-inline-flex justify-content-center '>
                    <div style={{marginLeft:'40vw',display:'flex'}}>
                    <div className='Social'><AiFillFacebook  /></div>
                <div className='SocialTwi'><AiFillTwitterCircle  /></div>
                <div className='SocialInsta'><AiFillInstagram  /></div>
                    </div>
              
                </div>

                <h6 className='text-center'>@2020 Copyright © Cric News</h6>
            </div>
         );
    }
}
 
export default Footer;