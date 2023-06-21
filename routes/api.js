const apiRouter = require('express').Router()

apiRouter.post('/sayHello', function (req, res) {
  const utterance = json_data['userRequest']['utterance']

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
