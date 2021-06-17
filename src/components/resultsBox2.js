import React from 'react';
import Timer from './timer';
import Teclado from './teclado';

import PropTypes from 'prop-types';

class ResultsBox extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            input : '',
        }                  
    }

    ocultarTeclado = (respuestaUsuario) => {
        console.log("Ocultar teclado");
        this.setState({input: respuestaUsuario});
        this.props.ocultarTeclado(respuestaUsuario);
        // console.log("Ocultar teclado" + this.state.teclado);
    }       
    render () {
    const{ handleButtonClicType2, mostrarTeclado } = this.props;     
      return (
        <div class="row row-cols-1 board-results">
        {/* RESULTADOS - TABLA INTERACTIVA */}
            <div class="col dimentions results-two">
                <div className="results-dimentions ">
                    {/* Escribe las dimensiones del problema */}
                    <h3>Dimensiones</h3>  
                    <h4 class="normal-color">
                      {this.props.binoms}                     
                    </h4>
                </div>
                <div className="results-total-area-model results-two">
                    {/* Crea el input para la respuesta */}
                    <h3>Area total</h3>  
                    <input value={this.state.input} onClick={mostrarTeclado}  type="text" class={"form-control area-total-input " + this.props.testView} placeholder="Ejemplo: x²+7x-5"></input>
                </div> 
                 {/* Teclado para escribir en el input */}
                 <Teclado keyBoardView={this.props.keyBoardView} ocultarTeclado={this.ocultarTeclado}></Teclado>
                 {/* Boton revisar pregunta */}
                 <input onClick={() => handleButtonClicType2(this.state.input)} type="submit" value="Revisar" class={'btn btn-outline-dark ' + this.props.testView}></input>                                                       
                 {/* Temporizador */}
                 <Timer testView={this.props.testView} power={this.props.powerClock}></Timer>
            </div>
        {/* ========= ========= ========= ========= ========= */}
        </div>
      );
    }
  }

ResultsBox.PropTypes = {
    mostrarTeclado: PropTypes.func.isRequired,
    ocultarTeclado: PropTypes.func.isRequired,
    handleButtonClicType2: PropTypes.func.isRequired,
}
  
export default ResultsBox;

