import {
    AGREGAR_USUARIO,
    AGREGAR_USUARIO_EXITO,
    AGREGAR_USUARIO_ERROR,

    OBTENER_USUARIO,
    OBTENER_USUARIO_EXITO,
    OBTENER_USUARIO_ERROR


} from '../types'

const initialState = {
    usuario: [],
    error: null,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {

        case AGREGAR_USUARIO:
            return {
                ...state,
                loading: action.payload
            }
        case AGREGAR_USUARIO_EXITO:
            return {
                ...state,
                loading: false,
                usuario: [...state.usuario, action.payload]
            }
        case AGREGAR_USUARIO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case OBTENER_USUARIO:
            return {
                ...state,
                loading: action.payload
            }
        case OBTENER_USUARIO_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                usuario: action.payload
            }
        case OBTENER_USUARIO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            
            
        default:
            return state;
    }
}


