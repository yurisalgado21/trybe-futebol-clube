import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import SequelizeMatches from '../database/models/SequelizeMatches';
import {matches} from './mocks/Match.mocks';

chai.use(chaiHttp);

const {expect} = chai;

describe('Matches Test', function() {
    it('should return all matches', async function(){
        sinon.stub(SequelizeMatches, 'findAll').resolves(matches as any);

        const {status, body} = await chai.request(app).get('/matches');

        expect(status).to.equal(200);
        expect(body).to.deep.equal(matches)
    });

    afterEach(function(){
        sinon.restore();
    })
})