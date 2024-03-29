const constants= require("../utils/constants");
var ObjectId= require('mongoose').Types.ObjectId;
const Booking= require('../models/booking.model');
const validatePaymentRequestBody= async(req,res,next)=>{
   if(!req.body.bookingId)
   {
    return res.status(400).send({
        message:"Failed! bookingId is not provided!"
    })
   }
   if(!ObjectId.isValid(req.body.bookingId))
   {
    return res.status(400).send({
        message:"Failed! bookingId is not in Valid Format!"
    })
   }
   const booking= await Booking.findOne({_id:req.body.bookingId});
   if(booking == null)
   {
    return res.status(400).send({
        message:"Failed! Booking Id passed doesn't exist!"
    })
   }
   if(req.body.amount<booking.totalCost)
   {
    return res.status(400).send({
        message:"Can't do payment as the payment amount is less than the booking amount"
    })
   }
   next();
}
const verifyPaymentReqBody={
    validatePaymentRequestBody
}
module.exports=verifyPaymentReqBody;