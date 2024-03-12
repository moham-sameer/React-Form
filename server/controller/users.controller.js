const Users = require('../model/users')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const errorHandler = require('../utils/error');
const Signup = async(req,res)=>{
    try {
        const {username, password} = req.body;
        const hashedPassword = bcryptjs.hashSync(password,10)
        const newUser = new Users({username,password:hashedPassword})
        const result = await newUser.save()
        res.send(result)
        console.log(result)
    } catch (error) {
        console.error(error)
    }
}
const Login = async(req,res,next)=>{
    const {username,password} = req.body
    try {
        const validUser = await Users.findOne({username})
        if(!validUser) return next(errorHandler(404,"User not Found!!"))
        const validPassword = bcryptjs.compareSync(password,validUser.password)
       if(!validPassword) return next(errorHandler(401, "Wrong credentials"))
     const token = jwt.sign({id:validUser._id}, process.env.JWT_SECRET)
    const {password:clearingPasswordforSecurityPurposes,...rest} = validUser._doc;
      res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest)

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    Login,Signup
}
