const adminMiddleware= (req, res, next)=>{
    try{
        if(req.user.role !== "admin"){
            return res.status(403).json({
                message: "Access Denied Admin only"
            })
        }
        next();
    } catch(error){
        res.status(500).json({
            error:error.message
        })
    }
};
module.exports = adminMiddleware;