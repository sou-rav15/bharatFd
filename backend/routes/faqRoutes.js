const express = require('express');
const router = express.Router();
const { createFAQ, getFAQs } = require('../controllers/faqController');
const redisClient = require('../index.js');

router.post('/', createFAQ);  // Add FAQ
// router.get('/', (req, res)=>{
//     async function init(params) {
//         console.log('pirnt me');
        
//         const result = await redisClient.get("user:1");
//         console.log("result->", result);
//     }
//     init();
    
// });     // Get FAQs with language support

module.exports = router;
