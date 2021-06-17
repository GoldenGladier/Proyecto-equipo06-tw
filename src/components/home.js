import React from "react";
import { Button, Container, Table, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Pregunta from "./pregunta";

// import './css/home.css';

class Home extends React.Component {

    state = {
        data: [],
        showAlert: false,
        alertText: ""
    }

    componentDidMount() {
        axios.get("/Algebra_model_game/Preguntas").then(response => {
            this.setState({ data: response.data });
        }).catch(error => {
            console.log("Tuve un error: ");
            console.info(error);
            this.setState({ showAlert: true, alertText: "ERROR EN LA OBTENCION DE DATOS" });
        })
    }

    render() {
        const { data, showAlert, alertText } = this.state;
        return (
            <Container className="MarginContainer" >
                <h1 className="AlignCenter" > CREAR, ALTAS, BAJAS Y CAMBIOS </h1>
                <hr style={{ width: "80%" }} />
                {
                    showAlert ?
                        <Alert variant="danger">
                            {alertText}
                        </Alert>
                        : null
                }
                {/* <Button variant="info" style={{ margin: "12px" }}> */}
                    <Link to="/Algebra_model_game/crearPregunta" className="btn btn-info CustomLink" style={{ margin: "12px" }}>
                        Crear nuevo ejercicio
                    </Link>
                    {/* <Link to="/Algebra_model_game/level?id=4" className="btn btn-info CustomLink" style={{ margin: "12px" }}>LEVEL</Link> */}
                {/* </Button> */}
                <Table striped bordered >
                    <thead>
                        <tr>
                            <th>Pregunta</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(id => {
                                return <Pregunta {...id} />
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        )
    }

}

export default Home;