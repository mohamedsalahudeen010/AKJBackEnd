import mongoose from "mongoose";

const productScheme= mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    prize:{
        type:Number, 
    },
    varient:{
        type:String,
    },
    image:{
        type:String,
        required:true,
        trim:true
    },
    type:{
        type:String,
        required:true,
        maxlength:32,
        trim:true
    },
    brand:{
        type:String,
        maxlength:32,
        trim:true
    },
    productGroup:{
        type:String,
        maxlength:32,
        trim:true
    },
    productSubGroup:{
        type:String,
        maxlength:32,
        trim:true
    },
    stock:{
        type:Number,
        required:true
    },
    features:{
        type:String,
        trim:true
    },
    description:{
        type:String
    }

})

const Products=mongoose.model("products",productScheme)

export default Products
