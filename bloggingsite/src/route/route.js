const express=require("express");
const router=express.Router();
const authorController=require("../controllers/authourController");
const blogController=require('../controllers/bloggController')
const Middleware = require('../Middleware/middleware.js')

//Create Author
router.post("/authors", authorController.createAuthor)


//Author Login
router.post("/login", authorController.login)


//Create Blog
router.post("/blogs", Middleware.authentication, blogController.createBlog)


//Get Blogs (With Authentication)
router.get("/blogs", Middleware.authentication, blogController.getBlogs)


//Update Blogs (With Authentication and Authorization)
router.put("/blogs/:blogId/", Middleware.authentication, Middleware.authorisation, blogController.updateBlog)


//Delete Blogs By Path Parameters (With Authentication and Authorization)/
router.delete("/blogs/:blogId", Middleware.authentication, Middleware.authorisation, blogController.deletById)


//Delete Blogs By Query Parameters (With Authentication and Authorization)
router.delete("/blog",Middleware.authentication, blogController.deleteQuery)

//Default
router.all('/*',function(req,res){
    return res.status(400).send({status:false,msg:"Please give right path"})
})


module.exports=router
