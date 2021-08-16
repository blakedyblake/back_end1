const express = require("express");
const cors = require("cors"); //Necessary?

const app = express();



app.use(cors())
app.use(express.json())//abilitiy to read json files

let portNum = 5001

//app.get()

const myFriends = ["Sam", "Adam", "Matt", "Ty", "Zander"]

app.get("/api/users", (req,res) =>{
    
    res.status(200).send(myFriends);
})

app.get("/weather/:temperature", (req,res)=>{
    const phrase = `<h3>It was ${req.params.temperature} today </h3>`
    res.status(200).send(phrase)
})

app.listen((portNum), () => {
    console.log(`Running on port ${portNum}`)
})

