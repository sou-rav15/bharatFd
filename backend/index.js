const express= require('express');
const dotenv= require('dotenv')
const app= express();
const cors = require('cors');
const redis = require('redis');
const connectionDb = require('./database/DB');
const faqRoutes= require('./routes/faqRoutes');
dotenv.config();
app.use(cors());
app.use(express.json());
// app.use('/api/faqs', faqRoutes);
const port =process.env.PORT||3000;
connectionDb();
// const redisClient = redis.createClient();
const {Redis} = require('ioredis');
const redisClient = new Redis();
// const redisClient = redis.createClient({
//     socket: {
//       host: '127.0.0.1',
//       port: 6379
//     }
//   });
// console.log(redisClient);

// redisClient.connect()
// .then(()=>console.log('connected to redis'))
// .catch((err)=>console.error('Redis connection', err))
// ;
app.get('/api/faqs', async (req, res) => {
    const lang = req.query.lang || 'en';
    console.log('lang->', lang);
    

    try {
        const cachedData = await redisClient.get(`faqs_${lang}`);

        if (cachedData) {
            return res.json(JSON.parse(cachedData)); // Return cached data if available
        }

        // Simulate DB fetch if data not in cache
        const faqs = [{ question: "What is  nodejs?", answer: "A caching tool!" }];

        // Cache the new data
        await redisClient.set(`faqs_${lang}`, JSON.stringify(faqs));

        res.json(faqs);
    } catch (err) {
        console.error('Redis get error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
});
// const redisClient = require('./client');

module.exports = redisClient;