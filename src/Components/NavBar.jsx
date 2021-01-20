import React from 'react';
import logo from '../Image/css2.jpeg';
import {useHistory} from 'react-router-dom'
import Styles from './about.module.css'
//import {NavBar} from 'react-bootstrap'
var date = new Date().getDate(); //To get the Current Date
var month = new Date().getMonth() + 1; //To get the Current Month
var year = new Date().getFullYear(); //To get the Current Year
var hours = new Date().getHours(); //To get the Current Hours
var min = new Date().getMinutes(); //To get the Current Minutes
var sec = new Date().getSeconds(); //To get the Current Seconds

export default function NavBar() {
   
        const history=useHistory()
        return ( 
         <div className='Navbar w-100'>
             <div className='d-inline-flex flex-row w-100 pl-5'>
                <h5 >{date}-</h5>
                <h5 >{month}-</h5>
                <h5 className='mr-3 tag tag-primary'>{year} </h5>
                <h5 >{hours}:</h5>
                <h5 >{min}:</h5>
                <h5 >{sec}</h5>
               

             </div>
             <div className=' container-fluid w-100'>
                <div className='p-3 d-sm-inline-flex'>
                    <img className='logo mr-3' src={logo} alt="logo"/>
                    <h2>CRIC NEWS!</h2>
                    <br/>
                    <h3>Get some Cricket News</h3>
                </div>
             </div>
             <div className='d-inline-flex flex-row w-100 pl-5'>
                <h5 className='ml-3' style={{cursor:'pointer'}}  onClick={()=>history.push('/')}>HOME</h5>
                <h5 className='ml-3'  style={{cursor:'pointer'}} >LIVE</h5>
                <h5 className='ml-3'  style={{cursor:'pointer'}}  onClick={()=>history.push('/blogs')}>NEWS</h5>
                
                <h5 className='ml-3'  style={{cursor:'pointer'}}  onClick={()=>history.push('/about')}>ABOUT</h5>
                <h5 className='ml-3'  style={{cursor:'pointer'}}  onClick={()=>history.push('/create')}>CREATE-NEWS</h5>

             </div>
         </div>

         );
    }
