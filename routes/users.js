const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  console.log(1111)
  ctx.body = 'this is a users/bar response'
})

module.exports = router
