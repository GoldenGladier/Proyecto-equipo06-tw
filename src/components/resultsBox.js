import React from 'react';
import MathJax from './mathjax';
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
                    <h3>Dimensiones</h3>  
                    <h4>
                        <MathJax mathText={this.props.multiple1} />
                    </h4>
                    <h4>
                        <MathJax mathText={this.props.multiple2} />                        
                    </h4>
                </div>
                <div className="results-total-area-model">
                    <h3>Area total</h3>  
                    <h4><MathJax mathText={this.props.totalArea} /></h4>
                    {/* <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Result" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>                                 */}
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
                 <input onClick={handleButtonClic} type="submit" value="Revisar" class="btn btn-outline-dark"></input>                                                       
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

