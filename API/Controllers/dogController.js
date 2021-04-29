import express from 'express'
import { addDog, getDogById, getDogs, removeDog, updateDog } from '../../Business/Managers/dogManager.js'
import { catchErrors } from '../../Business/Utils/helpers.js'

const router = express.Router()


//GET
router.get('/', catchErrors(getDogs))
router.get('/:id', catchErrors(getDogById))
//POST
router.post('/', catchErrors(addDog))
//PUT/PATCH
router.patch('/:id',catchErrors(updateDog))
//DELETE
router.delete('/:id',catchErrors(removeDog))

export { router as dogController }
