import React from 'react'; 
import './css/login.css';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {    
    constructor(...args) {
        // cargando las props y el state
        super(...args);
        this.handleChangePassword = this.handleChangePassword.bind(this);        
        this.handleChangeUsername = this.handleChangeUsername.bind(this);  
        this.validar = this.validar.bind(this);        
        this.state = {
            username: '',
            password: '',
            logged : 'false',
            url: ''                   
        }
    }  
    // actualizo usuario
    handleChangeUsername(e){
        var user = e.target.value;
        console.log("Cambio usuario: " + user);
        this.setState({username: user});
    }
    // actualizo password
    handleChangePassword(e){
        var pass = e.target.value;
        console.log("Cambio password: " + pass);
        this.setState({password: pass});
    }            
    // Validacion
    validar = (e) =>{
        e.preventDefault();
        console.log(this.state.username + " - " + this.state.password);
            // Validacion admin
        if((this.state.username == "admin") && (this.state.password == "1234")){
            swal({
                title:"¡Inicio de sesión exitoso!",
                text: "¡Bienvenido Admin!",
                icon: "success", 
                timer: "3000"
            });
            // Redirigiendo al menu                
            this.setState({url: "/Algebra_model_game/home"});
            this.setState({logged: 'true'});  
        }        
            // Validacion Omar
        else if((this.state.username == "Omar") && (this.state.password == "omar")){
            swal({
                title:"¡Inicio de sesión exitoso!",
                text: "¡Bienvenido Omar!",
                icon: "success", 
                timer: "3000"
            });
            // Redirigiendo al menu                
            this.setState({url: "/Algebra_model_game/home"});
            this.setState({logged: 'true'});  
        }
            // Validacion Brandon        
        else if((this.state.username == "Brandon") && (this.state.password == "brandon")){
            swal({
                title:"¡Inicio de sesión exitoso!",
                text: "¡Bienvenido Brandon!",
                icon: "success", 
                timer: "3000"
            });
            // Redirigiendo al menu                
            this.setState({url: "/Algebra_model_game/home"});
            this.setState({logged: 'true'});              
        }
            // Validacion Xenia        
        else if((this.state.username == "Xenia") && (this.state.password == "xenia")){
            swal({
                title:"¡Inicio de sesión exitoso!",
                text: "¡Bienvenida Xenia!",
                icon: "success", 
                timer: "3000"
            });
            // Redirigiendo al menu                
            this.setState({url: "/Algebra_model_game/home"});
            this.setState({logged: 'true'});              
        }        
        else{
            
            this.setState({url: "/Algebra_model_game/usuario_no_registrado"});
            this.setState({logged: 'true'});  
        }
    }
    
    render() {
        if(this.state.logged == 'true'){
            return (<Redirect to={this.state.url} />);
        }
        return(
            <form className="containerPrincipal">
                <h1 className="Titulo">Algebra Game</h1>
                    {/* <img className="imagen" src={math}/> */}
                    {/* <i class="bi bi-people-fill"></i>                     */}
                    <div className="form-group">
                        <br/>                          
                        <label className="label-form">Usuario</label>
                        <br/>
                        <div className="containerSecundario">
                        {/* <img className="mini" src={user}/> */}
                        <input value={this.state.username} onChange={this.handleChangeUsername} type="text" id="username" />
                        <br/>
                        <label className="label-form">Contraseña</label>
                        <br/>
                        <input value={this.state.password} onChange={this.handleChangePassword} type="password" id="password" />
                        {/* <img className="mini" src={candado}/><input type="password"  id="password" /> */}
                        {/* <i class="bi bi-lock-fill"></i>                         */}
                        <br/>
                        <button className="ghost" type="submit" onClick={this.validar}>Iniciar Sesión</button>
                    </div>
                </div>
            </form>
        );
    }
}
export default Login; 
