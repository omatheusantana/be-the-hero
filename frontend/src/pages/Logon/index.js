import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';
import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import api from '../../services/api';

export default () => {

    const history = useHistory();
    const [id, setId] = useState('');

    const handleLogin = async event  =>  {
        event.preventDefault();
        
        try {

            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');

        }catch(err) {
            console.error(err);
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo" /> 
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                        type="text" 
                        placeholder="Sua ID"
                        onChange = { e => setId(e.target.value)}
                        />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    )
}