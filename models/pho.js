var orm = require("../config/orm.js");

var Pho = {
    all: function(cb) {
        orm.selectAll("pho", function(res) {
            cb(res);
        });
    },

    create: function(data,cb) {
        orm.insertOne("pho", data, function(res){
            cb(res);
        });

    },
    update: function(data, condition, cb) {
        orm.updateOne("pho", data, condition, function(res){
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.deleteOne("pho", condition, function(res){
            cb(res);
        });
    }
};

module.exports = Pho;    