
const BlogPost = require('../models/BlogPost')

module.exports = async (req,res)=>{
    const bps = await BlogPost.find({})
    res.render('index',{bps});
}
