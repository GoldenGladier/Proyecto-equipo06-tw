import React from "react";
// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Pregunta = ({ id, nombre }) => {

    const handleClickEliminar = (event) => {
        //Eliminar
        console.info(id + " llamo a la función eliminar.")
        axios.get(`/Algebra_model_game/deleteQuestion?idList=${id}`).then(response => {
            console.info(response.data);
            // if (response.data.message) {
            //     alert(response.data.message);
            // } else {
            //     alert(response.data.error);
            // }
        }).catch(error => {
            console.info(error);
            // alert(response.data.message);
        }).finally(() => {
            window.location.href = "/Algebra_model_game/";
        });
    }

    return (
        <tr>
            <td>{nombre}</td>
            <td className="AlignCenter">
                <Link to={`/Algebra_model_game/info?id=${id}`} className="btn btn-success M-6 CustomLink">
                    Ver pregunta
                </Link>

                <Link to={`/Algebra_model_game/update?id=${id}`} className="btn btn-warning M-6 CustomLink" >
                    Editar pregunta
                </Link>
                
                <Link onClick={handleClickEliminar} className="btn btn-danger M-6 CustomLink">
                    Eliminar pregunta
                </Link>                
            </td>
        </tr>
    )
}
export default Pregunta;