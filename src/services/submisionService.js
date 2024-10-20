const submissionProducer = require('../producers/submissionQueueProducer');
class SubmissionService {
  constructor(submissionRepository) {
    this.submissionRepository = submissionRepository;
  }
  async addSubmission(submission) {
    // await submissionProducer('submission', submission);
    // return { message: 'Submission has been added to the queue' };
    const submission_repo = await this.submissionRepository.addSubmission(
      submission
    );
    if (!submission_repo) {
      throw new Error('Submission was not added to the queue');
    }
    const addingToQueue = await submissionProducer(
      'submission',
      submission_repo
    );
    return {
      message: 'Submission has been added to the queue',
      queueResponse: addingToQueue,
      submission: submission_repo,
    };
  }
}
module.exports = SubmissionService;
