 const calificaciones = [
    {
        nombre: "Fulano",
        nota: 6,
        curso: "1A"
    },
    {
        nombre: "Mengano",
        nota: 8,
        curso: "2B"
    },
    {
        nombre: "Saraza",
        nota: 9,
        curso: "3C"
    },
    {
        nombre: "Homero",
        nota: 8,
        curso: "1A"
    }
 ]

 const getCalificaciones = () =>{
    return this.calificaciones
 }

 const postCalificaciones = async (data) =>{
    const nuevaCalificacion = await calificaciones.push(data)
    console.log('nuevaCalificacion:', nuevaCalificacion)
    return data
 }

 const promedioNotasIngresadas = () =>{
    let acum = 0;
    let promedio = 0;
    calificaciones.forEach(alumno => {
        acum += alumno.nota;
        contador++;
    });
    promedio = acum/calificaciones.length;
    return promedio
 }

 const promedioNotasPorCurso = () =>{
    const promedioCursos = []
    for (let index = 0; index < calificaciones.length; index++) {
        const cursoNota = calificaciones[index].reduce(calificaciones.nota);
        promedioCursos.push(cursoNota)
    }
    return promedioCursos
 }

 const cantNotasIngresadas = () =>{
    return calificaciones.length
 }

 



 export default{
    getCalificaciones,
    postCalificaciones,
    promedioNotasIngresadas
 }
    
 