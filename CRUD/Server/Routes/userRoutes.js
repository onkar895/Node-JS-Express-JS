import { Router } from 'express'
import { addUser, editUser, getUsers, getUser, deleteUser } from '../Controller/userController.js'

const router = Router()

router.post('/add', addUser)
router.get('/all', getUsers)
router.get('/edit/:id', getUser)
router.put('/:id', editUser)
router.delete('/:id', deleteUser)

export default router
