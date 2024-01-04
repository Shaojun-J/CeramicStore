const express = require('express');
const router = express.Router();
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const storeItems = new Map([
    [1, {priceInCents: 10000, name: 'Learn React Today'}],
    [2, {priceInCents: 20000, name: 'Learn CSS Today'}],
]);


router.post('/', async (req, res) => {
    console.log("==> checkoutRoute.js: router.post('/");
    console.log("STRIPE_SECRET_KEY:",process.env.STRIPE_SECRET_KEY);
    console.log("req.body:",req.body);
    try{
        const session = await stripe.checkout.sessions.create({
            //  success_url: 'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
            //  cancel_url: 'http://localhost:3000/cancel',
            success_url: `${process.env.CLIENT_URL}/success.html`,
            cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.items.map(item => {
                const storeItem = storeItems.get(item.id);
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: storeItem.name
                        },
                        unit_amount: storeItem.priceInCents
                    },
                    quantity: item.quantity
                }
            })
        });
        console.log(session);
        res.json({url: session.url});
    } catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
    // res.json({url: "session.url"});
});

module.exports = router;