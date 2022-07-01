import { getProducts, postProduct } from "../controllers/productController.js";
import Router from "express"; 

const router = Router();

router.route('/').get(getProducts).post(postProduct); 



export default router; 