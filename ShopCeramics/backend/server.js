require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/decorProducts');


const app = express();

//middleware
app.use(express.json()); //check req body, if there is body then attach to req object

app.use((req,res,next) =>{
    console.log(req.path, req.method);
    next();
})


//routes
app.use('/decoproducts',productRoutes);

app.get('/', (req,res)=>{
   res.json({message: 'welcome to my shop'});
})


//   products routes:   /decoproducts/:id; /teaproducts/; /tableproducts/;
//   cart routes:       /cartitems/:id

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    app.listen(process.env.PORT, () =>{
        console.log(`listening on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
  console.log(err);
})




