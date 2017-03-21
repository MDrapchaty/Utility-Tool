// Dependencies
const expect = require('chai').expect;
const debug = require('../debug');
require('mocha-sinon');

process.env.DEBUG= true;

describe ('NX-Utility-Tool', (done) => {
  beforeEach(function() {
   this.sinon.stub(console, 'log');
   this.sinon.stub(console, 'error');
   this.sinon.stub(console, 'warn');
 });


  it('test for error has run', (done) => {
     debug.debug('Error', 'error');
     expect(console.error.calledOnce).to.be.true;
     done();
   });
 
   it('test for warn has run', (done) => {
     debug.debug('Warning!', 'warn');
     expect(console.warn.calledOnce).to.be.true;
     done();
   });


  it('test for success has run', (done) => {
    debug.debug('Success Message', 'log');
    expect(console.log.calledOnce).to.be.true;
    done();
  });


});