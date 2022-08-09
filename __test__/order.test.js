const supertest = require('supertest')
const app = require('../index')
require('dotenv').config()

jest.setTimeout(10000);

test("GET /api/order/getorders", async()=>{
    await supertest(app).get("/api/order/getOrders").set('Authorization', 'Bearer'+ ' ' + process.env.TEST_TOKEN).expect(200)
})