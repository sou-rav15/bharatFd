const mongoose =require('mongoose');
require('dotenv').config();
const url= process.env.MONGODB_URL;
// console.log('url->',url)

const connectionDb= async ()=>{
    try {
        await mongoose.connect(`${url}`);
        console.log('connecting to mongodb');
                
    } catch (error) {
        console.log('Error->', error);
    }
}
module.exports= connectionDb;