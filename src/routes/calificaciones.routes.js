import express from 'express'
import controller from '../controllers/calificaciones.controllers.js'

const router = express.Router()

router.get("/calificaciones",controller.getCalificaciones)
router.post("/calificaciones",controller.postCalificaciones)

export default router