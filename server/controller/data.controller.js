 const Data = require('../model/products')
 const Create = async(req,res)=>{
     const data = new Data(req.body)
     const result = await data.save()
     res.send(result)
     console.log(result)
 }
 const getFiles = async(req,res)=>{
    const data = await Data.find({})
    res.send(data)
    console.log(data)
 }

 module.exports = {
    Create,getFiles
 }