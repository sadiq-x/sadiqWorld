import express from 'express';
const app = express()
const PORT = process.env.PORTSRV || 4099;

app.use(express.json())
//app.use(express.urlencoded({extended: true})) //Not used 

function server(){
    app.listen(PORT, ()=>{
        console.log(`Server up ate port ${PORT}`)
    })
}

import {generateToken,verifytoken} from '../authorization/index.js';
app.post('/generatetoken',generateToken)
app.post('/verifytoken',verifytoken)

server()



