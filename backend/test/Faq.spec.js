// // const chai = require('chai');
// const redisClient = require('../index');

// describe('Redis cache', () => {
//     before(async () => {
//         if (redisClient.status !== 'ready' && redisClient.status !== 'connecting') {
//             await redisClient.connect();
//         }
//     });
    

//     after(async () => {
//         // Only quit if the client is open
//         if (redisClient.isOpen) {
//             await redisClient.quit();
//         }
//     });

//     it('should set and get value from redis', async () => {
//         await redisClient.set('testKey', 'testValue');
//         const value = await redisClient.get('testKey');
//         const { expect } = await import('chai');
//         expect(value).to.equal('testValue');
//     });

//     it('should return null for non-existing key', async () => {
//         const value = await redisClient.get('nonKey');
//         const { expect } = await import('chai');
//         expect(value).to.be.null;
//     });
// });



// const expect = chai.expect;
// import chaiHttp from 'chai-http'
const chaiHttp = require('chai-http');
const app = require('../path/to/your/app');  // Adjust the path to your Express app

// chai.use(chaiHttp);
// const expect = chai.expect;

describe('FAQ API', () => {
  it('should fetch FAQs from cache and respond with status 200', async (done) => {
    const {chai}= await import ("chai");
    chai.request(app)
      .get('/api/faqs?lang=en')
      .end(async(err, res) => {
        const { expect } = await import("chai");
        // const {chai, use}= await import("chai");
        chai.use(chaiHttp)
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should return 404 when language is not found', async(done) => {
    const {chai}= await import ("chai");
    chai.request(app)
      .get('/api/faqs?lang=xyz')
      .end( async(err, res) => {
        const { expect } = await import("chai");
        chai.use(chaiHttp)
        expect(res).to.have.status(404);
        expect(res.body).to.have.property('error');
        done();
      });
  });
});

// const {add, subtract}= require('../test');
// // const expect= require('chai').expect;
// describe('suite1',()=>{
//     it('add(2,3) should return s', async()=>{
//         const { expect } = await import("chai");
//         expect(add(2,3)).to.be.equal(5);
//     })
// })