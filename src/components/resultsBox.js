import React from 'react';
import Timer from './timer';
import PropTypes from 'prop-types';

class ResultsBox extends React.Component {    
    constructor(props) {
        super(props);     
    }    

    render () {
    const{ handleButtonClic } = this.props;     
      return (
        <div class="row row-cols-1 board-results">
        {/* RESULTADOS - TABLA INTERACTIVA */}
            <div class="col dimentions">
                <div className="results-dimentions">
                    {/* Escribe las respuestas del usuario */}
                    <h3>Dimensiones</h3>   
                    <h4>
                        {this.props.multiple1} 
                    </h4>
                    <h4>
                        {this.props.multiple2}                      
                    </h4>
                </div>
                <div className="results-total-area-model">
                    {/* Escribe el area total */}
                    <h3>Area total</h3>  
                    <h4>{this.props.totalArea}</h4>
                </div> 
                {/* Llama a la funcion que revisara la respuesta */}
                 <input onClick={handleButtonClic} type="submit" value="Revisar" class={'btn btn-outline-dark ' + this.props.testView}></input>                                                       
                {/* Temporizador */}
                <Timer testView={this.props.testView} power={this.props.powerClock}></Timer>
            </div>
        {/* ========= ========= ========= ========= ========= */}
        </div>
      );
    }
  }

ResultsBox.PropTypes = {
    handleButtonClic: PropTypes.func.isRequired,
}
  
export default ResultsBox;

