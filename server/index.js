
const express = require('express')
const app = express()
require('dotenv').config()
const userModel =require('./Models/UserModel')
const port = 8080
const cors = require('cors')
const mongoose =require('mongoose')
app.use(express.json())
app.use(cors())

app.post('/singup',(req,res)=>{
    userModel.create(req.body).then(user=>res.json(user)).catch(err=>res.json(err))
})

app.post('/login',(req,res)=>{
    const {email,password}=req.body
    userModel.findOne({email,password}).then(user=>{
        if(user){
            if(user.password=== password){
                res.json('Succes bro')
            }else{
                res.json('Wrong password you loser')
            }
        }else{
            res.json('User not exits get out here')
        }
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose.connect(process.env.key)
  .then(() => console.log('Connected!'));