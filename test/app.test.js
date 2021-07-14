const request = require('supertest');
const app = require('../src/app.js');

describe('Teste de Integracao', () => {
    test('Responder na Raiz', () => {
        debugger;
        return request(app)
            .get('/')
            .then(res => expect(res.status).toBe(200))
    });
});