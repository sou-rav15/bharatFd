const FAQ = require('../modals/FAQ.js');
// const translate = require('@vitalets/google-translate-api');
const translate = require('google-translate-api-x');

const redisClient = require('../index.js');

// Create FAQ with translation
exports.createFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;
    console.log(question);

    // Translate question
    const hiTranslation = await translate(question, { to: 'hi' });
    const bnTranslation = await translate(question, { to: 'bn' });
    console.log('hitranslation->',hiTranslation);
    
    const faq = new FAQ({
      question,
      answer,
      translations: {
        hi: hiTranslation.text,
        bn: bnTranslation.text
      }
    });

    await faq.save();
    res.status(201).json(faq);
  } catch (error) {
    res.status(500).json({ message: 'Error creating FAQ', error });
  }
};

// Get FAQs with caching
// exports.getFAQs = async (req, res) => {
//   const lang = req.query.lang || 'en';
//   console.log('lang->',lang);
//   console.log('redis->', redisClient);
  
//   try {
//     const cachedData = await redisClient.get("user:3");
    
//   } catch (err) {
//     console.error('Redis get error:', err);
//   }

 
// };
