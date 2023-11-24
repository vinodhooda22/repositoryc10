
const BlogPost = require('../models/BlogPost')
const path = require('path')

module.exports = async (req,res)=>{
    
    let image = req.files.image;
    image.mv(path.resolve(__dirname,'..','public/assets/img', image.name))

    async function main() {
        try {
            await BlogPost.create({
                ...req.body,
                image : '/assets/img/' + image.name
            })
            res.redirect('/')
          }
          catch (error) {
            console.log(error);
          }
      
    }
    main().catch(console.error)
}
