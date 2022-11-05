const express = require("express");
const app = express();
const path = require("path");;
const cors=require("cors");
app.use(express.json());

const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "config.env") });
app.use(bodyParser.urlencoded({ extended: true }));
const mongoose = require("mongoose");

//const UserSchema= require("./model/Test");



mongoose  
  .connect("mongodb+srv://Vishnurr2k01:Vishnurr2k01@node-expressprojects.ggro5fn.mongodb.net/Scrappy?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  });

app.use(cors())

//send response api is working 
app.get("/", (req, res) => {
  res.send("API is working");
});
app.use("/auth", require("./routes/auth"));
app.use("/land", require("./routes/land/lease"));
app.use("/items",require("./routes/items"));
app.use("/complaints",require('./routes/municipality'));
// app.use("/getprice", require("./routes/getprice"));
// app.use("/auth", require("./routes/auth"));
// app.use("/test", require("./routes/testing/test"));
// app.use('/',(req,res)=>{
//   res.send("backend is up and running")
//   })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening at ${PORT}`));
