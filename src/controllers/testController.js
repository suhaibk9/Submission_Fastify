async function pingRequest(req, res) {
  const response = await this.testService.pingService();
  console.log('This Object is from testService', this.testService);
  return res.send({ message: response });
}
module.exports = { pingRequest };

//   console.log('This Object is from testService', this.testService);
//   const response = testService.pingService();
//   return res.send({ message: response });