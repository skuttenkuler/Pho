var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cd(res);
        });
    },

    create: function(cols,vals,cd) {
        orm.create("burgers", col,vals, function(res){
            cb(res);
        });

    },
    update: function(objColVals, condition,cb) {
        orm.update("burgers", objColVals, condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;