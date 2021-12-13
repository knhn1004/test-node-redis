require('dotenv').config();
const redis = require('redis');

const client = redis.createClient({
  host: 'localhost',
  port: 6379,
  //  password: process.env.REDIS_PASSWORD,
});

client.once('ready', () => {
  console.log('redis connected');
});

client.subscribe('dog');

client.on('message', (channel, msg) => {
  console.log(msg);
});
