import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authmiddleware.js";
import { createCategory,updateCategory,getCategory,singleCategory,deleteCategory } from "../controllers/categorycontroller.js";
const router = express.Router();

//create -category
router.post('/create-category',requireSignIn,isAdmin,createCategory)
// update category
router.put('/update-category/:id',requireSignIn,isAdmin,updateCategory)
//get category
router.get('/get-category',getCategory)

//single category
router.get('/single-category/:slug',singleCategory)

//delete category
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategory)
export default router;
