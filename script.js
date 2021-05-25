
let jogada = 1;
//let x = document.getElementById('a1');
//let x2 = document.getElementById('a2');
let bloick = [];
let click = 0;


function jogo(aX, oX, block, ind, ind1) {
    if (jogada == 1){
        document.getElementById(aX).style.visibility = "visible";
        document.getElementById(oX).style.visibility = "hidden";
        document.getElementById(block).style.pointerEvents = "none";
        bloick[ind] = aX;
        jogada++;
        click++;
    }
    else{
        document.getElementById(aX).style.visibility = "hidden";
        document.getElementById(oX).style.visibility = "visible";
        document.getElementById(block).style.pointerEvents = "none";
        bloick[ind] = oX;
        click++;
        jogada--;
    }
    setTimeout(function(){
        //CONDIÇÕES PARA: X;

        //linha 1 inteira || coluna 1 inteira
        if ((bloick[1] == 'a1' && bloick[2] == 'a2' && bloick[3] == 'a3') || (bloick[1] == 'a1' && bloick[4] == 'a4' && bloick[7] == 'a7'))
        {
            alert('O jogador 1 venceu :D');
            window.location.href = window.location.href;
            
        }
        // Linha 2 inteira || Coluna 2 inteira
        else if ((bloick[4] == 'a4' && bloick[5] == 'a5' && bloick[6] == 'a6') || (bloick[2] == 'a2' && bloick[5] == 'a5' && bloick[8] == 'a8')){
            alert('O jogador 1 venceu :D');
            window.location.href = window.location.href;
        }

        // Linha 3 inteira || Coluna 4 inteira
        else if ((bloick[7] == 'a7' && bloick[8] == 'a8' && bloick[9] == 'a9') || (bloick[3] == 'a3' && bloick[6] == 'a6' && bloick[9] == 'a9')){
            alert('O jogador 1 venceu :D');
            window.location.href = window.location.href;
        }

        ///////////////////////////
        //CONDIÇÕES PARA: O;

        //linha 1 inteira || coluna 1 inteira
        if ((bloick[1] == 'o1' && bloick[2] == 'o2' && bloick[3] == 'o3') || (bloick[1] == 'o1' && bloick[4] == 'o4' && bloick[7] == 'o7'))
        {
            alert('O jogador 2 venceu :D');
            window.location.href = window.location.href;
            
        }
        // Linha 2 inteira || Coluna 2 inteira
        else if ((bloick[4] == 'o4' && bloick[5] == 'o5' && bloick[6] == 'o6') || (bloick[2] == 'o2' && bloick[5] == 'o5' && bloick[8] == 'o8')){
            alert('O jogador 2 venceu :D');
            window.location.href = window.location.href;
        }

        // Linha 3 inteira || Coluna 4 inteira
        else if ((bloick[7] == 'o7' && bloick[8] == 'o8' && bloick[9] == 'o9') || (bloick[3] == 'o3' && bloick[6] == 'o6' && bloick[9] == 'o9')){
            alert('O jogador 2 venceu :D');
            window.location.href = window.location.href;
        }

        // Diagonais
        if ((bloick[1] == 'a1' && bloick[5] == 'a5' && bloick[9] == 'a9') || (bloick[3] == 'a3' && bloick[5] == 'a5' && bloick[7] == 'a7'))
        {
            alert('O jogador 1 venceu :D');
            window.location.href = window.location.href;
            
        }
        else if ((bloick[1] == 'o1' && bloick[5] == 'o5' && bloick[9] == 'o9') || (bloick[3] == 'o3' && bloick[5] == 'o5' && bloick[7] == 'o7'))
        {
            alert('O jogador 1 venceu :D');
            window.location.href = window.location.href; 
        }

        else{
            if (click >= 8){   
                document.getElementById('h3').style.visibility = "visible"; 
                document.getElementById('reiniciar').style.visibility = "visible"; 
            }
        }
        
    }, 1);
}

function reiniciar() {
    window.location.href = window.location.href;
}



