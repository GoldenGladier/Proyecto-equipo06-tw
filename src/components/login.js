import React from 'react'; 
// import React, {Component} from 'react'; 
import '../components/css/login.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import swal from 'sweetalert';
// import math from '../components/css/mathWhite.png';
// import user from '../components/css/userW.png'; 
// import candado from '../components/css/CandadoW.png';

// import { withRouter } from 'react-router-dom';

class Login extends React.Component {    
    constructor(...args) {
        super(...args);
        this.responder = this.responder.bind(this);        
        this.state = {
            username: '',
            password: ''                   
        }
    }  

    handleChangeUsername(e){
        console.log("Cambio usuario: " + e.target.value);
    }
    // handleChangeUsername(e){
    //     console.log("Cambio usuario: " + e.target.value);
    // }            

    validar = () =>{
        if(this.state.username==="BJBM" && this.state.password==="12345"){
            swal({
                title:"¡Inicio de sesión exitoso!",
                text: "¡Bienvenido Brandon!",
                icon: "success", 
                timer: "3000"
            });
            window.location.href="home";
        }
        // if(document.getElementById('username').value==="XenMC" && document.getElementById('password').value==="54321"){
        //     swal({
        //         title:"¡Inicio de sesión exitoso!",
        //         text: "¡Bienvenida Xenia!",
        //         icon: "success", 
        //         timer: "3000"
        //     });
        //     window.location.href="/Algebra_model_game/home";
        // }
        if(this.state.username.value==="OmarAA" && this.state.password==="pass"){
            swal({
                title:"¡Inicio de sesión exitoso!",
                text: "¡Bienvenido Omar!",
                icon: "success", 
                timer: "3000"
            });
            window.location.href="/Algebra_model_game/home";
        }
        else{
            swal({
                title:"¡Usted no esta registrado!",
                text: "¡Lo sentimos!",
                icon: "error", 
                timer: "3000"
            });
            // this.props.history.push('/fail');            
        }
    }
    
    render() {
        return(
            <div className="containerPrincipal">
                <h1 className="Titulo">Algebra Game</h1>
                <div className="containerSecundario">
                    {/* <img className="imagen" src={math}/> */}
                    <div className="form-group">
                        <label>Usuario</label>
                        <br/>
                        <img className="mini" src={user}/>
                        <input value={this.state.username} onChange={handleChangeUsername} type="text" id="username" />
                        <br/>
                        <label>Contraseña</label>
                        <br/>
                        {/* <img className="mini" src={candado}/><input type="password"  id="password" /> */}
                        <br/>
                        <button className="ghost" onClick={validar}>Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login; 
