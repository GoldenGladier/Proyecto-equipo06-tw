import React from "react";
import './css/level.css';
// IMPORTANDO COMPONENTES
import { Link } from "react-router-dom";
import TableBox1 from './tableBox';
import TableBox2 from './tableBox2';
import ResultBox1 from './resultsBox';
import ResultBox2 from './resultsBox2';
import swal from 'sweetalert';
// PARA TRAER LOS DATOS Y PROCESARLOS
import axios from "axios";

class Level extends React.Component {
    state = {
        id: "",
        nombre: "",
        tipo: "",
        width: "",
        height: "",
        sizeh1: "",
        sizeh2_answer: "",
        sizew1: "",
        sizew2_answer: "",
        square1: "",
        square2: "",
        square3: "",
        square4: "",
        expresion: "",        
        respuesta: "",        

        binom1 : "()",
        binom2 : "()",
        testView : "disable-view"        
    }

    componentDidMount() {
        const qId = new URLSearchParams(window.location.search).get("id");
        if (qId) {
            axios.get("/Algebra_model_game/Preguntas?id="+qId).then(response => {
                const question = response.data[0];
                this.setState({ ...question });
            }).catch(error => {
                console.info(error);
                alert("Ha ocurrido un error");
            });
        }
    }

    render() {
        let tablero = '';
        let resultados = '';
        const { 
            nombre, tipo, width, height, sizeh1, sizeh2_answer, sizew1, sizew2_answer, 
            square1, square2, square3, square4, expresion, respuesta, testView
        } = this.state;
        // ========= DIBUJANDO LA CAJA/TABLERO ========= 
        if(parseInt(this.state.tipo) == 1) {   
            console.log(this.state.tipo + " - Cargue el 1");
            resultados = (
                <ResultBox1 multiple1={this.state.binom1} multiple2={this.state.binom2}
                totalArea={expresion} handleButtonClic={this.handleButtonClic}
                testView={testView}></ResultBox1>
            );            
            tablero = (
                <TableBox1 width={width} height={height} sizeh1={sizeh1} sizeh2={sizeh2_answer} 
                    equation1={sizew1} equation2={sizew2_answer} square1={this.state.square1} square2={square2}
                    square3={this.state.square3} square4={square4} binom1={this.state.binom1}
                    handleInput1Change={this.handleInput1Change} handleInput2Change={this.handleInput2Change}
                    testView={testView}
                ></TableBox1>  
            );
        }
        else{
            console.log(this.state.tipo + " - Cargue el 2" + sizeh2_answer);
            tablero = (
                <TableBox2 width={width} height={height} sizeh1={sizeh1} sizeh2={this.state.sizeh2_answer} 
                    equation1={sizew1} equation2={sizew2_answer} square1={this.state.square1} square2={square2}
                    square3={this.state.square3} square4={square4} 
                    handleInput1Change={this.handleInput1Change} handleInput2Change={this.handleInput2Change}
                    testView={testView}
                ></TableBox2>  
            );
            resultados = (
                <ResultBox2 binoms={respuesta} testView={testView}
                totalArea={expresion} handleButtonClicType2={this.handleButtonClicType2}></ResultBox2>
            );  
        }
        
        return (
            <div className="Level" >
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button> */}
                        {/* <div class="collapse navbar-collapse" id="navbarTogglerDemo01"> */}
                            <h1 class="navbar-brand">{nombre}</h1>
                            {/* <Link to="/Algebra_model_game/" class="btn btn-outline-light">Volver al inicio</Link>                             */}
                            {/* <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        {/* </div> */}
                        <span class="navbar-text">
                            <Link to="/Algebra_model_game/" class="btn btn-outline-light">Volver al inicio</Link>                            
                        </span>                        
                    </div>
                </nav>
                <h1>Busca el producto parcial.</h1>

                <div class="row row-cols-2 content">
                    {tablero}
                    {resultados} 
                    
                </div>                
            </div>
        )
    }

}

export default Level;

