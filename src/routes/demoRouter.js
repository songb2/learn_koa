import Router from 'koa-router'
import DemoController from '../api/DemoController'
const router  = new Router()
router.get('/demo', DemoController.demo)

export default router