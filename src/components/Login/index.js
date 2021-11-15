import React, { useState } from "react";
import {useHistory} from 'react-router';
import '../../App.css'
import Logo from '../../logo.gif'

const Login = () => {
    
    const history = useHistory();

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            if(!email){
                alert("Por favor insira um e-mail")
                return;
            } else if(
                !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
                    alert('Email inválido. Por favor tente novamente.');
                    return;
                }else if(password === "" || password ===" "){
                    alert('Por favor digite sua senha!');
                    return;
                }else if(password.length < 8){
                    alert('A senha deve conter no mínimo 8 caracteres!'); return;
                }
                console.log('cheguei aqui')
                history.push('/map');
                console.log('cheguei aqui')
                
        }catch(error){
            alert("Não foi possivel concluir a sua solicitação!")
        }
    };

    return(
        <form className='container-login' onSubmit={handleSubmit}>
        <div className='logo'>
            <img src={Logo}title='SGI' alt='sgi'/>
        </div>
        <div className='login-form-container'>
            <label>E-mail<br/>
                <input 
                type='email' 
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                required />
            </label>
        </div>
        <div className='login-form-container'>
            <label> Senha <br/>
                <input 
                type='password' 
                name='password' 
                onChange={(e) => setPassword(e.target.value)}
                required />
            </label>
        </div>
        <div className='login-button'>
        <button id ='button-submit' type='submit'>Entrar</button>
        </div>
        </form>
    )
}
export default Login;