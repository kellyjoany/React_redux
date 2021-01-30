import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Home() {
    let history = useHistory();

    const dispatch = useDispatch();

    const name = useSelector(state => state.usuario.name);
    const contador = useSelector(state => state.usuario.contador);
    
    const handleButton = () => {
        history.replace('/sobre');
    };

    const handleKelly = () => {
        dispatch({
            type: 'SET_NAME',
            payload: { name: 'kelly' }
        })
    };

    const handleIncrement = () => {
        dispatch({
            type: 'INCREMENT_CONTADOR',
        })
    };

    return (
        <div>
            <h4>Página HOME</h4>
            NOME: {name} <br/>
            CONTAGEM: {contador} <br></br>

            <button onClick={handleKelly}>Setar nome para Kelly</button>
            <br></br>
            <button onClick={handleIncrement}>+1</button>
            <br></br>
            <button onClick={handleButton}>Ir para a página SOBRE</button>
        </div>
    )
}

export default Home;