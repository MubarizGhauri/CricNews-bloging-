const express = require('express');
const router=express.Router();
const Blog = require('../models/blog');



router.route("/create").post((req,res)=>{
    const title=req.body.title;
const snippet=req.body.snippet;
const body= req.body.content;
const newBlog= new Blog({
    title,
    snippet,
    body
});
newBlog.save();
})


router.route("/blogs").get((req,res) =>{
    Blog.find()
    .then(_foundNotes=> res.json(_foundNotes))
})
module.exports=router;