import React, {Component} from 'react'; 
// import triste from '../css/triste.png';


class Regde extends Component{
    constructor(...args) {
        super(...args);
        this.Regresar = this.Regresar.bind(this);        
        this.state = {
            logged : 'false',
            url: ''                   
        }
    }  

    Regresar=()=>{
        window.location.href='./';
        this.setState({url: "/Algebra_model_game/"});
        this.setState({logged: 'true'});          
    }
    render(){
        if(this.state.logged == 'true'){
            return (<Redirect to={this.state.url} />);
        }
        return(
            
            <div className="usuario-no-registrado">
                <i class="bi bi-person-x-fill"></i>
                {/* <img className="imagen" src={triste}/> */}
                <h1>¡Lo sentimos! Usted no está registrado en la aplicación web</h1>               
                <br/>
                <button className="regreso" onClick={()=>this.Regresar()}>Regresar al menú principal</button>
            </div>
        ); 
    }
}

export default Regde;