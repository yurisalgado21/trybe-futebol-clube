import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import SequelizeMatches from '../database/models/SequelizeMatches';
import {totalPoints, totalVictories, totalDraws, totalLosses, goalsFavor, goalsOwn} from '../utils/leaderBoarderFunctions'
import {matches} from './mocks/LeaderBoard.mock';

chai.use(chaiHttp);

const {expect} = chai;

describe('LeaderBoardHome Test', function() {
    beforeEach(() => {
        sinon.restore()
    });

    it('should return total 6 points by Flamengo', async function(){
        const id = 7;

        const result = totalPoints(id, matches)

        expect(result).to.equal(6)
    });

    it('should return total 1 points by São Paulo', async function(){
        const id = 16;

        const result = totalPoints(id, matches)

        expect(result).to.equal(1)
    });

    it('should return total 2 victories by Flamengo', async function(){
        const id = 7;

        const result = totalVictories(id, matches)

        expect(result).to.equal(2)
    });

    it('should return totalDraws 1 points by São Paulo', async function(){
        const id = 16;

        const result = totalDraws(id, matches)

        expect(result).to.equal(1)
    });

    it('should return totalLosses 1 by Corinthians', async function(){
        const id = 4;

        const result = totalLosses(id, matches)

        expect(result).to.equal(1)
    });

    it('should return goalsFavor 5 by Flamengo', async function(){
        const id = 7;

        const result = goalsFavor(id, matches)

        expect(result).to.equal(5)
    });

    it('should return goalsOwn 2 by Flamengo', async function(){
        const id = 7;

        const result = goalsOwn(id, matches)

        expect(result).to.equal(2)
    });
});

