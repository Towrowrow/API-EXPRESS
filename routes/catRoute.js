import express from 'express'
import { addCat, getCatById, getCats, removeCat, updateCat } from '../controllers/catController.js'
import { catchErrors } from '../helpers.js'

const router = express.Router()


//GET
router.get('/', catchErrors(getCats))
router.get('/:id', catchErrors(getCatById))
//POST
router.post('/', catchErrors(addCat))
//PUT/PATCH
router.patch('/:id',catchErrors(updateCat))
//DELETE
router.delete('/:id',catchErrors(removeCat))

export { router as catRouter }
