import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb://admindb:123456@ds141786.mlab.com:41786/teamchat-db",
  "bodyLimit": "100kb"
}
