import React, { useReducer } from 'react'

import ProyectoContext from './ProyectoContext'
import ProyectoReducer from './ProyectoReducer'


import clienteAxios from './../../config/axios'

const ProyectoState = props => {

    // A. ESTADO INICIAL
    const initialState = {
        proyectos: []
    }


    // B. CONFIGURACIÓN DEL REDUCER
    const [state, dispatch] = useReducer(ProyectoReducer, initialState)

    // C. FUNCIONES PROPIAS

    

    // D. RETORNO

    return (

        <ProyectoContext.Provider
            value={{
                proyectos: state.proyectos
            }}
        >
            {props.children}
        </ProyectoContext.Provider>

    )
}


export default ProyectoState

