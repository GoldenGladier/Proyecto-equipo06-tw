import React from "react";
import { Button, Container } from "react-bootstrap";
import axios from "axios";
// import useState from 'react';

class Edit extends React.Component {

    constructor(props){
        super(props);
        this.state = {
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
            imagen:"",
            expresion: "",        
            respuesta: "",
        };
    }
    

    componentDidMount() {
        const qId = new URLSearchParams(window.location.search).get("id");
        if (qId) {
            axios.get("/Algebra_model_game/Preguntas?id="+qId).then(response => {
                const question = response.data[0];
                this.setState({ ...question });
                console.log(response);
            }).catch(error => {
                console.info(error);
                alert("Ha ocurrido un error");
            });
        }
    }

    render() {
        
        console.log(this.state);
        return (
            
            <Container className="MarginContainer">
                <h1>Modificar ejercicio</h1>

                <form method="POST" action={"updateQuestion?idList=" + this.state.id} enctype = "multipart/form-data">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Nombre </span>
                        <input type="text" class="form-control" defaultValue={this.state.nombre} placeholder="Area de un cuadrado" aria-describedby="basic-addon1" name="ejer" required />
                    </div>
                    <hr />
                    {/*<!--LEVEL OPTION--> */}
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">{`Tipo actual: Completar ${this.state.tipo}`}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span class="input-group-text" id="basic-addon1">Tipo nuevo: Completar </span>
                        <select name="tipo" class="form-control" aria-describedby="basic-addon1" required>
                            <option value="1">Dimensiones</option>
                            <option value="2">Area total</option>
                        </select>
                    </div>
                    <hr />
                    {/*<!--AREA VALUES OPTIONS-->*/}
                    <h4>Valores para el área total</h4><br />
                    <div class="input-group mb-3">
                        <img src="plantilla.png" /><br /><br />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Valor h2</span>
                        <input type="number" class="form-control" id="sizeh2" name="h2" defaultValue={this.state.sizeh2_answer} placeholder="23" aria-describedby="basic-addon1" required />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Valor w2</span>
                        <input type="number" class="form-control" id="sizew2" name="w2" defaultValue={this.state.sizew2_answer} placeholder="9" aria-describedby="basic-addon1" required />
                    </div>    
                    <div class="input-group mb-3">    
                        <span class="input-group-text" id="basic-addon1">Valor Area 1</span>
                        <input type="text" class="form-control" name="area1" defaultValue={this.state.square1} placeholder="-8x" pattern="[+-]?[0-9]*x" aria-describedby="basic-addon1" required />
                    </div>
                    <div class="input-group mb-3">    
                        <span class="input-group-text" id="basic-addon1">Valor Area 3</span>
                        <input type="text" class="form-control" name="area3" defaultValue={this.state.square3} placeholder="5x" pattern="[+-]?[0-9]*x" aria-describedby="basic-addon1" required />
                    </div>
                    <div class="input-group mb-3">    
                        <span class="input-group-text" id="basic-addon1">Valor Area 4</span>
                        <input type="number" class="form-control" name="area4" defaultValue={this.state.square4} placeholder="62" aria-describedby="basic-addon1" required />
                    </div>
                    <hr />
                    {/*DIMENSION EXPRETIONS*/}
                    
                    <div class="input-group mb-3">
                    <p class="input-group-text">Dimensiones actuales</p><br />
                        <span class="input-group-text" id="basic-addon1">{`${this.state.respuesta}`}</span>
                    </div>
                    <h4>Dimensiones nuevas</h4><br />
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">x + </span>
                        <input type="number" class="form-control" defaultValue={this.state.sizeh2_answer} placeholder="-6" aria-describedby="basic-addon1" name="dim1" required />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">x + </span>
                        <input type="number" class="form-control" defaultValue={this.state.sizew2_answer} placeholder="7" aria-describedby="basic-addon1" name="dim2" required />                       
                    </div><br />
                    {/*AREA EXPRETION*/}
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Expresion de Area total: </span>
                        <input type="text" class="form-control" defaultValue={this.state.expresion} placeholder="x^2-13x+42" pattern="x\^2[+-][0-9]*x[+-][0-9]+" minLength="5" aria-describedby="basic-addon1" name="expresion" required />                       
                    </div>
                    <hr />

                    <div class="input-group mb-3">
                        <span class="input-group-text">Imagen actual: <a href={this.state.imagen} > {this.state.imagen}</a> </span>
                        <span class="input-group-text" id="basic-addon1">Imagen nueva: </span>
                        <input type="file" class="form-control" id="file"  name = "file_image" required />
                    </div>
             
                    <button type="submit" class="btn btn-primary">Actualizar ejercicio</button>
                    <br /><br />
                </form>                 

            </Container>
        );
    }
}

export default Edit;