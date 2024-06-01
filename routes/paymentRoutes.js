import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { buySubscription, cancelSubscription, getRazorPayKey, paymentVerification } from "../controllers/paymentController.js";



const router = express.Router();

//Buy Subs
router.route("/subscribe").get(isAuthenticated,buySubscription)

// verify payment and save reference in database
router.route("/paymentverification").post(isAuthenticated,paymentVerification)

// Get Razorpay Key
// router.route("/razorpaykey").get(getRazorPayKey);

//cancel subscription
router.route("/subscribe/cancel").delete(isAuthenticated,cancelSubscription)


export default router;
