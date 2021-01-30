import { combineReducers, CombineReducers } from 'redux';
import UsuarioReducer from './UsuarioReducer';

export default combineReducers({
    usuario: UsuarioReducer,
});