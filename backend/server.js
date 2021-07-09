const express = require("express")
const cors = require("cors") 
const passportLocal = require("passport-local").Strategy
const passport = require("passport")
const cookieParser = require("cookie-parser")
const bcrypt = require("bcryptjs")
const session = require("express-session")
const bodyParser = require("body-parser")

const app = express();

//middleware ?
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(session({
    secret: "secretcode",
    resave:true,
    saveUninitialized:true
}));

app.use(cookieParser("secretcode"))

app.post("/login",(req,res) => {
    console.log(req.body);
})

app.post("/register",(req,res) => {
    console.log(req.body);
})

app.get("/user",(req,res) => {});

app.listen(2000,() => {
    console.log('sörber start')
})