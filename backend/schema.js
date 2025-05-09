const mongoose=require("mongoose");
const user = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    mood:{
        type:String,
        required:true,
        trim:true
    },
    foods:{
        type:[String],
        required:true
    },
    votes:{
        type:String,
        required:true
    },
    comments:{
        type:[String],
        required:true
    }
    
})

const food=mongoose.model("rohitha",user);
module.exports=food;