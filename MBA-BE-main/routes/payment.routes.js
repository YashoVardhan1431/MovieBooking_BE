const paymentController=require('../controllers/payment.controller');
const {verifyToken}=require('../middlewares/authjwt');
const {validatePaymentRequestBody}=require("../middlewares/verifyPaymentReqBody")
module.exports= function(app)
{
    app.get('/mba/api/payments',[verifyToken],paymentController.getAllPayments);
    app.get('/mba/api/payments/:id',[verifyToken],paymentController.getPaymentById);
    app.post('/mba/api/payments',[verifyToken,validatePaymentRequestBody],paymentController.createPayment);
}