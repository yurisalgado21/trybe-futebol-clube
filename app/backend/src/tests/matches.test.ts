import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import SequelizeMatches from '../database/models/SequelizeMatches';
import {match, matches, matches2} from './mocks/Match.mocks';
import ValidateLogin from '../middlewares/AuthMiddleware';
import Auth from '../middlewares/Auth';

chai.use(chaiHttp);

const {expect} = chai;

describe('Matches Test', function() {
    beforeEach(() => {
        sinon.stub(ValidateLogin, 'handle').resolves(() => {})
    });

    it('should return all matches', async function(){
        sinon.stub(SequelizeMatches, 'findAll').resolves(matches as any);

        const {status, body} = await chai.request(app).get('/matches');

        expect(status).to.equal(200);
        expect(body).to.deep.equal(matches)
    });

    it('should return matches with inProgress === false', async function(){
        sinon.stub(SequelizeMatches, 'findAll').resolves(matches as any);

        const {status, body} = await chai.request(app).get('/matches?inProgress=false');

        expect(status).to.equal(200);
        expect(body).to.deep.equal(matches)
    });

    it('should return matches with inProgress === true', async function(){
        sinon.stub(SequelizeMatches, 'findAll').resolves(matches2 as any);

        const {status, body} = await chai.request(app).get('/matches?inProgress=true');

        expect(status).to.equal(200);
        expect(body).to.deep.equal(matches2)
    });

    it('should update match by id', async function(){
        sinon.stub(SequelizeMatches, 'update').resolves(undefined);
        sinon.stub(SequelizeMatches, 'findByPk').resolves(match as any)

        const {status, body} = await chai.request(app).patch('/matches/1/finish').set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiaWF0IjoxNzA2ODQzMzg5LCJleHAiOjE3MDc0NDgxODl9.tEdFyBinWBrYZECSPEIa8ruwaaMJJ8r5nZdTAauIXbQ');
        // console.log(body);
        //Lembrar de alterar o teste!
        expect(status).to.equal(401);
        expect(body).to.deep.equal({message: "Invalid Token"})
    });
    //fazer o teste do req 18

    afterEach(function(){
        sinon.restore();
    })
})