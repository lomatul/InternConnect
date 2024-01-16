import {afterAll, describe, expect, it} from "@jest/globals";
import * as app from ".././index.js"
import  request  from "supertest";

describe('Sanity test', () => {
    test('1 should equal 1', () => {
      expect(1).toBe(1)
    })
  })

  describe('Login', () => {
    test('should return hello world object', async () => {
      const requestBody = {
        student_id: '200042173',
        password: 'An@n1234'
      };
  
      const res = await request(app)
        .post('/InterConnect/student/postlogin')
        .send(requestBody);
  
      expect(res.statusCode).toEqual(200);
      // Add more assertions based on your response
      
    });
  });