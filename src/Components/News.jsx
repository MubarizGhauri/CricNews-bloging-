import React, { Component } from 'react';
import  { useEffect ,  useState  } from 'react';
   import NavBar from './NavBar';
   import Footer from './Footer';
   import Styles from './about.module.css'
   function News() {
    const [notes,setNotes] =useState( [{
        title:'',
        snippet:'',
        content:''
    }])
    
    useEffect(()=>{
         fetch("/blogs").then(res =>{
             if(res.ok){
                  return res.json()
             }
         }).then(jsonRes=>setNotes(jsonRes));
    })

    return (
        <div>
         <NavBar/>
    <body>     
    <h1>All Blogs</h1>
    {notes.map(note=>
       <div>
       <h2>{note.title}</h2>
        <h2>{note.snippet}</h2>
        <p>{note.content}</p>
    </div>
        )}
   </body>
        
             <Footer/>
         </div>
         

     )}
     
    
   export default News ;