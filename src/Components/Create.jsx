import React, { Component } from 'react';
import  { useState } from 'react';
import {Carousel} from 'react-bootstrap';
import axios from 'axios';

import NavBar from './NavBar';
import Footer from './Footer';
import Styles from './about.module.css'
function  Create()  {
const [input,setInput]=useState({
title:'',
snippet:'',
content:''
})
  
  function handleChange(event) {
    const {name,value}=event.target;
    setInput(prevInput=>{
      return{
        ...prevInput,
        [name]:value
      }
    })
  }   
  
  function handleClick(event) {
    event.preventDefault();
    const newBlog={
      title:input.title,
      snippet:input.snippet,
      content:input.content
    }
    axios.post('http://localhost:3000/create',newBlog)
  }   
    
        return <div>
            <NavBar/>
       <body>     
         
    
      <form>
        <div className='form-group'>
      <label for="title">Blog title:</label>
      <input onChange={handleChange} className='form-control' name='title' value={input.title} autoComplete='off'></input>
      </div>
      <div className='form-group'>
      <label for="snippet">Blog snippet:</label>
      <input onChange={handleChange} className='form-control' name='snippet' value={input.snippet} autoComplete='off'></input>
      </div>
      <div className='form-group'>
      <label for="body">Blog body:</label>
      <textarea onChange={handleChange} className='form-control'name='content' value={input.content}  autoComplete='off'></textarea>
      </div>
      
      <button onClick={handleClick}>Submit</button>
      </form>
   
  
  </body>
           
                <Footer/>
            </div>
            

        
}
 



export default Create ;
