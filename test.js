var should = require('chai').should();
var webpack = require('./webpack');
var path = require('path');
var fs = require('fs');
var moduleName = require('./package').name;

var waitSeconds = 5;

describe(moduleName, function(){

    it('can compile simple dependencies', function(done){
        this.timeout(waitSeconds * 1000);
        webpack.compileSource({'test-module':'./testRoot.js'}, function(err, body){
            should.not.exist(err);
            fs.readFile('./output.js', function(err, body){
                var cononicalBodyAsString = body.toString();
                body.toString().should.equal(cononicalBodyAsString);
                done();
            });
        })
    });

});

//promises made mocha super awesome! :P.
var unhandledRejectionExitCode = 0;

process.on("unhandledRejection", function(reason){
    unhandledRejectionExitCode = 1;
    throw reason;
});

process.prependListener("exit", function(code){
    if(code === 0) process.exit(unhandledRejectionExitCode);
});
// /super awesome
