import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Style.css';



class Login extends Component{

    render(){
        return(
			
            <div className="wrap-login100 content fondo"> 
                <form>
                    <span className="login100-form-title">
                        Iniciar Sesion
                    </span>
                    <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                    <input id="email" type="email" className="input100" name="email"  required="" autofocus="" placeholder="Correo"/>
                    <span className="focus-input100"></span>
						<span className="symbol-input100">
						<FontAwesomeIcon icon={faEnvelope} />
						</span>
                    </div>
                    <div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input id="password" type="password" className="input100" name="password" required placeholder="Clave"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
						<FontAwesomeIcon icon={faLock} />
						</span>
					</div>
                    <div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Ingresar
						</button>
					</div>
					<div className="text-center p-t-136">
					<Link to="/register">Registrate</Link>
						
					</div>
                </form>

            </div>
        )
    }
     
}


export default Login;