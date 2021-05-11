import React from "react";
import { Button, Container, Table, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Pregunta from "./pregunta";

class Home extends React.Component {

    state = {
        data: [],
        showAlert: false,
        alertText: ""
    }

    componentDidMount() {
        axios.get("/Crud_React/Preguntas").then(response => {
            this.setState({ data: response.data });
        }).catch(error => {
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
                    <Link to="/Crud_React/crearPregunta" className="btn btn-info CustomLink" style={{ margin: "12px" }}>Añadir nueva pregunta</Link>
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
                            data.map(pregunta => {
                                return <Pregunta {...pregunta} />
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        )
    }

}

export default Home;