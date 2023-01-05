import express from 'express';
const app = express()
const PORT = process.env.PORTSRV || 4099;

app.use(express.json())

function server(){
    app.listen(PORT, ()=>{
        console.log(`Server up ate port ${PORT}`)
    })
}

import {generateToken} from '../authorization/index.js'
//generateToken()

app.post('/generatetoken',generateToken,()=>{})

server()



