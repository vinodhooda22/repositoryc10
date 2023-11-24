
const User = require('../models/user.js')
const path = require('path')


module.exports = async (req,res)=>{

    async function main() {
        try {
            await User.create(req.body)            
            res.redirect('/')
          }
          catch (error) {
            if(error){
                return res.redirect('/auth/register')
            }
            console.log(error);
          }
      
    }
    main().catch(console.error)
}




