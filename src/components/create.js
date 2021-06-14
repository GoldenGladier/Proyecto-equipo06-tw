import React from "react";
import { Button, Container } from "react-bootstrap";
import axios from "axios";

class Create extends React.Component {

    // state = {
    //     id: "",
    //     pregunta: "",
    //     respuesta: "",
    //     drags: [],
    //     targets: []
    // }

    // componentDidMount() {
    //     const qId = new URLSearchParams(window.location.search).get("id");
    //     if (qId) {
    //         axios.get("http://localhost:8080/Crud_React/Preguntas?id="+qId).then(response => {
    //             const question = response.data[0];
    //             this.setState({ ...question });
    //         }).catch(error => {
    //             console.info(error);
    //             alert("Ha ocurrido un error");
    //         });
    //     }
    // }

    render() {
        // const { pregunta, respuesta, drags, targets } = this.state;
        return (
            <Container className="MarginContainer">
                <h1>Crear una nueva pregunta.</h1>

                <form method="POST" action="createQuestion" enctype = "multipart/form-data">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Ejercicio</span>
                        <input type="text" class="form-control" placeholder="Area de un rectangulo" aria-describedby="basic-addon1" name="ejer" required />
                    </div>
                    <hr />
                    {/*<!--LEVEL OPTION--> */}
                    <div class="input-group mb-3">
                        <label for="tipo">Tipo:   </label>
                        <select name="tipo" class="form-control" aria-describedby="basic-addon1" required>
                            <option value="1">Completar binomios</option>
                            <option value="2">Completar Area total</option>
                        </select>
                    </div>
                    <hr />
                    {/*<!--AREA VALUES OPTIONS-->*/}
                    <div class="input-group mb-3">
                        <h3>Valores para el área total</h3>
                        <img src="/src/images/plantilla.png" /><br /><br />
                        <label for="h1">Valor de h1: </label><input type="text" class="form-control" name="h1" placeholder="8x" size="3" aria-describedby="basic-addon1" required/><br /><br />
                        <label for="h2">Valor de h2: </label><input type="text" class="form-control" name="h2" placeholder="56" size="3"aria-describedby="basic-addon1" required/><br /><br />
                        <label for="w1">Valor de w1: </label><input type="text" class="form-control" name="w1" placeholder="65" size="3" aria-describedby="basic-addon1" required/><br /><br />
                        <label for="w2">Valor de w2: </label><input type="text" class="form-control" name="w2" placeholder="9" size="3" aria-describedby="basic-addon1" required/><br /><br />
                        <label for="area1">Valor de Area 1: </label><input type="text" class="form-control" name="area1" placeholder="36" size="3" aria-describedby="basic-addon1" required/><br /><br />
                        <label for="area2">Valor de Area 2: </label><input type="text" class="form-control" name="area2" placeholder="5x" size="3" aria-describedby="basic-addon1" required/><br /><br />
                        <label for="area3">Valor de Area 3: </label><input type="text" class="form-control" name="area3" placeholder="62" size="3" aria-describedby="basic-addon1" required/><br /><br />
                        <label for="area4">Valor de Area 4: </label><input type="text" class="form-control" name="area4" placeholder="11" size="3" aria-describedby="basic-addon1" required/><br /><br />
                    </div>
                    <hr />

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Expresion de Area total: </span>
                        <input type="text" class="form-control" placeholder="8x^2+9" size="12" aria-describedby="basic-addon1" name="expresion" required />                       
                    </div><br />

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Area total en binomios: </span>
                        <input type="text" class="form-control" placeholder="(9x + 8)(24 + 9)" size="12" aria-describedby="basic-addon1" name="binomios" required />                       
                    </div>
                    <hr />
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Imagen: </span>
                        <input type="file" class="form-control" id="file"  name = "file_image" size = "10"  required />
                    </div>
             
                    <button type="submit" class="btn btn-primary">Crear Pregunta</button>
                    <br /><br />
                </form>                 

            </Container>
        )
    }
}

export default Create;