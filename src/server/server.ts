import apiRouter from './routes';
import mongoose from 'mongoose';
// import bodyParser from'body-parser';
import express = require('express');


const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(apiRouter);

// mongoose.connect("mongodb://localhost:27017/purchaseDB",{useNewUrlParser:true});

// const itemSchema = new mongoose.Schema({
//     _id:Number,
//     name:String,
//     price:Number,
//     quentity:Number
// });

// const purchaseSchema =new mongoose.Schema({
//     items:[itemSchema]
// });
// const Purchase = mongoose.model("Purchase",purchaseSchema);

// app.get("/purchase",(req,res)=>{
//     Purchase.find({},(err,foundPurchases)=>{
//         if(!err){
//         console.log(foundPurchases)
//         } else{
//             console.log(err);
//         }
//     })
// })

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));