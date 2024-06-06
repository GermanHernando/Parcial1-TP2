
import model from '../models/calificaciones.models.js'

const getCalificaciones = async () =>{
const calificaciones = await model.getCalificaciones()
return calificaciones
}

const getCalificacionById = async (id) => {
    const calificacionById = await model.getCalificacionById(id)
    return calificacionById
}

const agregarCalificacion = async (data) =>{
    const calificacionAgregada = await model.agregarCalificacion(data)
    return calificacionAgregada
}

export default{
    getCalificaciones,
    getCalificacionById,
    agregarCalificacion
}