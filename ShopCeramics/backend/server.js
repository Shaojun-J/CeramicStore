
const reviewRoutes = require("./routes/reviewRoute");
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute');
const orderRoutes = require('./routes/orderRoute');
const productRoutes = require('./routes/productRoute');
const shoppingCartRoutes = require('./routes/shoppingCartRoute');
const cors = require('cors');
// const Review = require('./models/ReviewModel');
const CheckoutRoute = require('./routes/checkoutRoute');


const app = express();

//middleware
app.use(cors());
app.use(express.json()); //check req body, if there is body then attach to req object

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/api/account', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
app.use('/api/shoppingcart', shoppingCartRoutes);
app.use('/api/checkout', CheckoutRoute);
app.use("/api/reviews", reviewRoutes);

app.get('/api', (req, res) => {
    res.json({ message: 'welcome to my shop' });
})

// get reviews data from db
// app.get('/reviews', (req, res) => {
//     Review
//         .find()
//         .then((reviews) => {
//             res.json(reviews);
//         })
//         .catch((err) => res.json(err))
// })



//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`connecting to DB & listening on port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })




