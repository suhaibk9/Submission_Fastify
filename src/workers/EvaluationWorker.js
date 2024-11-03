const { Worker } = require('bullmq');
const redisConnection = require('../config/redisConfig');
const axios = require('axios');
const socketURL = 'http://localhost:3001/sendPayload';
// function EvaluationWorker(queueName) {
function EvaluationWorker(queueName, submissionService) {
  console.log('Worker Reached');
  return new Worker(
    queueName,
    async (job) => {
      if (job.name === 'evaluationJob') {
        //evaluationJob
        console.log('Reached Worker');
        try {
          const data = await job.data;
          console.log('Updating this data', data);
          // this.submissionService.updateStatus(data.submissionId, data.response);
          await submissionService.updateStatus(
            data.submissionId,
            data.response
          );
          const res = await axios.post(socketURL, {
            userId: data.userId,
            payload: {
              submissionId: data.submissionId,
              response: data.response,
              problemId: data.problemId,
            },
          });
          console.log('Response from Socket', res);
        } catch (error) {
          console.log('Error in Worker');
          console.log(error);
        }
      }
    },
    {
      connection: redisConnection,
    }
  );
}

module.exports = EvaluationWorker;
// import { Job, Worker } from 'bullmq';

// import SubmissionJob from '../jobs/submissionJob';
// import redisConnection from '../config/redisConfig';

// const SubmissionWorker = (queueName: string) => {
//   return new Worker(
//     queueName,
//     async (job: Job) => {
//       console.log('Worker Reached');
//       if (job.name === 'submission') {
//         console.log('Reached Worker');
//         const sampleJobInstance = new SubmissionJob(job.data);
//         try {
//           console.log('Executing the Job');
//           await sampleJobInstance.handle(job); // Await the handle method
//         } catch (error) {
//           console.error(`Job ${job.id} failed:`, error);
//           await sampleJobInstance.failed(job); // Call failed if needed
//         }
//       }
//     },
//     {
//       connection: redisConnection,
//     }
//   );
// };

// export default SubmissionWorker;

// new Worker(
//   'evaluationQueue',
//   async (job) => {
//     if (job.name === 'evaluationJob') {
//       console.log('EVALUATION JOB');
//       console.log(job.data);
//     }
//   },
//   {
//     connection: redisConnection,
//   }
// );
// async updateStatus(submissionId, status) {
//     const updatedSubmission = await this.submissionModel.findByIdAndUpdate(submissionId, { status }, { new: true });
//     return updatedSubmission;
// }
// evaluationJob;
