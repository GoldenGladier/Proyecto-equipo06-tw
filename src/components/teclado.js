import React from 'react'; 
import './css/teclado.css';

// import triste from './triste.png'; 
// import feliz from './Feliz.png';
import PropTypes from 'prop-types';

import swal from 'sweetalert';

class Teclado extends React.Component {
    constructor(...args) {
        super(...args);
        this.responder = this.responder.bind(this);        
        this.state = {
            result: ''                       
        }
      }  

    // const [result, setResult,respuesta]=useState(""); 
    // var e;
    // var res="x²+2x-8";
    // var condicion=true, image=document.getElementById('imagen');
    handleClick = (e) =>{
        var cadena = this.state.result + e.target.name;
        this.setState({result: cadena});
        // setResult(result.concat(e.target.name));
    }
    clear = () =>{
        this.setState({result: ''});
        // setResult(""); 
    }
    borrar = () =>{
        var cadena = this.state.result;
        var borrado = cadena.slice(0, -1);
        this.setState({result: borrado});
        // setResult(result.slice(0,-1));
    }
    responder = () =>{
        console.log("Respuesta: " + this.state.result);
        this.props.ocultarTeclado(this.state.result);    
        // document.getElementById('answer').value = document.getElementById('result').value;
    }
    // const responder2 = () =>{
    //     document.getElementById('answer2').value = document.getElementById('result').value;
    // }
    // revisar = () =>{
    //     if(document.getElementById('answer').value===res){
    //         swal({
    //             title:"¡Respuesta correcta!",
    //             text: "La respuesta es: "+res,
    //             icon: "success", 
    //             timer: "3000"
    //         });
    //     }
    //     else{
    //         swal({
    //             title:"¡Respuesta incorrecta!",
    //             text: "La respuesta es: "+res,
    //             icon: "error", 
    //             timer: "3000"
    //         });
    //     }
    // }
        
    render (){
        return(
           <div className={'keyboard-container ' + this.props.keyBoardView}>
                <form>
                    <input className="calcular" type="text" value={this.state.result} id="result"/>
                </form>
                <div className="teclado">
                    <button className="Iluminar" onClick={this.clear} id="clear">Limpiar</button>
                    <button className="Iluminar" onClick={this.borrar} id="borrar"><i class="bi bi-arrow-bar-left"></i></button>
                    <button className="x" name="x²" onClick={this.handleClick}>X²</button>
                    <button className="botones" name="7" onClick={this.handleClick}>7</button>
                    <button className="botones" name="8" onClick={this.handleClick}>8</button>
                    <button className="botones" name="9" onClick={this.handleClick}>9</button>
                    <button className="x" name="x" onClick={this.handleClick}>X</button>
                    <button className="botones" name="4" onClick={this.handleClick}>4</button>
                    <button className="botones" name="5" onClick={this.handleClick}>5</button>
                    <button className="botones" name="6" onClick={this.handleClick}>6</button>
                    <button className="suma" name="+" onClick={this.handleClick}>+</button>
                    <button className="botones" name="1" onClick={this.handleClick}>1</button>
                    <button className="botones" name="2" onClick={this.handleClick}>2</button>
                    <button className="botones" name="3" onClick={this.handleClick}>3</button>
                    <button className="resta" name="-" onClick={this.handleClick}>-</button>
                    <button className="botones" name="0" onClick={this.handleClick}>0</button>
                    <button className="submit" id="enviar" onClick={this.responder}><i class="bi bi-arrow-return-left"></i></button>
                    {/* <button className="submit" id="enviar2" >   (2)   </button> */}
                    {/* onClick={this.responder2} */}
                </div>                                
           </div>           
        ); 
    }
}
Teclado.PropTypes = {
    ocultarTeclado: PropTypes.func.isRequired,
}
export default Teclado;
