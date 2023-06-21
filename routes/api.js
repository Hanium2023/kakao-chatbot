const apiRouter = require('express').Router()

apiRouter.post('/controlbulb', function (req, res) {
  // 전등, 전구, 불빛 등 텍스트가 들어오면 실행
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
  // 공기, 공기청정기, 탁하다 등 텍스트가 들어오면 실행
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
  // 채널, 소리, TV, 모니터 등 텍스트가 들어오면 실행
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
