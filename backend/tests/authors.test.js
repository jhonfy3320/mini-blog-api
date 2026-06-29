const request = require('supertest');
const app = require('../src/app');

describe('Authors', () => {
  test('GET authors', async () => {
    const res = await request(app).get('/authors');
    
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });

  test('POST invalid author', async () => {
    const res = await request(app).post('/authors').send({
      name: '',
      email: ''
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });
});