const request = require('supertest');
const app = require('../src/app');

describe('Posts', () => {
  test('GET posts', async () => {
    const res = await request(app).get('/posts');
    
    expect(res.statusCode).toBe(200);
  });

  test('POST invalid', async () => {
    const res = await request(app).post('/posts').send({});
    
    expect(res.statusCode).toBe(400);
  });
});