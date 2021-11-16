document.body.onkeydown = function() {play(this)}
function play(v){
    console.log(event.keyCode)
    if(v == 2 || event.keyCode == 49){
        document.getElementById('myAudio1').play()
        document.getElementById('btn2').style.border = '5px solid red'
        document.getElementById('img1').style.transform = 'rotate(0deg)'
        setInterval(() => {
            document.getElementById('btn2').style.border = ''
            document.getElementById('img1').style.transform = 'rotate(-15deg)'
        }, 500);

    }else if (v == 1 || event.keyCode == 50){
        document.getElementById('myAudio1').play()
        document.getElementById('btn1').style.border = '5px solid red'
        document.getElementById('img2').style.transform = 'rotate(0deg)'
        setInterval(() => {
            document.getElementById('btn1').style.border = ''
            document.getElementById('img2').style.transform = 'rotate(10deg)'
        }, 500);

    }else if (v == 3 || event.keyCode == 51){
        document.getElementById('myAudio2').play()
        document.getElementById('btn3').style.border = '5px solid red'
        setInterval(() => {
            document.getElementById('btn3').style.border = ''
        }, 500);

    }else if (v == 4 || event.keyCode == 52){
        document.getElementById('myAudio2').play()
        document.getElementById('btn4').style.border = '5px solid red'
        setInterval(() => {
            document.getElementById('btn4').style.border = ''
        }, 500);

    }else if (v == 5 || event.keyCode == 53){
        document.getElementById('myAudio3').play()
        document.getElementById('btn5').style.border = '5px solid red'
        setInterval(() => {
            document.getElementById('btn5').style.border = ''
        }, 500);

    }else if (v == 6 || event.keyCode == 54){
        document.getElementById('myAudio4').play()
        document.getElementById('btn6').style.border = '5px solid red'
        setInterval(() => {
            document.getElementById('btn6').style.border = ''
        }, 500);

    }else if (v == 7 || event.keyCode == 55){
        document.getElementById('myAudio5').play()
        document.getElementById('btn7').style.border = '5px solid red'
        setInterval(() => {
            document.getElementById('btn7').style.border = ''
        }, 500);

    }else if (v == 8 || event.keyCode == 56){
        document.getElementById('myAudio6').play()
        document.getElementById('btn8').style.border = '5px solid red'
        document.getElementById('img3').style.transform = 'rotate(-15deg)'
        setInterval(() => {
            document.getElementById('btn8').style.border = ''
            document.getElementById('img3').style.transform = 'rotate(0deg)'
        }, 500);

    }else{
        console.error();
    }
    
}