const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongodbUrl = 'mongodb+srv://testUser:bwXIYOay2PyOdLey@fromshelltodrivertutorial-gtajb.mongodb.net/test?retryWrites=true'

let _db;
const initDb = callback => {
   if(_db) {
      console.log('Database is already initialised!');
      return callback(null, _db);
   }
   MongoClient.connect(mongodbUrl)
      .then(client => {
         _db = client.db();
         callback(null, _db);
      })
      .catch(err => {
         callback(err);
      });
};

const getDb = () => {
   if(!_b){
      throw Error('Database not initialised!');
   }
   return _db;
};

module.export = {
   initDb,
   getDb
};