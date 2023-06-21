const apiRouter = require('express').Router()

apiRouter.post('/controlbulb', function (req, res) {
  const { userRequest } = req.body
  const utterance = userRequest.utterance

  const responseBody = {
    version: '2.0',
    template: {
      outputs: [
        {
          simpleText: {
            text: 'bulb: ' + utterance,
          },
        },
      ],
    },
  }

  res.status(200).send(responseBody)
})

apiRouter.post('/controlair', function (req, res) {
  const { userRequest } = req.body
  const utterance = userRequest.utterance

  const responseBody = {
    version: '2.0',
    template: {
      outputs: [
        {
          simpleText: {
            text: 'air: ' + utterance,
          },
        },
      ],
    },
  }

  res.status(200).send(responseBody)
})

apiRouter.post('/controlmonitor', function (req, res) {
  const { userRequest } = req.body
  const utterance = userRequest.utterance

  const responseBody = {
    version: '2.0',
    template: {
      outputs: [
        {
          simpleText: {
            text: 'monitor: ' + utterance,
          },
        },
      ],
    },
  }

  res.status(200).send(responseBody)
})

module.exports = apiRouter
