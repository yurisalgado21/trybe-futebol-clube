import * as sinon from 'sinon';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import SequelizeTeam from '../database/models/SequelizeTeam';

chai.use(chaiHttp);

const { expect } = chai;

describe('Utils Test', () => {
  it('should return 200', async function () {
     const result = mapStatusHTTP('SUCCESSFUL');
     expect(result).to.equal(200)
  });

  it('should return 201', async function () {
    const result = mapStatusHTTP('CREATED');
    expect(result).to.equal(201)
  });

  it('should return 400', async function () {
    const result = mapStatusHTTP('INVALID_DATA');
    expect(result).to.equal(400)
  });

  it('should return 409', async function () {
    const result = mapStatusHTTP('CONFLICT');
    expect(result).to.equal(409)
 });

 it('should return 422', async function () {
   const result = mapStatusHTTP('UNPROCESSABLE ENTITY');
   expect(result).to.equal(422)
 });

 it('should return 400', async function () {
   const result = mapStatusHTTP('');
   expect(result).to.equal(500)
 });

  afterEach(function () {
    sinon.restore();
  });
});
