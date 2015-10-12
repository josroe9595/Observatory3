'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/projects', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/projects')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
  it('user must be authenticated', function(done){
    request(app)
      .post('/')
      .send({
      name: 'Observatory',
      description: 'cool project',
      repositoryUrl: 'https://github.com/rcos/Observatory3/',
      githubUsername: 'rcos'
      })
      .expect(401)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
  
});