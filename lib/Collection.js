const client = require('./MongoConfig');
const db = client.db('e-commerce');

//------- all collection -----------------------
const userCollection = db.collection('user');
const adminCollection = db.collection('admin');

module.exports = { userCollection, adminCollection };