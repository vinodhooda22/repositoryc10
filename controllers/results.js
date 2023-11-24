

const BlogPost = require('../models/BlogPost')
module.exports = async (req,res)=>{
    const searchedbp = await BlogPost.find( {title: req.body.searchTerm} )
    console.log(req.body.searchTerm )
    console.log(searchedbp)
    console.log(searchedbp[0].title)
    res.render('searchresults', {searchedbp});
    }



