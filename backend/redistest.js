// const redis = require('redis');

// (async () => {
//     const client = redis.createClient();

//     client.on('error', (err) => console.log('Redis Client Error', err));

//     try {
//         await client.connect();
//         console.log('Connected to Redis');
//         await client.set('testKey', 'testValue');
//         const value = await client.get('testKey');
//         console.log('Retrieved:', value);
//         await client.quit();
//     } catch (err) {
//         console.error('Error connecting to Redis:', err);
//     }
// })();
