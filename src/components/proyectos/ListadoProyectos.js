import React, { useContext, useEffect } from 'react'

import ProyectoContext from './../../context/proyectos/ProyectoContext'
import AuthContext from './../../context/autenticacion/AuthContext'

export default function ListadoProyectos() {

    // EXTRAER LOS VALORES DEL CONTEXT (ESTADO GLOBAL)
    const proyectoContext = useContext(ProyectoContext)
    const { proyectos, obtenerProyectos } = proyectoContext

    const authContext     = useContext(AuthContext)
    const { verificarUsuario } = authContext

    useEffect(() => {

        const generarEventos = async () => {
            await verificarUsuario()
            await obtenerProyectos()            
            return 
        }

        generarEventos()
        
    }, [])




    return (
        <div>
            <h1>Listado de proyectos</h1>
            {
                proyectos.length === 0 ? "No hay proyectos listados"
                :
                proyectos.map(e => {
                    return (
                        <p key={e._id}>{e.nombre}</p>
                    )
                })
            }
        </div>
    )
}
