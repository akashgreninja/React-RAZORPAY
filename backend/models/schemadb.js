
const mongoose = require('mongoose');
const {Schema}=mongoose;


const OrderSchema = new mongoose.Schema({
    isPaid:Boolean,
    amount:Number,
    razorpay:{
        orderId:String,
        paymentId:String,
        signature:String,
    },
  });

const Order= mongoose.model('Order', OrderSchema);

module.exports=Order