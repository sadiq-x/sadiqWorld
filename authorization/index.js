import jwt from 'jsonwebtoken';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();
const privateKey = fs.readFileSync('./private.key', 'utf-8') || null;
const publicKey = fs.readFileSync('./public.key', 'utf-8') || null;
let payload = {};

export function generateToken(req,res){
    if (req.body.name){
        payload.id = req.body.name
        const token = jwtSign()
        if (token){
            res.header('Authorization','ok')
            res.sendStatus(200)
            console.log({'jwtToken':token})
        }
    }else {
        res.sendStatus(400)
    }
}
function jwtSign(){
    return jwt.sign(payload,privateKey,{ algorithm: 'RS256' })
}

export function verifytoken(req,res){
    if (req.body.token){
        const token = req.body.token
        const decoded = jwtVerify(token)
        if (decoded){
            res.send('200')
        }else{
            res.send('400')
        }
    }
}
function jwtVerify(token){
    return jwt.verify(token,publicKey, (err,decoded)=>{
         if(err){
            return false
         }else{
            return decoded
         }
    })
}

