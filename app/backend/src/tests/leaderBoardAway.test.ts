import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import SequelizeMatches from '../database/models/SequelizeMatches';
import {totalPoints, totalVictories, totalDraws, totalLosses, goalsFavor, goalsOwn, totalGames, efficiency, order} from '../utils/leaderBoardAwayFunctions'
import {matches, orderTeams} from './mocks/LeaderBoard.mock';

chai.use(chaiHttp);

const {expect} = chai;

describe('LeaderBoardAway Test', function() {
    beforeEach(() => {
        sinon.restore()
    });

    it('should return total 1 points by Grêmio', async function(){
        const id = 8;

        const result = totalPoints(id, matches)

        expect(result).to.equal(1)
    });
    
    it('should return total 3 points by Napoli', async function(){
        const id = 11;

        const result = totalPoints(id, matches)

        expect(result).to.equal(3)
    });

    it('should return total 1 victories by Napoli', async function(){
        const id = 11;

        const result = totalVictories(id, matches)

        expect(result).to.equal(1)
    });

    it('should return totalGames 1 by Napoli', async function(){
        const id = 11;

        const result = totalGames(id, matches)

        expect(result).to.equal(1)
    });

    it('should return totalDraws 1 by Bahia', async function(){
        const id = 2;

        const result = totalDraws(id, matches)

        expect(result).to.equal(1)
    });

    it('should return totalLosses 1 by Minas Brasilia', async function(){
        const id = 10;

        const result = totalLosses(id, matches)

        expect(result).to.equal(1)
    });

    it('should return goalsFavor 1 goals by Minas Brasilia', async function(){
        const id = 10;

        const result = goalsFavor(id, matches)

        expect(result).to.equal(1)
    });

    it('should return goalsOwn 2 Minas Brasilia', async function(){
        const id = 10;

        const result = goalsOwn(id, matches)

        expect(result).to.equal(2)
    });


    it('should return efficiency 0 by Minas Brasilia', async function(){
        const id = 10;

        const result = efficiency(id, matches)

        expect(result).to.equal(0)
    });

    it('should return order correct', async function(){
        const result = order(orderTeams)

        expect(result).to.deep.equal(orderTeams)
    });
});
