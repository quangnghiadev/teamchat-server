import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb://qnghiadev:admin123@ds117956.mlab.com:17956/teamchat-db",
  "bodyLimit": "100kb"
}
