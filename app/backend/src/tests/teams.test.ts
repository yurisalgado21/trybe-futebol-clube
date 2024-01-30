import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import SequelizeTeam from '../database/models/SequelizeTeam';
import {team, teams} from './mocks/Team.mocks'

chai.use(chaiHttp);

const { expect } = chai;

describe('Team test', () => {

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  it('should return all teams', async function () {
      sinon.stub(SequelizeTeam, 'findAll').resolves(teams as any)

      const {status, body} = await chai.request(app).get('/teams');

      expect(status).to.equal(200);
      expect(body).to.deep.equal(teams)
  });

  afterEach(function () {
    sinon.restore();
  });
});
