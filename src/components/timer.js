import React from 'react';

class Timer extends React.Component {
    constructor(...args) {
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

    componentDidMount() {
        this.escribir();        
        if(this.props.power != "apagado"){
            this.state.estadoClock = setInterval(this.escribir, 1000);        
        }
    }
    escribir(){
        if(this.props.power ==  "apagado"){
            clearInterval(this.state.estadoClock);
        }
        else{
            // console.log("Segundos estado: " + this.state.s);
            var seg = this.state.s; 
            var min = this.state.m;
            var hor = this.state.h;
            var sAux, mAux, hAux;
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

            if(seg<10){
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

            this.setState({
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
            <h5>Tiempo <i class="bi bi-alarm"></i> : {hText + ':' + mText + ':' + sText}</h5>
        </div>
      );
    }
  }
  
export default Timer;

