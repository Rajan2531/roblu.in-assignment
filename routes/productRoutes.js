const express=require('express');
const router=express.Router();
const productController=require('./../controllers/productController.js')


router.route('/').get(productController.getAllProducts).post(productController.createProduct)
router.route('/featured').get(productController.getFeaturedProducts);
router.route('/:id').patch(productController.updateProduct).delete(productController.deleteAProduct);


module.exports=router;