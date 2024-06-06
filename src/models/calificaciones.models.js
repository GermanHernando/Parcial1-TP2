 
 
 const calificaciones = [
    {
        id: 1, 
        nombre: "Fulano",
        nota: 6
    },
    {
         id: 2,
        nombre: "Mengano",
        nota: 8
    },
    {
         id: 3,
        nombre: "Saraza",
        nota: 9
    }
 ]

 const getCalificaciones = () =>{
    return calificaciones
 }

 const getCalificacionById = async (id) => {
   const calificacion = calificaciones.find((element) => element.id == id);
   let mensaje = calificacion!=null? `Hola ${calificacion.nombre}!, Tu nota es ${calificacion.nota}`:"Calificacion inexistente porque no existe Id."
   return mensaje
}

const agregarCalificacion = (data) =>{
   data.id = calificaciones.length + 1;
   calificaciones.push(data)
   return data
}


 export default{
    getCalificaciones,
    getCalificacionById,
    agregarCalificacion
 }
    
 