import * as sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from 'jsonwebtoken'
// @ts-ignore
import chaiHttp = require('chai-http');

import {app} from '../app';

import SequelizeUser from '../database/models/SequelizeUser';
import ValidateLogin from '../middlewares/AuthMiddleware';

chai.use(chaiHttp)

import {expect} from 'chai'
import {userBody, token, user, invalidBody} from './mocks/User.mocks'
import { lookupService } from 'dns';
// import Auth from '../middlewares/Auth';

describe('User Test/login', () => {
    beforeEach(() => {
        sinon.restore()
    });

    it('should return All fields must be filled', async function(){
        sinon.stub(SequelizeUser, 'findOne').resolves(invalidBody as any);

        const {status, body} = await chai.request(app).post('/login');
        // console.log(status);
        
        expect(status).to.equal(400);
        expect(body).to.deep.equal({message: "All fields must be filled"})
    });

    it('body invalid', async function(){
        sinon.stub(SequelizeUser, 'findOne').resolves(user as any);
        sinon.stub(jwt, 'sign').returns()
        sinon.stub(ValidateLogin, 'validate').returns()

        const {status, body} = await chai.request(app).post('/login').send(userBody)
        //Lembrar de alterar o teste!
        expect(body).to.deep.equal({message: 'Invalid email or password'})
    });

    it('should return invalid email or password', async function(){
        sinon.stub(SequelizeUser, 'findOne').resolves(user as any);
        sinon.stub(jwt, 'sign').returns()
        sinon.stub(ValidateLogin, 'validate').returns()

        const {status, body} = await chai.request(app).post('/login').send({
            email: 'admi',
            password: "secret_admin"
        })
        //Lembrar de alterar o teste!
        expect(body).to.deep.equal({message: 'Invalid email or password'})
    });

    it('should return token invalid', async function(){
        const {status, body} = await chai.request(app).get('/login/role').set('Authorization', 'ey123');
        expect(status).to.be.equal(401);
        expect(body).to.deep.equal({message: 'Token must be a valid token'})
    });

    it('should return token', async function(){
        const mockReturn = SequelizeUser.build(user);
        sinon.stub(SequelizeUser, 'findOne').resolves(mockReturn);
   
        
        const {status, body} = await chai.request(app).post('/login').send(userBody)

        expect(status).to.equal(200)
        expect(body).to.have.key('token')
    })
    

    afterEach(function () {
        sinon.restore();
    });
})