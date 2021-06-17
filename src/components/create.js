import React from "react";
import { Button, Container } from "react-bootstrap";
import axios from "axios";

class Create extends React.Component {

    render() {
        return (
            <Container className="MarginContainer">
                <h1>Crear un nuevo ejercicio</h1>

                <form method="POST" action="createQuestion" enctype = "multipart/form-data">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Nombre </span>
                        <input type="text" class="form-control" placeholder="Area de un cuadrado" aria-describedby="basic-addon1" name="ejer" required />
                    </div>
                    <hr />
                    {/*<!--LEVEL OPTION--> */}
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Tipo </span>
                        <select name="tipo" class="form-control" aria-describedby="basic-addon1" required>
                            <option value="1">Completar dimensiones</option>
                            <option value="2">Completar Area total</option>
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
                        <input type="number" class="form-control" id="sizeh2" name="h2" placeholder="23" aria-describedby="basic-addon1" required />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Valor w2</span>
                        <input type="number" class="form-control" id="sizew2" name="w2" placeholder="9" aria-describedby="basic-addon1" required />
                    </div>    
                    <div class="input-group mb-3">    
                        <span class="input-group-text" id="basic-addon1">Valor Area 1</span>
                        <input type="text" class="form-control" name="area1" placeholder="-8x" pattern="[+-]?[0-9]*x" ria-describedby="basic-addon1" required />
                    </div>
                    <div class="input-group mb-3">    
                        <span class="input-group-text" id="basic-addon1">Valor Area 3</span>
                        <input type="text" class="form-control" name="area3" placeholder="5x" pattern="[+-]?[0-9]*x" aria-describedby="basic-addon1" required />
                    </div>
                    <div class="input-group mb-3">    
                        <span class="input-group-text" id="basic-addon1">Valor Area 4</span>
                        <input type="number" class="form-control" name="area4" placeholder="62" aria-describedby="basic-addon1" required />
                    </div>
                    <hr />
                    {/*DIMENSION EXPRESSIONS*/}
                    <h4>Dimensiones</h4><br />
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">x + </span>
                        <input type="number" class="form-control" placeholder="-6" aria-describedby="basic-addon1" name="dim1" required />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">x + </span>
                        <input type="number" class="form-control" placeholder="7" aria-describedby="basic-addon1" name="dim2" required />                       
                    </div><br />
                    {/*AREA EXPRESSION*/}
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Expresion de Area total </span>
                        <input type="text" class="form-control" placeholder="x^2-13x+42" pattern="x\^2[+-][0-9]*x[+-][0-9]+" minLength="5" aria-describedby="basic-addon1" name="expresion" required />                       
                    </div>
                    <hr />
                    {/*MULTIMEDIA*/}
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Tipo de multimedio </span>
                        <select name="tipo_multimedio" class="form-control" aria-describedby="basic-addon1" required>
                            <option value="audio">Audio</option>
                            <option value="imagen">Imagen</option>
                            <option value="video">Video</option>
                        </select>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Multimedio </span>
                        <input type="file" class="form-control" id="file"  name = "file" required />
                    </div>
                    <button type="submit" class="btn btn-primary">Crear Pregunta</button>
                    <br /><br />
                </form>                 

            </Container>
        );
    }
}

export default Create;