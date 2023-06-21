const apiRouter = require('express').Router()

function remote(req, res) {
  body = request.get_json()
  console.log(body)
}

apiRouter.post('/sayHello', function (req, res) {
  console.log(req.body)

  body = request.get_json()

  const responseBody = {
    version: '2.0',
    template: {
      outputs: [
        {
          simpleText: {
            text: body,
          },
        },
      ],
    },
  }

  res.status(200).send(responseBody)
})

apiRouter.post('/', remote)

module.exports = apiRouter
