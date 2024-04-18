exports.helloWorld = (req, res) => {
  let message = process.env.FOO
  res.status(200).send('Hello, World2!\n' + message);
};
