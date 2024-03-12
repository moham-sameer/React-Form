 const Data = require('../model/products')
 const Create = async(req,res)=>{
     const data = new Data(req.body)
     const result = await data.save()
     res.send(result)
     console.log(result)
 }
 const getPatients = async(req,res)=>{
    const data = await Data.find({role:"Patient"})
    res.send(data)
    console.log(data)
 }
 const getDoctors = async(req,res)=>{
    const data = await Data.find({role:"Doctor"})
    res.send(data)
    console.log(data)
 }

 module.exports = {
    Create,getPatients,getDoctors
 }