require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute');
const Review = require('./models/ReviewModel');
const cors= require('cors');
const checkoutRoutes = require('./routes/checkoutRoute');

const app = express();

//middleware
app.use(cors());

app.use(express.json()); //check req body, if there is body then attach to req object

app.use((req,res,next) =>{
    console.log(req.path, req.method);
    next();
});


//routes
app.use('/account',userRoutes);
app.use('/create-checkout-session', checkoutRoutes);

app.get('/', (req,res)=>{
   res.json({message: 'welcome to my shop'});
})
// get reviews data from db
app.get('/reviews', (req,res)=>{
    Review
    .find()
    .then((reviews)=>{
        res.json(reviews);
    })
    .catch((err)=> res.json(err))
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




