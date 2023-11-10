require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const Ewaste = require('./models/ewaste');
const path = require('path')


// database connection
connection();

// middlewares
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*',function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


app.post("/ewaste", async(req, res) =>{
    try {
        const {name,phone,address,ewastedata,eimage}= req.body;
        const ewaste = new Ewaste({Name:name,Phone:phone,Address:address,Ewastedata:ewastedata,Image:eimage});
        const savedEwaste = await ewaste.save();
        res.json(savedEwaste);
        res.send({Status:"OK"});
    }catch(error){
        console.log(error)
        res.status(400).json({error: error.message});
    }
});

app.get('/products', (req, res) => {
    Ewaste.find()
    .then(product => res.json(product))
    .catch(err => res.json(err))
})

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
