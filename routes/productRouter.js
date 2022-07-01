import { getProducts } from "../controllers/productController.js";
import Router from "express"; 

const router = Router();

router.route('/').get(getProducts); 



export default router; 