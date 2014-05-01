var through = require('through2');

module.exports = function(opt) {

    opt.name = opt.name ? opt.name : "0";
    opt.timeout = opt.timeout ? opt.timeout : 1000;

    console.log("Constructed: tester " + opt.name);

    function tester(file, encoding, callback) {
        console.log("Started: tester " + opt.name);

        setTimeout(function() {
            console.log("Done: tester " + opt.name);
            callback();
        }, opt.timeout);
    }

    return through.obj(tester);
};
