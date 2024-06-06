
import model from '../models/calificaciones.models.js'

const getCalificaciones = async (req,res) =>{
const calificaciones = await model.getCalificaciones()
res.send(calificaciones)
}

const postCalificaciones = async (data) =>{
    const calificaciones = await model.postCalificaciones(data)
    return calificaciones
    }

const promedioNotasIngresadas = async () =>{
    const promedioNotasIngresadas = await model.promedioNotasIngresadas()
    return promedioNotasIngresadas
}


export default{
    getCalificaciones,
    postCalificaciones
}