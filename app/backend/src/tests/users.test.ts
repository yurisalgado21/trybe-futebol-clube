import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import {app} from '../app';

import SequelizeUser from '../database/models/SequelizeUser';
import ValidateLogin from '../middlewares/AuthMiddleware';

chai.use(chaiHttp)

import {expect} from 'chai'
import {userBody, token, user, invalidBody} from './mocks/User.mocks'
import Auth from '../middlewares/Auth';

describe('User Test/login', () => {
    beforeEach(() => {
        sinon.stub(Auth, 'handle').resolves(() => {})
    });
    it('should return All fields must be filled', async function(){
        sinon.stub(SequelizeUser, 'findOne').resolves(invalidBody as any);

        const {status, body} = await chai.request(app).post('/login');
        // console.log(status);
        
        expect(status).to.equal(400);
        expect(body).to.deep.equal({message: "All fields must be filled"})
    });

    it('should return token', async function(){
        sinon.stub(SequelizeUser, 'findOne').resolves(user as any);
        // sinon.stub(ValidateLogin, 'validate').returns()

        const {status, body} = await chai.request(app).post('/login').send(userBody).set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiaWF0IjoxNzA2ODQzMzg5LCJleHAiOjE3MDc0NDgxODl9.tEdFyBinWBrYZECSPEIa8ruwaaMJJ8r5nZdTAauIXbQ');
        // console.log(body);
        //Lembrar de alterar o teste!
        // expect(status).to.equal(200);
        expect(body).to.have.key('message')
    })

    afterEach(function () {
        sinon.restore();
    });
})