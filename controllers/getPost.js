
const BlogPost = require('../models/BlogPost')

module.exports = async (req,res)=>{
    const singlebp = await BlogPost.findById(req.params.id)
    console.log(singlebp)
    res.render('post', {singlebp});
}
