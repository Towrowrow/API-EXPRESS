import express from 'express'
import { getCat, postCat } from '../controllers/catController.js'

const router = express.Router()

router.get('/', (_, res) => {
    res.send('Hello World')
})
router.get('/test', getCat)
router.post('/test',postCat )
export default router