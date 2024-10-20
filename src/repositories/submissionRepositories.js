const Submission = require('../models/submissionModel');
class SubmissionRepository {
  constructor() {
    this.submissionModel = Submission;
  }
  async addSubmission(submission) {
    const newSubmission = await this.submissionModel.create(submission);
    return newSubmission;
  }
}

module.exports = SubmissionRepository;
