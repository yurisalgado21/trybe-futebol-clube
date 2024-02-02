import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import SequelizeMatches from '../database/models/SequelizeMatches';
import {matches, matches2} from './mocks/Match.mocks';

chai.use(chaiHttp);

const {expect} = chai;

describe('Matches Test', function() {
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
    })

    afterEach(function(){
        sinon.restore();
    })
})