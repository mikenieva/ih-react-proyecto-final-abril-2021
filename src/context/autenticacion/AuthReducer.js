

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

        default:
            return state
    }
}