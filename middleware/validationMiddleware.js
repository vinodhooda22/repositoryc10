

module.exports = (req,res,next)=>{
    if(req.files == null || req.body.title == null){
        console.log('checking validation here now')
        return res.redirect('/posts/new')
    }
    next()
}

