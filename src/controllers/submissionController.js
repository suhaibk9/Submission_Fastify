// async function pingRequest(req, res) {
//   const response = await this.testService.pingService();
//   console.log('This Object is from testService', this.testService);
//   return res.send({ message: response });
// }
// module.exports = { pingRequest };

//   console.log('This Object is from testService', this.testService);
//   const response = testService.pingService();
//   return res.send({ message: response });
async function createSubmission(req, res) {
  const response = await this.submissionService.addSubmission(req.body);
  return res.code(201).send({
    error: {},
    data: response,
    success: true,
    message: 'Submission created successfully',
  });
}

module.exports = { createSubmission };
