function horoscopo() {
    let dia;
    let mes;

    dia = parseInt (document.formulario.dia.value);
    mes = parseInt (document.formulario.mes.value);
    
    
        if ((dia >= 21 && mes==3) || (dia <=20 && mes==4)) {
            document.getElementById("fotos").src="fotos/aries.jpg"
            alert("Y tu signo es...");
        }

        if((dia>=21 && mes==4)||(dia<=21 && mes==5)){
            document.getElementById("fotos").src="fotos/tauro.jpg"
            alert("Y tu signo es...");
        }
        
        if((dia>=22 && mes==5)||(dia<=21 && mes==6)){
            document.getElementById("fotos").src="fotos/geminis.jpg"
            alert("Y tu signo es...");
        }

        if((dia>=21 && mes==6)||(dia<=23 && mes==7)){
            document.getElementById("fotos").src="fotos/cancer.jpg"  
            alert("Y tu signo es...");
        }

        if((dia>=24 && mes==7)||(dia<=23 && mes==8)){
            document.getElementById("fotos").src="fotos/leo.jpg"
            alert("Y tu signo es...");
        }

        if((dia>=24 && mes==8)||(dia<=23 && mes==9)){
            document.getElementById("fotos").src="fotos/virgo.jpg"
            alert("Y tu signo es...");
        }

        if((dia>=24 && mes==9)||(dia<=23 && mes==10)){
            document.getElementById("fotos").src="fotos/libra.jpg"
            alert("Y tu signo es...");
        }
        
        if((dia>=24 && mes==10)||(dia<=22 && mes==11)){
            document.getElementById("fotos").src="fotos/escorpio.jpg"
            alert("Y tu signo es...");
        }
        
        if((dia>=23 && mes==11)||(dia<=21 && mes==12)){
            document.getElementById("fotos").src="fotos/sagitario.jpg"
            alert("Y tu signo es...");
        }
        
        if((dia>=22 && mes==12)||(dia<=20 && mes==1)){
            document.getElementById("fotos").src="fotos/capricornio.jpg"
            alert("Y tu signo es...");
        }
        
        if((dia>=21 && mes==1)||(dia<=19 && mes==2)){
            document.getElementById("fotos").src="fotos/acuario.jpg"
            alert("Y tu signo es...");
        }
        
        if((dia>=20 && mes==2)||(dia<=20 && mes==3)){
            document.getElementById("fotos").src="fotos/piscis.jpg"
            alert("Y tu signo es...");
        }

}