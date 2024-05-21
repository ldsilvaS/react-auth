import './style.css'
import workFlow from '../../assets/dashboard.png'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/FirebaseConfig';

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('');

    const navigate = useNavigate()

    const heandleRegister = (e) => {
        e.preventDefault()

        setError('')
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => navigate('/'))
        .catch((err) => setError(err.message))     
    }

    return ( 
        <>
            <section className="container">
                <img src={workFlow} alt="" />
                <p className='text-info'>Por favor digite suas informações para o registro!</p>

                <form>
                    <div className="div-input">
                        <label>E-mail</label>
                        <input
                            placeholder='exemplo@exemplo.com'
                            className="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>
                    <div className="div-input">
                        <label>Password</label>
                        <input
                            placeholder='******'
                            className="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className='error'>{error}</p>}
                    <button type='button' className='button' onClick={heandleRegister}>Registrar</button>
                    <div className="form-footer">
                        <p>Você já possui uma conta?</p>
                        <Link to="/">Acesse sua conta!</Link>
                    </div>
                </form>
            </section>
        </>
     );
}

export default Register;