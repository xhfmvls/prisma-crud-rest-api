import { deleteProduct, getProduct, getProducts, patchProduct, postProduct } from "../controllers/productController.js";
import Router from "express";

const router = Router();

router.route('/')
    .get(getProducts)
    .post(postProduct)
    .delete(deleteProduct)
    .patch(patchProduct);

router.route('/:productId').get(getProduct);

export default router; 