const apiRouter = require('express').Router()

apiRouter.post('/sayHello', function (req, res) {
  const { userRequest } = req.body
  const utterance = userRequest.utterance

  const responseBody = {
    version: '2.0',
    template: {
      outputs: [
        {
          simpleText: {
            text: utterance,
          },
        },
      ],
    },
  }

  res.status(200).send(responseBody)
})

module.exports = apiRouter
