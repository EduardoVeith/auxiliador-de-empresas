import './signin.css'
import { useState, useEffect, useContext } from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

function SignIn() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const { signIn, loadingAuth } = useContext(AuthContext)

  function handleSubmit(e) {
    e.preventDefault()

    if (email !== '' && senha !== '') {
      signIn(email, senha)
    }

  }



  return (
    <div className='container-center'>
      <div className='login'>
        <div className='login-area'>
          <img src={logo} alt="Sistema Logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <input type="text" placeholder='email@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='**********' value={senha} onChange={(e) => setSenha(e.target.value)} />
          <button type='submit'> {loadingAuth ? 'Carregando...' : 'Acessar'} </button>
        </form>

        <Link to="/register">Não tem uma conta? Cadastre-se</Link>
      </div>
    </div>
  );
}

export default SignIn;
