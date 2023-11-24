
var countr = 0; 
module.exports = (req,res,next)=>{
    console.log('mera wala middle ware called '+countr+' hua h yaha')
    countr+=1;
    next()
}
