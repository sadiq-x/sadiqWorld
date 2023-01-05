import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()
const secretKey = process.env.SECRETEKEY_TOKEN || null

export function generateToken(req,res){
    console.log(req.body)
    let payloadjwt = {idreq:req.body.name}
    let token = jwt.sign(payloadjwt,secretKey,{algorithm:'HS256'})
    console.log(token,payloadjwt,secretKey)
    res.send(token)
}