import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB",{})
.then(result => console.log("DB connected"))
.catch(err => console.log(err))


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login",async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
  
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successful", user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
  
  app.post("/register", async(req, res) => {
    const { name, email, password } = req.body;
  
    const user = new User({
      name,
      email,
      password
    });
  
    await user.save();
    res.send({ message: "Successfully Registered, Please login now." });
  });


app.listen(9002,() => {
    console.log("BE started at port 9002")
})