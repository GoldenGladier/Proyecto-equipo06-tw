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
        testView : "",
        powerClock : "encendido"        
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

    handleInput1Change = (input1) => {
        console.log("PADRE 1: " + input1);
        if(input1 != ''){
            if(isNaN(this.state.sizeh1)){
                var numero = input1 + this.state.sizeh1;
                this.setState({square1:numero});
                // this.setState({square1:numero});
            }
            else{
                // console.log(this.state.sizeh1 + '*' + input1);
                var n1 = parseInt(input1);
                var n2 = parseInt(this.state.sizeh1);
                var numero = n1 * n2;
                this.setState({square1:numero});
                // this.setState({square1:numero});                
            }
            console.log(this.state.square1);
            var n1 = parseInt(input1);
            var binom;            
            if(n1 >= 0){
                binom = "(" + this.state.sizew1 + "+" + input1 + ")";
            } 
            else{
                binom = "(" + this.state.sizew1 + input1 + ")";
            }           
            this.setState({binom1:binom});            
        }
        else{
            this.setState({binom1:"()"});             
            this.setState({square1:'?'});   
        }
    }
    handleInput2Change = (input2) => {
        console.log("PADRE 2: " + input2);
        if(input2 != ''){
            if(isNaN(this.state.sizew1)){
                var numero = input2 + this.state.sizew1;
                this.setState({square3:numero});
                console.log("Incognita");
            }
            else{
                var n1 = parseInt(input2);
                var n2 = parseInt(this.state.sizew1);
                var numero = n1 * n2;
                this.setState({square3:numero});                
            }
            console.log(this.state.square3);
            // var binom = "(" + this.state.sizeh1 + "+" + input2 + ")";
            var n1 = parseInt(input2);
            var binom;            
            if(n1 >= 0){
                binom = "(" + this.state.sizeh1 + "+" + input2 + ")";
            } 
            else{
                binom = "(" + this.state.sizeh1 + input2 + ")";
            }           
            this.setState({binom2:binom});              
        }
        else{
            this.setState({binom2:"()"});             
            this.setState({square3:'?'});   
        }              
    }    

    handleButtonClic = () => {
        if((this.state.binom1 != '()') && (this.state.binom2 != '()')){
            var respuestaUsuario = this.state.binom1 + this.state.binom2;
            if(this.state.respuesta == respuestaUsuario){
                this.setState({powerClock: "apagado"});
                swal("¡Buen trabajo!", "Respondiste esta pregunta correctamente.", "success");
                console.log("Revisando: Bien");
            }
            else{
                swal("¡Esfuerzate más!", "Tu respuesta esta equivocada.", "error");
                console.log("Revisando: Mal");
            }
        }
        else{
            swal("¡Faltan datos!", "Debes llenar ambos campos para completar los dos binomios.", "info");
        }
    }
    handleButtonClicType2 = (respuesta_tipo2) => {       
        console.log(respuesta_tipo2); 
        if((respuesta_tipo2 != '')){
            if(respuesta_tipo2 == this.state.expresion){
                this.setState({powerClock: "apagado"});
                swal("¡Buen trabajo!", "Respondiste esta pregunta correctamente.", "success");
                console.log("Revisando: Bien");
            }
            else{
                swal("¡Esfuerzate más!", "Tu respuesta esta equivocada.", "error");
                console.log("Revisando: Mal");
            }
        }
        else{
            swal("¡Ingresa una respuesta!", "El campo de respuesta esta vacio.", "info");
        }
    }
    render() {
        let tablero = '';
        let resultados = '';
        const { 
            nombre, tipo, width, height, sizeh1, sizeh2_answer, sizew1, sizew2_answer, 
            square1, square2, square3, square4, expresion, respuesta
        } = this.state;
        // ========= DIBUJANDO LA CAJA/TABLERO ========= 
        if(parseInt(this.state.tipo) == 1) {   
            console.log(this.state.tipo + " - Cargue el 1");
            resultados = (
                <ResultBox1 multiple1={this.state.binom1} multiple2={this.state.binom2}
                totalArea={expresion} handleButtonClic={this.handleButtonClic}
                testView={this.state.testView} powerClock={this.state.powerClock}></ResultBox1>
            );            
            tablero = (
                <TableBox1 width={width} height={height} sizeh1={sizeh1} sizeh2={sizeh2_answer} 
                    equation1={sizew1} equation2={sizew2_answer} square1={this.state.square1} square2={square2}
                    square3={this.state.square3} square4={square4} binom1={this.state.binom1}
                    handleInput1Change={this.handleInput1Change} handleInput2Change={this.handleInput2Change}
                    testView={this.state.testView}
                ></TableBox1>  
            );

            // tablero = (<h1>HolaTablero1</h1>);
            // resultados = (<h1>Hola1</h1>);
        }
        else{
            console.log(this.state.tipo + " - Cargue el 2" + sizeh2_answer);
            tablero = (
                <TableBox2 width={width} height={height} sizeh1={sizeh1} sizeh2={this.state.sizeh2_answer} 
                    equation1={sizew1} equation2={sizew2_answer} square1={this.state.square1} square2={square2}
                    square3={this.state.square3} square4={square4} 
                    handleInput1Change={this.handleInput1Change} handleInput2Change={this.handleInput2Change}
                    testView={this.state.testView}
                ></TableBox2>  
            );
            resultados = (
                <ResultBox2 binoms={respuesta} testView={this.state.testView}
                totalArea={expresion} handleButtonClicType2={this.handleButtonClicType2}
                powerClock={this.state.powerClock}></ResultBox2>
            );  
            // resultados = (<h1>Hola2</h1>)
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

