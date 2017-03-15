// Dependencies
const expect = require('chai').expect;
const debug = require('../debug');
require('mocha-sinon');

process.env.DEBUG= true;

describe ('NX-Utility-Tool', (done) => {
  beforeEach(function() {
   this.sinon.stub(console, 'log');
 });

  it('test for success has run', (done) => {
    debug.debug('Success Message', 'Successful');
    expect(console.log.calledOnce).to.be.true;
    done();
  });

  it('test for error has run', (done) => {
    debug.debug('Error Message', 'error');
    expect(console.log.calledOnce).to.be.true;
    done();
  });
});
