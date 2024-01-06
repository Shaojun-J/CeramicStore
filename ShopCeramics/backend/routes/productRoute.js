const express = require('express');
const router = express.Router();

const {getProducts,
     getProduct,
     createProduct, 
     deleteProduct, 
     updateProduct,
     getProductByType
    }     = require('../controllers/productController');

router.get('/', getProducts);
// router.get(':id', getProduct);
router.get('/byId', getProduct);
router.get('/byType', getProductByType);
router.post('/', createProduct);
router.delete('/:id',deleteProduct);
router.patch('/:id', updateProduct);

module.exports = router;