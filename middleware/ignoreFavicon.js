export default async(req, res, next) => {
    if (req.originalUrl.includes('favicon.ico')) {
        res.status(204).end(); 
    }
    next();
}