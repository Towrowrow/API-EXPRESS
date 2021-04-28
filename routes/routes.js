import express from 'express'
import { addCat, getCatById, getCats, removeCat, updateCat } from '../controllers/catController.js'
import { catchErrors } from '../helpers.js'

const router = express.Router()

router.get('/', (_, res) => {
    res.send('Hello World')
})
//GET
router.get('/cat/:id', catchErrors(getCatById))
router.get('/cats', catchErrors(getCats))
//POST
router.post('/cat', catchErrors(addCat))
//PUT/PATCH
router.patch('/cat/:id',catchErrors(updateCat))
//DELETE
router.delete('/cat/:id',catchErrors(removeCat))

export default router