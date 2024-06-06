
import service from '../services/calificaciones.services.js'

const getCalificaciones = async (req,res) => {
const calificaciones = await service.getCalificaciones()
res.send(calificaciones)
}

const getCalificacionesById = async (req, res) =>{
    const {id} = req.body
    const calificacionById = await service.getCalificacionById(id)
    res.send(calificacionById);
}

const agregarCalificacion = async (req, res) => {
    const calificacionNueva = req.body
    const calificaciones = await service.agregarCalificacion(calificacionNueva)
    res.send(calificaciones)
}

export default{
    getCalificaciones,
    getCalificacionesById,
    agregarCalificacion
}
