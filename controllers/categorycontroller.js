import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";
export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "name is required" });
    }
    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: true,
        message: "category already exists",
      });
    }
    const category = await new categoryModel({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "new category created",
      category,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in category",
      error,
    });
  }
};
//update category
export const updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await categoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "category updated successfuly",
      category,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in update controller",
      error,
    });
  }
};

export const getCategory=async(req,res)=>{
    try{
        const category=await categoryModel.find({})
        res.status(200).send({
            success:true,
            message:"All categories list",
            category
        })
    }catch(error){
        res.status(500).send({
            success:false,
            error,
            message:"Error while getting all categories"
        })
    }

}
export const singleCategory=async(req,res)=>{
    try{
      
        const  category=await categoryModel.findOne({slug:req.params.slug})
        res.status(200).send({
            success:true,
            message:"Get Single categories",
            category
        })
    }catch(error){
        res.status(500).send({
            success:false,
            error,
            message:"Error while single categoires"
        })
    }
}
export const deleteCategory=async(req,res)=>{
    try{
          const {id}=req.params
          const category=await categoryModel.findOneAndDelete(id)
          res.status(200).send({
            success:true,
            message:"delete category",
            category
          })

    }catch(error){
        res.status(500).send({
            success:false,
            error,
            message:" delete issue"
        })
    }
}
