const request = require('supertest');
const app = require('../app');


describe('Doctors endpoints', () => {
  it('get all doctors', async (done) => {
    const res = await request(app)
      .get('/getDoctors?postcode=G37DW')
    expect(res.text).toEqual(JSON.stringify([
      {"\id": 1,"name": "Spitalfields Medical Centre - Health E1","postcode": "E1 6PU","distance": 345},
      {"id": 2, "name": "Whitechapel Health Centre Branch","postcode": "E1 8AH","distance": 346   
      }
  ]));
    done();
  })
})
