import React from 'react';
// import MathJax from './mathjax';
import PropTypes from 'prop-types';
// import debounce from 'lodash.debounce';

class TableBox extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            input1 : '',
            input2 : '',
        }        
    }
    handleChange1 = (e) =>{
        this.setState({ input1: e.target.value});
        // console.log("Input 1: " + e.target.value);
        this.props.handleInput1Change(e.target.value);        
    }
    handleChange2 = (e) =>{
        this.setState({ input2: e.target.value});
        // console.log("Input 1: " + e.target.value);
        this.props.handleInput2Change(e.target.value);        
    }   

    render () {
        const{ handleInput1Change } = this.props;     

        let lineHeight1 = '';
        let lineHeight2 = '';
        let boxHeight1 = '';
        let boxHeight2 = '';
        let lineWidth = '';
        // ========= DIBUJANDO LA CAJA/TABLERO ========= 
        if(parseInt(this.props.width) == 2) {   
            boxHeight1 = (
                <div class="col-10 board-column">     
                    { /* (  PARTE INFERIOR 1 DERECHA - TABLERO) */ }                   
                    <div className="col-12 board row">
                        <div class="border-solid col-7 rows-top">
                            <h4>{this.props.square2}</h4>
                        </div>
                        <div class="border-solid col-5 rows-top">
                            <h4>{this.props.square1}</h4>
                        </div>
                    </div>
                </div>  
            );
            boxHeight2 = (
                <div class="col-10 board-column">     
                    { /* (  PARTE INFERIOR 2 DERECHA - TABLERO) */ }                   
                    <div className="col-12 board row">
                        <div class="border-solid col-7 align-middle"></div>
                        <div class="border-solid col-5 align-middle"></div>
                    </div>
                </div>  
            );
            lineWidth = (
                <div class="col-10">
                { /* (  PARTE SUPERIOR DERECHA ) */ }
                    <div className="top-data-board">
                        {/* <h3>{this.props.binom1}</h3> */}
                        <div className="top-data-line row">
                            <div class="border-solid purple col-7"></div>
                            <div class="border-solid purple col-5"></div>
                        </div>
                        <div className="top-data row">
                            <div class="col col-7">{this.props.equation1}</div>
                            {/* <div class="col col-6"><MathJax mathText={this.props.equation2} /></div> */}
                            <div class="col col-5">
                                {/* EJERCICIO DE TIPO 1 */}
                                <input value={this.state.input1} type="number" class="form-control"
                                    onChange={this.handleChange1}/> 
                                
                                 {/* {this.handleChange1} */}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        
        // ========= ========= ========= ========= ========= 

        // ========= DIBUJANDO LAS MEDIDAS VETICALES ========= 
        if(parseInt(this.props.height) > 1) {
            lineHeight1 = (
                <div class="col-2 pad-mar-0">
                { /* (  PARTE INFERIOR IZQUIERA ) */ }
                        <div className="left-data-line row">
                            <div class="col col-1 border-solid tomato center-all">
                                
                            </div>
                            <div class="col col-11 center-all">
                            {this.props.sizeh1} 
                            </div>
                        </div>                        
                </div>
            );            
            lineHeight2 = (
                <div class="col-2 pad-mar-0">
                { /* (  PARTE INFERIOR IZQUIERA ) */ }
                        <div className="left-data-line row">
                            <div class="col col-1 border-solid tomato"></div>
                            <div class="col col-11 center-all">
                                <input type="number" class="form-control" 
                                    onChange={this.handleChange2}/> 
                                {/* <MathJax mathText={this.props.sizeh2} /> */}
                            </div>
                        </div>                        
                </div>
            );
            boxHeight2 = (
                <div class="col-10 board-column">     
                    { /* (  PARTE INFERIOR 2 DERECHA - TABLERO) */ }                   
                    <div className="col-12 board row">
                        <div class="border-solid col-7 align-middle rows-bottom">
                            <h4>{this.props.square3}</h4>
                        </div>
                        <div class="border-solid col-5 align-middle rows-bottom">
                            <h4>{this.props.square4}</h4>                            
                        </div>
                    </div>
                </div>  
            );
        }
        // ========= ========= ========= ========= ========= 


      return (

                <div class="row row-cols-2">
                    {/* ========= ========= TABLERO ========= ========= */}
                    <div class="col-2">{ /* (PARTE SUPERIOR IZQUIERDA - ESPACIO EN BLANCO) */ }</div>
                                        
                    {lineWidth} 
                    { /* (  PARTE SUPERIOR DERECHA - TABLERO) */ }   
                    {lineHeight1}                
                    {boxHeight1} 

                    {/* (  PARTE INFERIOR DERECHA - TABLERO)     */}                    
                    {lineHeight2} 
                    {boxHeight2} 
                    {/* ========= ========= ========= ========= ========= */}
                </div>

      );
    }
  }
  
TableBox.PropTypes = {
    handleInput1Change: PropTypes.func.isRequired,
    handleInput2Change: PropTypes.func.isRequired
}

export default TableBox;

