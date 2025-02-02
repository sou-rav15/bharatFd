const mongoose =require('mongoose');
const FAQschema= new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    translations: {
      hi: String,
      bn: String
    }
},{timestamps:true});

const FAQ= mongoose.model('FAQ',FAQschema);

module.exports=FAQ;