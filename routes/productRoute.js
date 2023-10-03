import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authmiddleware.js";
import {
  createProduct,
  getProduct,
  singleProduct,
  productPhoto,
  deleteProduct,
  updateProduct,
  filterProduct,
  productCount,
  productList,
  searchProduct,
  relatedProduct,
  productCategory,
  brainTokenController,
  brainTreePayment,
  
  
} from "../controllers/productController.js";
import formidable from "express-formidable";
const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProduct
);
//get all products
router.get("/get-product", getProduct);
//get single products
router.get("/single-product/:slug", singleProduct);
//get photo
router.get("/product-photo/:pid", productPhoto);
//delete product
router.delete("/delete-product/:pid", deleteProduct);
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProduct
);

//product filters
router.post("/filter-product",filterProduct,)

//product count
router.get('/product-count',productCount)

//product per page
router.get('/product-list/:page',productList)

//search product
router.get("/search-product/:keyword",searchProduct)

//similar product
router.get("/related-product/:pid/:cid",relatedProduct)
//category wise product
router.get("/product-category/:slug",productCategory)

//payment routes
//token
router.get('/braintree/token',brainTokenController)

//payments
router.post('/braintree/payment',requireSignIn,brainTreePayment)
//orders
export default router;
