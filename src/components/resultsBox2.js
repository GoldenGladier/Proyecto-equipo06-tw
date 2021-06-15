import React from 'react';
// import MathJax from './mathjax';
import PropTypes from 'prop-types';

class ResultsBox extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            input : '',
        }                  
    }
    handleChange = (e) =>{
        this.setState({input : e.target.value});
        console.log("Input: " + e.target.value);
    } 
    
    render () {
    const{ handleButtonClicType2 } = this.props;     
      return (
        <div class="row row-cols-1 board-results">
        {/* RESULTADOS - TABLA INTERACTIVA */}
            <div class="col dimentions">
                <div className="results-dimentions">
                    <h3>Dimensiones</h3>  
                    <h4 class="normal-color">
                      {this.props.binoms}                     
                    </h4>
                </div>
                <div className="results-total-area-model">
                    <h3>Area total</h3>  
                    <input value={this.state.input} onChange={this.handleChange} type="text" class="form-control area-total-input" placeholder="Ejemplo: x²+7x-5"></input>
                </div> 

                {/* ENTRADA INPUT */}                
                {/* <div className="results-total-area-input">
                    <div class="input-group">
                        <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                        <span class="input-group-text">x +</span>
                        <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                    </div>                                
                </div>    */}
                 {/* ========= ========= */}  
                 <input onClick={() => handleButtonClicType2(this.state.input)} type="submit" value="Revisar" class="btn btn-outline-dark"></input>                                                       
            </div>
        {/* ========= ========= ========= ========= ========= */}
        </div>
      );
    }
  }

ResultsBox.PropTypes = {
    handleButtonClicType2: PropTypes.func.isRequired,
}
  
export default ResultsBox;

