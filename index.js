const express =require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const userRouter = require("./routes/userRouter");
require('dotenv').config();

//setup express

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log("Server started on "+PORT)
});

//setup mongoose

//mongodb+srv://Shubham:<password>@cluster0.unchk.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true},
    (err)=>{
        if(err) throw err;
        console.log("MongoDB connected");
    }
);

//set up routes as middlewares
app.use('/users',userRouter);

