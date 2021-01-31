var asynk = require('async');

module.exports = {
    fun : function(cb){
        asynk.eachOfLimit([1, 2, 3, 4], 1, function(num, index, done){
            setTimeout(function(){
                done();
            }, 10)
        }, function(){
            cb();
        })
    }
}
