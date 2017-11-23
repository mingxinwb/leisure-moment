const MomentModel = require('../models/momentModel');

const getMoments = function() {
    return new Promise((resolve, reject) => {
        MomentModel.find({}, function(err, moments) {
            if (err) {
                reject(err);
            } else {
                resolve(moments);
            }
        });
    });
};

const getMoment = function(id) {
    return new Promise((resolve, reject) => {
        MomentModel.findOne({id: id}, function(err, moment) {
            if (err) {
                reject(err);
            } else {
                resolve(moment);
            }
        })
    });
};

const addMoment = function(newMoment) {
    return new Promise((resolve, reject) => {
        MomentModel.findOne({title: newMoment.title}, function(err, data) {
            if (data) {
                reject('moment title already exists.');
            } else {
                MomentModel.count({}, function(err, num) {
                    newMoment.id = num + 1;
                    const mongoMoment = new MomentModel(newMoment);
                    mongoMoment.save();
                    resolve(mongoMoment);
                });
            }
        })
    });
};

module.exports = {
    getMoments,
    getMoment,
    addMoment
}