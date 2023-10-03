import express from "express";
import { registerControllers,loginControllers,ftControllers,updateController,getOrderController,getallOrderController,orderStatus} from "../controllers/authControllers.js";
import { requireSignIn ,isAdmin } from "../middlewares/authmiddleware.js";

const router = express.Router();
//Register||POST method
router.post("/register", registerControllers);
//Login||Post Method
router.post("/login",loginControllers)
//Forget Password||Post
router.post('/ftpassword',ftControllers)
//protected routh auth
router.get("/userauth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})
router.get("/adminauth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
  });

  router.put("/update",requireSignIn,updateController)

  //orders
router.get('/orders',requireSignIn,getOrderController)

//all orders
router.get('/all-orders',requireSignIn,isAdmin,getallOrderController)

//order status
router.put('/order-status/:orderId',requireSignIn,isAdmin,orderStatus)

export default router;
