// import { Queue } from "bullmq";
// const submissionQueue = new Queue('submissionQueue');
// export default submissionQueue;
const redisConnection = require('../config/redisConfig');
const { Queue } = require('bullmq');
const submissionQueue = new Queue('submissionQueue', {
  connection: redisConnection,
});
module.exports = submissionQueue;
