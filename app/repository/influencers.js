const constants = require('../helper/constants');
const mongojs = require('mongojs')
const db = mongojs(constants.MONGO_IP_DEV)

function InfluencersRepository() {
  this.collection = db.influencers
}

InfluencersRepository.prototype.readAll = function(process){
  this.collection.find({}, (err, docs) => {
    if (err) console.log("[ERROR] MongoDB Error: " + JSON.stringify(err))
    process(err, docs)
  })
};

InfluencersRepository.prototype.create = function(insertable, callback) {
  this.collection.insert(insertable, (err) => {
    if (err) console.log("[ERROR] MongoDB Error: " + JSON.stringify(err))
    callback(err)
  })
};

module.exports = {InfluencersRepository};
