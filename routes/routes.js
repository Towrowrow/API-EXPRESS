import express from 'express'
import { addCat, getCat, postCat } from '../controllers/catController.js'
 
const router = express.Router()

router.get('/', (_, res) => {
    res.send('Hello World')
})
router.get('/test', getCat)
router.post('/test', postCat)
router.post('/cat',addCat )

export default router