const submissionProducer = require('../producers/submissionQueueProducer');
const { fetchProblemDetails } = require('../apis/problemAdminAPI');
class SubmissionService {
  constructor(submissionRepository) {
    this.submissionRepository = submissionRepository;
  }
  async addSubmission(submission) {
    const problemId = submission.problemId;
    const problemDetails = await fetchProblemDetails(problemId);
    if (!problemDetails) {
      throw new Error('Failed To Submit, Problem Details Not Found');
    }
    const lang = submission.language;
    const codeStub = problemDetails.data.codeStubs.find(
      (codeStub) => codeStub.language.toLowerCase() === lang.toLowerCase()
    );
    if (!codeStub) {
      throw new Error(`No code stub found for the specified language: ${lang}`);
    }

    console.log('Code Stub', codeStub);
    submission.code =
      codeStub.startSnippet +
      '\n\n' +
      submission.code +
      '\n\n' +
      codeStub.endSnippet;
    console.log('Full Code', submission.code);
    const submission_repo = await this.submissionRepository.addSubmission(
      submission
    );
    if (!submission_repo) {
      throw new Error('Submission was not added to the queue');
    }
    console.log('Submission Payload', submission);
    const addingToQueue = await submissionProducer('submission', {
      code: submission.code,
      problemId: submission.problemId,
      userId: submission.userId,
      language: submission.language,
      inputCase: problemDetails.data.testCases[0].input,
      outputCase: problemDetails.data.testCases[0].output,
    });
    return {
      message: 'Submission has been added to the queue',
      queueResponse: addingToQueue,
      submission: submission_repo,
    };
  }
}
module.exports = SubmissionService;
