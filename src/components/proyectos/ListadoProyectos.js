import React, { useContext, useEffect } from 'react'

import ProyectoContext from './../../context/proyectos/ProyectoContext'

export default function ListadoProyectos() {

    // EXTRAER LOS VALORES DEL CONTEXT (ESTADO GLOBAL)
    const proyectoContext = useContext(ProyectoContext)
    const { proyectos } = proyectoContext

    return (
        <div>
            <h1>Listado de proyectos</h1>
            {
                proyectos.length === 0 ? "No hay proyectos listados"
                :
                proyectos.map(e => {
                    return (
                        <p>{e}</p>
                    )
                })
            }
        </div>
    )
}
