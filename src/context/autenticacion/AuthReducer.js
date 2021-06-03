

export default (state, action) => {
    switch(action.type){
        
        case "REGISTRO_EXITOSO":
            // GUARDA EL TOKEN EN EL NAVEGADOR
            localStorage.setItem('token', action.payload.token)

            // MODIFICACIÓN DEL ESTADO GLOBAL
            return {
                ...state,
                autenticado: true
            }

        case "OBTENER_USUARIO": 
            return {
                ...state,
                autenticado: true,
                usuario: action.payload
            }            

        default:
            return state
    }
}