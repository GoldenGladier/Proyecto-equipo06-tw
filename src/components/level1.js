import React from "react";
import './css/level.css';
// IMPORTANDO COMPONENTES
import TableBox from './tableBox';
import ResultBox from './resultsBox';
import swal from 'sweetalert';
// PARA TRAER LOS DATOS Y PROCESARLOS
import axios from "axios";
// import debounce from 'lodash.debounce';

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
        binom2 : "()"
        // drags: [],
        // targets: []
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
                swal("¡Buen trabajo!", "Respondiste esta pregunta correctamente.", "success");
                console.log("Revisando: Bien");
            }
            else{
                swal("¡Esfuerzate más!", "Tu respuesta esta equivocada.", "error");
                console.log("Revisando: Mal");
            }
        }
    }

    render() {

        const { 
            nombre, tipo, width, height, sizeh1, sizeh2_answer, sizew1, sizew2_answer, 
            square1, square2, square3, square4, expresion, respuesta
        } = this.state;
        return (
            <div className="Level" >
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a class="navbar-brand" href="#">Level 1</a>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link" href="#">Challenge 1 of 6</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">
                            Score: 
                                <i class="bi bi-star-fill"></i> <i class="bi bi-star"></i> <i class="bi bi-star"></i> <i class="bi bi-star"></i>  
                            </a>
                            </li>
                        </ul>
                        <button class="btn btn-outline-light" type="submit">Start Over</button>      
                        </div>
                    </div>
                </nav>
                <h1>Busca el producto parcial.</h1>
                <h2>{nombre}</h2>
                {/* <h2>Width: {width}, Height: {height}</h2>                 */}
                {/* <div className="content center-all"> */}

                {/* <div className="board-content container"> */}
                <div class="row row-cols-2 content">
                    <TableBox width={width} height={height} sizeh1={sizeh1} sizeh2={sizeh2_answer} 
                        equation1={sizew1} equation2={sizew2_answer} square1={this.state.square1} square2={square2}
                        square3={this.state.square3} square4={square4} binom1={this.state.binom1}
                        handleInput1Change={this.handleInput1Change} handleInput2Change={this.handleInput2Change}
                    ></TableBox>          
                    <ResultBox multiple1={this.state.binom1} multiple2={this.state.binom2}
                        totalArea={expresion} handleButtonClic={this.handleButtonClic}></ResultBox>
                </div>                
            </div>
        )
    }

}

export default Level;

