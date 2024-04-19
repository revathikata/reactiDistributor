import React,{ useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';
function Login() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const history = useNavigate(); 


  const UserNamehandleBlur = () => {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let valid = true
    if (!username.trim()) {
      setUsernameError('Username is required');
      valid = false
      return;
    } else if (!emailPattern.test(username)) {
      setUsernameError('Invalid email format');
      valid = false
      return;
    } else {
      setUsernameError('');
      valid = false
    }
  };
const PwsHandleBlur =()=>{
  
  const passwordPattern = /^.{8,}$/;
  if (!password.trim()) {
    setPasswordError('Password is required');
  } else if (!passwordPattern.test(password)) {
    setPasswordError('Password must be at least 8 characters long');
  } else {
    setPasswordError('');
  }
}
  const handleLogin = (e) => {
    e.preventDefault();
if((!usernameError || !username) && (!usernameError || !password)){
  console.log(e,password, username,'hjj');

  history('/register');
}
  };
  return (
    <div className='login-page'>
      <div className="container">
        <h1 className='text-3xl font-bold underline'>Hey there!</h1>
        <p>Welcome to Insurfin! Enter your email and password to login.</p>
      </div>
      <form onSubmit={handleLogin}>
        <div className="login-form-feild">
        <label>Email</label><br/>
        <input type="email" className='form-control' placeholder='Enter your Email'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onBlur={UserNamehandleBlur}  />
          {usernameError && <p className="error">{usernameError}</p>}
        </div>
        <div className="login-form-feild ">
        <label>password</label><br/>
        <input type="password" className='form-control' placeholder='Enter your Email' 
         value={password}
         onChange={(e)=>{setPassword(e.target.value)}}
            onBlur={PwsHandleBlur}  />
          {passwordError && <p className="error">{passwordError}</p>}
        </div>

        <div className="buttons">
          <button type="submit" className='btn btn-primary contnBtn' 
          disabled={!username.trim() || !password.trim() || !!usernameError || !!passwordError}
          >Continue</button>
        </div>
      </form>
    </div>
  )
}

export default Login