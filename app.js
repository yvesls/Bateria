document.body.onkeydown = function() {controleSom(this)}

function animaExibicao(v){
    console.log(v)
    if(document.getElementById(`btn${v}`).style.backgroundColor == 'blue'){
        document.getElementById(`btn${v}`).style.backgroundColor = 'green'
    }else{
        document.getElementById(`btn${v}`).style.backgroundColor = 'blue'
    }
    if(v == 2){
        if(document.getElementById(`img${1}`).style.transform == 'rotate(-15deg)'){
            document.getElementById(`img${1}`).style.transform = 'rotate(0deg)'
        }else {
            document.getElementById(`img${1}`).style.transform = 'rotate(-15deg)'
        }
    }else if(v == 1){
        if(document.getElementById(`img${2}`).style.transform == 'rotate(20deg)'){
            document.getElementById(`img${2}`).style.transform = 'rotate(13deg)'
        }else {
            document.getElementById(`img${2}`).style.transform = 'rotate(20deg)'
        }
    }else if(v == 8){
        if(document.getElementById(`img${3}`).style.transform == 'rotate(-15deg)'){
            document.getElementById(`img${3}`).style.transform = 'rotate(0deg)'
        }else {
            document.getElementById(`img${3}`).style.transform = 'rotate(-15deg)'
        }
    }
}

function play(v){
    if(v == 2){
        v = 1;
    }else if(v == 7){
        v = 5;
    }else if (v == 8){
        v = 6;
    }
    document.getElementById(`myAudio${v}`).load()
    document.getElementById(`myAudio${v}`).play()
}

function controleSom(v){
    if(v == 2 || event.keyCode == 50){
        v = 2;
        play(v)
        
        animaExibicao(v)
        setTimeout(() => {
            animaExibicao(v)
            
        }, 500);

    }else if (v == 1 || event.keyCode == 49){
        v = 1;
        play(v)
        animaExibicao(v)
        setTimeout(() => {
            animaExibicao(v)
        }, 500);

    }else if (v == 3 || event.keyCode == 51){
        v = 3;
        play(v)
        animaExibicao(v)
        setTimeout(() => {
            animaExibicao(v)
        }, 500);

    }else if (v == 4 || event.keyCode == 52){
        v = 4;
        play(v)
        animaExibicao(v)
        setTimeout(() => {
            animaExibicao(v)
        }, 500);

    }else if (v == 5 || event.keyCode == 53){
        v = 5;
        play(v)
        animaExibicao(v)
        setTimeout(() => {
            animaExibicao(v)
        }, 500);

    }else if (v == 6 || event.keyCode == 54){
        v = 6;
        play(v)
        animaExibicao(v)
        setTimeout(() => {
            animaExibicao(v)
        }, 500);

    }else if (v == 7 || event.keyCode == 55){
        v = 7;
        play(v)
        animaExibicao(v)
        setTimeout(() => {
            animaExibicao(v)
        }, 500);

    }else if (v == 8 || event.keyCode == 56){
        v = 8;
        play(v)
        animaExibicao(v)
        setTimeout(() => {
            animaExibicao(v)
        }, 500);

    }else{
        console.error();
    }
    
}