import { Router } from "express"
import * as commentController from '../controllers/comments.js'
import { checkAuth, decodeUserFromToken } from "../middleware/auth"

const router = Router()

/* -------- Publice Routes -------- */
router.get('/', commentController.index)

/* -------- Protected Routes -------- */
router.use(decodeUserFromToken)
router.post('/',checkAuth, commentCtrl.create)
router.put('/:id', checkAuth, commentCtrl.update)
router.delete('/:id', checkAuth, commentCtrl.delete)
