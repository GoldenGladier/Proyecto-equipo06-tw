import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/styles.css"
import Info from "./components/info";
import Create from "./components/create";
import Edit from "./components/edit";
import Level1 from "./components/level1";
import LevelView from "./components/level_view";

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/Algebra_model_game/">
                    <Home />
                </Route>
                <Route exact path="/Algebra_model_game/info">
                    <Info />
                </Route>
                <Route exact path="/Algebra_model_game/crearPregunta">
                    <Create />
                </Route>   
                <Route exact path="/Algebra_model_game/update">
                    <Edit />
                </Route>     
                <Route exact path="/Algebra_model_game/level">
                    <Level1 />
                </Route> 
                <Route exact path="/Algebra_model_game/view">
                    <LevelView />
                </Route>                                                               
                <Route path="*" render={() => <h1>ERROR 404: Recurso no encontrado.</h1>} />
            </Switch>
        </div>
    );
}
export default App;