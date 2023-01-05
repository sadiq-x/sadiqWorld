# Authorization module
## Json Web Token Authorization System 

### Npm modules required:
    express,
    jsonwebtoken,
    nodemon,
    dotenv

### Variable Environment
    PORTSRV,
    SECRETEKEY_TOKEN

## Keys
>   algorithm: 'RS256'

    public.key,
    private.key

### Info Url 
>http://localhost:4099/generatetoken
* curl -X POST http://localhost:4099/generatetoken -H "Content-Type: application/json" -d '{"name": " "}'
* ~~curl -X POST http://localhost:4099/generatetoken -H "Content-Type: application/x-www-form-urlencoded" -d "name="~~
___
>http://localhost:4099/verifytoken
* curl -X POST http://localhost:4099/verifytoken -H "Content-Type: application/json" -d '{"token":""}'
* ~~curl -X POST http://localhost:4099/verifytoken -H "Content-Type: application/x-www-form-urlencoded" -d "token="~~
___
>http://localhost:4099/authorize
* 
* ~~~~
___
[SadiqOrganization]()






