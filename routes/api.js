import { Router } from "express"; 
import createError from "http-errors"; 

const router = Router(); 

router.route('/').get(async(req, res, next) => {
    return res.status(200).json({
        success: true, 
        data: 'This is a data'
    })
}); 

export default router; 