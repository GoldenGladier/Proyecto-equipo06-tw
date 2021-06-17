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
//Creando todos los estates que necesitaremos    
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
    // Solicitud al backend de la info del ejercicio
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
// Vamos a contruir el tablero y el cuadrado dependiendo del tipo de ejercicio  
// y vamos a pasarle el prop testView para ponerlo en modo "ver ejercicio" y no se pueda probar     
        let tablero = '';
        let resultados = '';
        const { 
            nombre, tipo, width, height, sizeh1, sizeh2_answer, sizew1, sizew2_answer, 
            square1, square2, square3, square4, expresion, respuesta, testView
        } = this.state;
        // ========= DIBUJANDO LA CAJA/TABLERO ========= 
        if(parseInt(this.state.tipo) == 1) {    //Ejercicio tipo 1
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
        else{ //Ejercicio tipo 2
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
                {/* MENU */}
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">

                        <h1 class="navbar-brand">{nombre}</h1>
                        <span class="navbar-text">
                            <Link to="/Algebra_model_game/home" class="btn btn-outline-light">Volver al inicio</Link>                            
                        </span>                        
                    </div>
                </nav>
                {/* Ejercicio */}
                <h1>Busca el producto parcial.</h1>

                <div class="row row-cols-2 content">
                    {/* Carga el tablero y caja de resultados que ya fue construido arriba con 
                        dependiendo del tipo de ejercicio */}                    
                    {tablero}
                    {resultados} 
                    
                </div>                
            </div>
        )
    }

}

export default Level;

