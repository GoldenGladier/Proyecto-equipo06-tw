import React from "react";
// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
var Navigation = require('react-router').Navigation;
import axios from "axios";
import swal from "sweetalert";
import { Redirect } from 'react-router';
import {browserHistory} from "react-router";
import {history} from "react-router";
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router-dom';

class Pregunta extends React.Component{
    constructor(props) {
        super(props)
        this.handleClickEliminar = this.handleClickEliminar.bind(this)
        this.state = {
            url: ''                   
        }        
    }
    handleClickEliminar = (event) => {
        //Eliminar

        swal({title: "Eliminar", 
        text: "¿Está seguro que desea eliminar esta pregunta", 
        icon: "warning", 
        buttons: ["No","Confirmar"]
        }).then(respuesta => { // Se ejecuta al darle a confirmar
            if(respuesta){
                console.info(this.props.id + " llamo a la función eliminar.")
                // Se envia el delete al backend
                axios.get(`/Algebra_model_game/deleteQuestion?idList=${this.props.id}`).then(response => {
                    console.info(response.data);
                    swal({ text: "La pregunta se ha eliminado exitosamente", // Notificacion
                    icon:"success",
                    timer: "60000"
                    })
                }).catch(error => {
                    console.info(error);
                }).finally(() => { // Recarga el crud
                    this.setState({url: "/Algebra_model_game/home"});
            });

                
            }else{
                this.setState({url: "/Algebra_model_game/home"}); // Recara el crud
            }
        })
    }

    render(){
    if(this.state.url != ''){
            return (<Redirect to={this.state.url} />);
    }        
    return (
        <tr>
            <td>{this.props.nombre}</td>
            <td className="AlignCenter">
                <Link to={`/Algebra_model_game/view?id=${this.props.id}`} className="btn btn-success M-6 CustomLink">
                    Ver ejercicio
                </Link>

                <Link to={`/Algebra_model_game/update?id=${this.props.id}`} className="btn btn-warning M-6 CustomLink" >
                    Modificar ejercicio
                </Link>
                
                <Link onClick={this.handleClickEliminar} className="btn btn-danger M-6 CustomLink">
                    Eliminar ejercicio
                </Link>       

                <Link to={`/Algebra_model_game/level?id=${this.props.id}`} className="btn btn-info M-6 CustomLink">
                    Probar ejercicio
                </Link>                         
            </td>
        </tr>
        );
    }
}
export default Pregunta;