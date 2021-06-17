import React from "react";
// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const Pregunta = ({ id, nombre }) => {

    const handleClickEliminar = (event) => {
        //Eliminar

        swal({title: "Eliminar", 
        text: "¿Está seguro que desea eliminar esta pregunta", 
        icon: "warning", 
        buttons: ["No","Confirmar"]
        }).then(respuesta => { // Se ejecuta al darle a confirmar
            if(respuesta){
                console.info(id + " llamo a la función eliminar.")
                // Se envia el delete al backend
                axios.get(`/Algebra_model_game/deleteQuestion?idList=${id}`).then(response => {
                    console.info(response.data);
                    swal({ text: "La pregunta se ha eliminado exitosamente", // Notificacion
                    icon:"success",
                    timer: "60000"
                    })
                }).catch(error => {
                    console.info(error);
                }).finally(() => { // Recarga el crud
                    window.location.href = "/Algebra_model_game/home";
                });

                
            }else{
                window.location.href = "/Algebra_model_game/home"; // Recara el crud
            }
        })
    }


    return (
        <tr>
            <td>{nombre}</td>
            <td className="AlignCenter">
                <Link to={`/Algebra_model_game/view?id=${id}`} className="btn btn-success M-6 CustomLink">
                    Ver ejercicio
                </Link>

                <Link to={`/Algebra_model_game/update?id=${id}`} className="btn btn-warning M-6 CustomLink" >
                    Modificar ejercicio
                </Link>
                
                <Link onClick={handleClickEliminar} className="btn btn-danger M-6 CustomLink">
                    Eliminar ejercicio
                </Link>       

                <Link to={`/Algebra_model_game/level?id=${id}`} className="btn btn-info M-6 CustomLink">
                    Probar ejercicio
                </Link>                         
            </td>
        </tr>
    )
}
export default Pregunta;