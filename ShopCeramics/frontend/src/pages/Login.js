import {useState} from 'react';
import {useLogin} from '../hooks/useLogin';

const Login = () => {
    const [identifier, setIdentifier] = useState('');
   const [password, setPassword] = useState('');
   const {login, error, isLoading} = useLogin();

   const handleSubmit = async (e) =>{
    e.preventDefault();
    await login(identifier,password);
   }

   return (
    <form className='login' onSubmit={handleSubmit}>
      <h3>Login</h3>
      <label > Username or Email:</label>
      <input 
        type="text" 
        onChange={(e)=>{setIdentifier(e.target.value)}}
        value={identifier}
      />

      <label > Password:</label>
      <input 
        type="password" 
        onChange={(e)=>{setPassword(e.target.value)}}
        value={password}
      />

      <button disabled={isLoading}>Login</button>
      
      {error && <div className='error'>{error}</div>}

    </form>

   )
}

export default Login;