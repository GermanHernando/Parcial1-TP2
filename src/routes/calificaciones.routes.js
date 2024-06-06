import express from 'express'
import controller from '../controllers/calificaciones.controllers.js'

const router = express.Router()

router.get("/calificaciones",controller.getCalificaciones)
router.get("/calificaciones/id",controller.getCalificacionesById)
router.post("/calificaciones",controller.agregarCalificacion)

export default router