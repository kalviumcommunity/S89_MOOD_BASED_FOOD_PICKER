const mongoose=require("mongoose");
const user = mongoose.Schema({
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
        type:[String],
        required:true
    },
    comments:{
        type:String,
        required:true
    }
    
})

const food=mongoose.model("rohitha",user);
module.exports=food;