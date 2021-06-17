import React from "react";
import './css/level.css';
//PARA LOS REPRODUCTORES DE MULTIMEDIA
import ReactPlayer from "react-player";// REPRODUCTOR DE VIDEO
// IMPORTANDO COMPONENTES
import { Link } from "react-router-dom";
import TableBox1 from './tableBox';
import TableBox2 from './tableBox2';
import ResultBox1 from './resultsBox';
import ResultBox2 from './resultsBox2';
import swal from 'sweetalert';
import {Howl, Howler} from 'howler'; //PARA REPRODUCIR LOS EFECTOS DE SONIDO
// PARA TRAER LOS DATOS Y PROCESARLOS
import axios from "axios";
import { atomicMassDependencies } from "mathjs";

const soundeffects = ["TaDa.mp3","Sad.mp3","StoreDoor.mp3"]; 

class Level extends React.Component {
    state = { //Creando todos los estates que necesitaremos
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
        multimedio: "",
        src: "",
        expresion: "",        
        respuesta: "",        

        binom1 : "()",
        binom2 : "()",
        testView : "",
        powerClock : "encendido",
        teclado : 'disable-view', //
        input : ''       
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
    

    soundPlay = (src) => { //Función para reproducir efectos de sonido
        const sound = new Howl({
            src,
            html5: true
        })
        sound.play();
    }
    
    // Detecta los cambios en el input 1 ejercicio tipo 1
    handleInput1Change = (input1) => {
        console.log("PADRE 1: " + input1);
        if(input1 != ''){
            if(isNaN(this.state.sizeh1)){ //Revisa si es numero
                var numero = input1 + this.state.sizeh1;
                this.setState({square1:numero});
                // this.setState({square1:numero});
            }
            else{ //Si es letra (x)
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
            //Creacion de los binomios
            if(n1 >= 0){
                binom = "(" + this.state.sizew1 + "+" + input1 + ")";
            } 
            else{
                binom = "(" + this.state.sizew1 + input1 + ")";
            }           
            this.setState({binom1:binom});            
        }
        else{
            // Vuelve al estado vacio
            this.setState({binom1:"()"});             
            this.setState({square1:'?'});   
        }
    }
    // Detecta los cambios en el input 2 ejercicio tipo 2
    handleInput2Change = (input2) => {
        console.log("PADRE 2: " + input2);
        if(input2 != ''){
            if(isNaN(this.state.sizew1)){ //Revisa si es numero
                var numero = input2 + this.state.sizew1;
                this.setState({square3:numero});
                console.log("Incognita");
            }
            else{ //Si es letra (x)
                var n1 = parseInt(input2);
                var n2 = parseInt(this.state.sizew1);
                var numero = n1 * n2;
                this.setState({square3:numero});                
            }
            console.log(this.state.square3);
            // var binom = "(" + this.state.sizeh1 + "+" + input2 + ")";
            var n1 = parseInt(input2);
            var binom;            
            //Creacion de los binomios
            if(n1 >= 0){
                binom = "(" + this.state.sizeh1 + "+" + input2 + ")";
            } 
            else{
                binom = "(" + this.state.sizeh1 + input2 + ")";
            }           
            this.setState({binom2:binom});              
        }
        else{
            // Vuelve al estado vacio
            this.setState({binom2:"()"});             
            this.setState({square3:'?'});   
        }              
    }    

    handleButtonClic = () => { //Cuando el boton revisar ejercicio 1 es precionado
        if((this.state.binom1 != '()') && (this.state.binom2 != '()')){ //Si ya ingreso datos
            var respuestaUsuario = this.state.binom1 + this.state.binom2; //Contruye la respuesta
            if(this.state.respuesta == respuestaUsuario){ // Revisa si la respuesta es correcta
                this.setState({powerClock: "apagado"}); //Detiene el temporizador
                swal("¡Buen trabajo!", "Respondiste esta pregunta correctamente.", "success"); // Notifica que se contesto bien
                console.log("Revisando: Bien");
                this.soundPlay(soundeffects[0]); // Efecto de sonido
                
            }
            else{
                swal("¡Esfuerzate más!", "Tu respuesta esta equivocada.", "error"); // Notifica que se contesto mal
                console.log("Revisando: Mal");
                this.soundPlay(soundeffects[1]);// Efecto de sonido
            }
        }
        else{ // Notifica que no ingreso datos
            swal("¡Faltan datos!", "Debes llenar ambos campos para completar los dos binomios.", "info");
            this.soundPlay(soundeffects[2]);// Efecto de sonido
        }
    }
    handleButtonClicType2 = (respuesta_tipo2) => {      //Cuando el boton revisar ejercicio tipo 2 es precionado
        console.log(respuesta_tipo2); 
        if((respuesta_tipo2 != '')){ //Si ya ingreso datos
            if(respuesta_tipo2 == this.state.expresion){ // Revisa si la respuesta es correcta
                this.setState({powerClock: "apagado"});//Detiene el temporizador
                swal("¡Buen trabajo!", "Respondiste esta pregunta correctamente.", "success");// Notifica que se contesto bien
                console.log("Revisando: Bien");
                this.soundPlay(soundeffects[0]);// Efecto de sonido
            }
            else{
                swal("¡Esfuerzate más!", "Tu respuesta esta equivocada.", "error");// Notifica que se contesto mal
                console.log("Revisando: Mal");
                this.soundPlay(soundeffects[1]);// Efecto de sonido
            }
        }
        else{// Notifica que no ingreso datos
            swal("¡Ingresa una respuesta!", "El campo de respuesta esta vacio.", "info");
            this.soundPlay(soundeffects[2]);// Efecto de sonido
        }
    }
    mostrarTeclado = () => { // Muestra el teclado ejercicio tipo 2
        console.log("Mostrar teclado");
        // this.state.teclado = '';
        this.setState({teclado: ''});
        console.log("Mostrar teclado" + this.state.teclado);
    }
    ocultarTeclado = () => { // Oculta el teclado ejercicio tipo 2
        this.setState({teclado: 'disable-view'});
        console.log("Ocultar teclado" + this.state.teclado);
    }    
    
    render() {
        let tablero = ''; // Para contruir el tablero
        let resultados = ''; // para contruir resultados
        let multimedia = ''; //Para controlar el multimedio
        const { // Constantes que vamos a usar (al final no utilizamos todas)
            nombre, tipo, width, height, sizeh1, sizeh2_answer, sizew1, sizew2_answer, 
            square1, square2, square3, square4, expresion, respuesta, multimedio, src
        } = this.state;
        // ========= DIBUJANDO LA CAJA/TABLERO ========= 
        if(parseInt(this.state.tipo) == 1) {   // Cambbia los componentes depentiendo del tipo de ejercicio
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
        }
        else{ //Cambia los componentes para el ejercicio tipo 2
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
                input={this.state.input} handleButtonClicType2={this.handleButtonClicType2}
                powerClock={this.state.powerClock} keyBoardView={this.state.teclado}
                mostrarTeclado={this.mostrarTeclado} ocultarTeclado={this.ocultarTeclado}
                ></ResultBox2>
            );  
        }

        {/*SE DEFINE EL TIPO DE MULTIMEDIO A MOSTRAR */}
        if(this.state.multimedio == "video"){
            multimedia = (
                <ReactPlayer playing url = {src} width = "50%" heigth = "50%" controls/>
            );
        }else if(this.state.multimedio == "audio"){
            multimedia = (
                <audio controls="controls">
                <source src={src} type="audio/mpeg" />
                Tu navegador no soporta el elemento de audio.
                </audio>
            );
        }else{
            multimedia = (
                <img src={src} />
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
                <hr />
                {/*MULTIMEDIA*/}
                <div className="multimedia" >
                    {multimedia}
                </div>           
            </div>
        )
    }

}

export default Level;
