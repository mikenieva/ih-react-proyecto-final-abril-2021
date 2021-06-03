// 1. IMPORTACIONES
import React, { useReducer } from 'react'

import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'

// 2. FUNCIONES PRINCIPAL
const AuthState = (props) => {

    // A. ESTADO INICIAL
    const initialState = {
        mensaje: null,
        autenticado: null
    }


    // B. CONFIGURACIÓN DEL REDUCER
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    // C. FUNCIONES DE MANEJO DE ESTADO
    const registrarUsuario = async (datos) => {
        console.log("Estos son los datos que enviaremos al servidor", datos)
    }

    // D. RETORNO
    return (
        <AuthContext.Provider
            value={{
                mensaje: state.mensaje,
                autenticado: state.autenticado,
                registrarUsuario
            }}
        >
            {props.children}
        </AuthContext.Provider> 
    )
}

// 3. EXPORTACIÓN
export default AuthState