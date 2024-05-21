import './style.css'
import workFlow from '../../assets/dashboard.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/FirebaseConfig';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')

    const heandleLogin = (e) => {
        e.preventDefault()
        
        setError('')

        signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log('Logado com sucesso.'))
        .catch((err) => setError(err.message))

    }

    

    return ( 
        <>
            <section className="container">
                <img src={workFlow} alt="" />
                <p className='text-info'>Por favor digite suas informações de login</p>

                <form>
                    <div className="div-input">
                        <label>E-mail</label>
                        <input
                            placeholder='exemplo@exemplo.com'
                            className='email' 
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>
                    <div className="div-input">
                        <label>Password</label>
                        <input
                            placeholder='******'
                            className='password' 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className='error'>{error}</p>}
                    <a href='#' className='text-info-senha'>Esqueceu sua senha?</a>
                    <button type='button' className='button' onClick={heandleLogin}>Entrar</button>
                    <div className="form-footer">
                        <p>Você não tem uma conta? </p>
                        <Link to="/register">Crie a sua conta aqui</Link>
                    </div>
                </form>
            </section>
        </>
     );
}

export default Login;