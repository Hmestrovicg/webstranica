import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Login.css';

const Login = () => {

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')) {
      navigate('/');
    }
  }, [navigate]);
  
  const[error, setError] = useState('');

  const[isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    });    

  }

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch(
      'https://frontend.internetskimarketing.eu/backend/wp-json/jwt-auth/v1/token',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      }
    )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        setIsLoading(false);
        setForm({
            username: "",
            password: ""
        });
        if(data?.code) {
            setError("Neispravni podatci, pokušajte ponovno.");
        return;
      }      
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.user_display_name);
        navigate('/');
        window.location.reload();
    });
  }

  return (

    <div className="container-fluid">
	  	<div className="row login-container">
	  		<div className="login-intro">
          <div className="row">
            <a href="index.html" className="me-auto">
              <img alt="Logo" src="/././img/output-onlinepngtools.png" height='104px' />
            </a>

	  			  <div>
              <h1>Welcome to Sweetdeli!</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Vulputate ut laoreet velit ma.</p>
	  			  </div>
          </div>
	  			<img alt="Neka slika, nemam pojma" src="https://placehold.co/600x400/EEE/31343C" />
	  		</div>
	  		<div className="login-form">
	  			<div>
	  				<h2>Welcome back!</h2>
	  				<h5 className="mb-4">Meet the good taste today</h5>
	  				<form  className={isLoading ? "loading" : ""} onSubmit={handleLogin} >
	  					<label>E-mail or phone number</label>
	  					<input type="text" name="username" value={form.username} onChange={handleChange}  required />
	  					<label>Password</label>
	  					<input type="password" name="password" value={form.password} onChange={handleChange} required />
	  					<p className="text-end mb-4 mt-1">
	  						<Link to="#">Forgot Password?</Link>
	  					</p>
                        { error ? <p className="alert alert-danger ">{error}</p> : ''}
	  					<button type="submit">Sign In</button>
	  					<p className="sign-up">Don’t have an account? <Link to="/register/">Sign Up</Link></p>
	  				</form>
	  			</div>
            </div>
	  	</div>
    </div>
  );
}

export default Login;