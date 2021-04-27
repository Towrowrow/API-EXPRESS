import express from 'express'
import { addCat, getCat, postCat } from '../controllers/catController.js'
import { catchErrors } from '../helpers.js'
const router = express.Router()

router.get('/', (_, res) => {
    res.send('Hello World')
})
router.get('/test', getCat)
router.post('/test', postCat)
router.post('/cat',catchErrors(addCat) )

export default router