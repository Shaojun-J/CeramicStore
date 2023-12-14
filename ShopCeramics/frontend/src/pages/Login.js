import {useState} from 'react';
import {Link} from 'react-router-dom';

import {useLogin} from '../hooks/useLogin';

import login from '../assets/login.png';
import google from '../assets/google.png';

const Login = () => {
    const [identifier, setIdentifier] = useState('');
   const [password, setPassword] = useState('');
   const {login, error, isLoading} = useLogin();

   const handleSubmit = async (e) =>{
    e.preventDefault();
    await login(identifier,password);
   }

   return (
    <div className="login-page">
     <div className="form-background">
      <div className="page-title">
          <Link to="/"><h2 className='page-title-logo'>CERAMIX</h2></Link>
          <h4 className='page-subtitle'>Welcome to our fine ceramics</h4>
        </div>
     

        <form className='login-form' onSubmit={handleSubmit}>

        
            
          <label>Username or Email</label>
          <input 
            type="text" 
            onChange={(e)=>{setIdentifier(e.target.value)}}
            value={identifier}
          />
        

          <label>Password</label>
          <input 
            type="password" 
            onChange={(e)=>{setPassword(e.target.value)}}
            value={password}
          />
        
          <label style={{textAlign:'end', color:'var(--light-blue)'}}>Forgot password?</label>

          <button  className="btn" disabled={isLoading}>Sign in</button>
          
          {error && <div className='error'>{error}</div>}

        </form>
        <div className='login-footer'>
          <div className='option-line'>
            <div className="line"></div>
            <p>or</p>
            <div className="line"></div>

          </div>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}><img style={{ width:'20px', marginRight:'5px'}} src={google} alt="google" /><Link>Sign in with Google</Link></div>
          <div>Don't have an account? <Link to="/signup"> <span style={{marginLeft:'10px', color:'var(--light-blue)'}}>Create Account</span></Link></div>
        </div>
       
     </div>
      
    </div>
    

   )
}

export default Login;