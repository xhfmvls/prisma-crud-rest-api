import { getProduct, getProducts, postProduct } from "../controllers/productController.js";
import Router from "express"; 

const router = Router();

router.route('/').get(getProducts).post(postProduct); 

router.route('/:productId').get(getProduct); 

export default router; 