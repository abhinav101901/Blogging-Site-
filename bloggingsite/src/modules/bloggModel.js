const mongoose=require("mongoose");
const objectId= mongoose.Schema.Types.ObjectId
const bloggSchema=new mongoose.Schema({
    title : {
        type:String,
        trim:true,
        required:true
    },
    body:{
        type:String,
        trim:true,
        required:true
    },
    authorId:{
        type:objectId,
        ref:"firstAuthor"
    },
    tags:[String],
    category:{
        type:String,
        trim:true,
        required:true
    },
    subcategory:[String],
    deletedAt:{
        type:Date
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    publishedAt:{
        type:Date
    },
    isPublished :{
        type:Boolean,
        default:false
    },
},{timestamps:true});

module.exports=mongoose.model("blogg",bloggSchema);


// title,category, body, authorId