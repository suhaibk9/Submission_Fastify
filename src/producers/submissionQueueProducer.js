const submissionQueue = require('../queues/submissionQueue');

const submissionQueueProducer = async (name, payload, priority = 0) => {
  //name->
  await submissionQueue.add(name, payload, { priority });
  console.log('Added a new Submission Job to the Queue');
};

module.exports = submissionQueueProducer;
