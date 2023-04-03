const express=require("express");
const router=express.Router();
const viewController=require('./../controllers/viewsController.js');

router.route('/').get(viewController.getHomePage);
router.route('/addProduct').get(viewController.getAddProduct);
module.exports=router;