const mongoose = require('mongoose');
const submissionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, 'userId for the submission is missing'],
  },
  problemId: {
    type: String,
    required: [true, 'problemId for the submission is missing'],
  },
  code: {
    type: String,
    required: [true, 'code for the submission is missing'],
  },
  language: {
    type: String,
    required: [true, 'language for the submission is missing'],
  },
  status: {
    type: String,
    enum: ['Pending', 'Success', 'RE', 'TLE', 'MLE', 'WA'],
    default: 'Pending',
  },
});
module.exports = mongoose.model('Submission', submissionSchema);
//RE: Runtime Error
//TLE: Time Limit Exceeded
//MLE: Memory Limit Exceeded
//WA: Wrong Answer
