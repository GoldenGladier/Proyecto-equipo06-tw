import React from 'react';

class Timer extends React.Component {
    constructor(...args) { // Creo las variables de estado que usare
        super(...args);
        this.escribir = this.escribir.bind(this);        
        this.state = {
            h: 0,
            m: 0,
            s: 0,
            hText: '',
            mText: '',
            sText: '',
            estadoClock: ''     
        }
      }    

    componentDidMount() { // Cuando el componente es montado se llama a la funcion escribir
        this.escribir();        
        if(this.props.power != "apagado"){ // Si el prop (pasado por el padre) es diferente de apagado
            this.state.estadoClock = setInterval(this.escribir, 1000);    // Inicia el cronometro     
        }
    }
    escribir(){
        if(this.props.power ==  "apagado"){ // si el prop es 'apagado'
            clearInterval(this.state.estadoClock);  // detiene el cronometro
        }
        else{
            // console.log("Segundos estado: " + this.state.s);
            // declaro variables auxiliares
            var seg = this.state.s; 
            var min = this.state.m;
            var hor = this.state.h;
            var sAux, mAux, hAux;
            // Condiciones para que se hagan las horas, minutos, y segundos
            seg++;
            if(seg > 59){ 
                min++;            
                seg = 0;
            }
            if(min > 59){
                hor++;
                min = 0;
            }
            if(hor > 24){
                hor = 0;
            }
            // Reviso si las horas, minutos y segundos son menores a 10 para que no escriba '0:0:0'
            if(seg<10){ // y moficarlo para escribir '00:00:00'
                sAux = "0"+seg;
            }else{
                sAux = seg;
            }
            if(min<10){
                mAux = "0"+min;
            }else{
                mAux=min;
            }
            if(hor<10){
                hAux="0"+hor;
            }else{
                hAux=hor;
            }        

            this.setState({ // Actualizo las variables de estado
                s: seg,
                h: hor,
                m: min,
                sText: sAux,
                mText: mAux,
                hText: hAux
            });     
        }   
    }
    render () {
    const{ hText, mText, sText } = this.state;     
      return (
        <div class={"row row-cols-1 timer " + this.props.testView }>
            {/* Muestro las variables de estado (van a ir cambiando) */}
            <h5>Tiempo <i class="bi bi-alarm"></i> : {hText + ':' + mText + ':' + sText}</h5>
        </div>
      );
    }
  }
  
export default Timer;

