
let jogada = 1;
let bloick = [];
let click = 0;
let jogador1 = 0;
let jogador2 = 0;
let nome;
let nome2;
let jogou = 1;
let jogou2 = 1;
let vit = 0;
let vit2 = 0;

function iniciar(){
        nome = prompt('Qual nome do primeiro jogador?');
        nome2 = prompt('Qual nome do segundo jogador?');
        document.getElementById('tabelajogadores').style.display = "block";
        document.getElementById('p1').innerHTML = nome;
        document.getElementById('p2').innerHTML = nome2;
        document.getElementById('p1').style.visibility = "visible";
        document.getElementById('p2').style.visibility = "visible";
        alert('JOGO INICIADO! ' + nome + ' é o jogador X e ' + nome2 +' jogador O');
        let bloco = document.querySelectorAll('.bloco');
        for (let i = 0; i < 9; i++)
        {
            bloco[i].style.pointerEvents = "auto";
        }    
    }

function jogo(aX, oX, block, ind, ind1) {

    if (jogada == 1){
        document.getElementById(aX).style.visibility = "visible";
        document.getElementById(oX).style.visibility = "hidden";
        document.getElementById(block).style.pointerEvents = "none";
        document.getElementById('jog').innerHTML = "Jogadas: " + jogou;
        bloick[ind] = aX;
        jogada++;
        click++;
        jogou++;
    }
    else{
        document.getElementById(aX).style.visibility = "hidden";
        document.getElementById(oX).style.visibility = "visible";
        document.getElementById(block).style.pointerEvents = "none";
        document.getElementById('jog2').innerHTML = "Jogadas: " + jogou2;
        bloick[ind] = oX;
        jogada--;
        click++;
        jogou2++;
    }
    setTimeout(function(){
        //CONDIÇÕES PARA: X;

        //linha 1 inteira OU coluna 1 inteira
        if ((bloick[1] == 'a1' && bloick[2] == 'a2' && bloick[3] == 'a3') || (bloick[1] == 'a1' && bloick[4] == 'a4' && bloick[7] == 'a7'))
        {
            alert('Jogador(a) ' + nome + ' venceu :D');
            window.location.href = window.location.href;
            jogador1++;
            vit++;
            
        }
        // Linha 2 inteira OU Coluna 2 inteira
        else if ((bloick[4] == 'a4' && bloick[5] == 'a5' && bloick[6] == 'a6') || (bloick[2] == 'a2' && bloick[5] == 'a5' && bloick[8] == 'a8')){
            alert('Jogador(a) ' + nome + ' venceu :D');
            window.location.href = window.location.href;
            jogador1++;
            vit++;
        }

        // Linha 3 inteira OU Coluna 3 inteira
        else if ((bloick[7] == 'a7' && bloick[8] == 'a8' && bloick[9] == 'a9') || (bloick[3] == 'a3' && bloick[6] == 'a6' && bloick[9] == 'a9')){
            alert('Jogador(a) ' + nome + ' venceu :D');
            window.location.href = window.location.href;
            jogador1++;
            vit++;
        }

        ///////////////////////////
        //CONDIÇÕES PARA: O;

        //linha 1 inteira OU coluna 1 inteira
        if ((bloick[1] == 'o1' && bloick[2] == 'o2' && bloick[3] == 'o3') || (bloick[1] == 'o1' && bloick[4] == 'o4' && bloick[7] == 'o7'))
        {
            alert('Jogador(a) ' + nome2 + ' venceu :D');
            window.location.href = window.location.href;
            jogador2++;
            vit2++;
            
        }
        // Linha 2 inteira OU Coluna 2 inteira
        else if ((bloick[4] == 'o4' && bloick[5] == 'o5' && bloick[6] == 'o6') || (bloick[2] == 'o2' && bloick[5] == 'o5' && bloick[8] == 'o8')){
            alert('Jogador(a) ' + nome2 + ' venceu :D');
            window.location.href = window.location.href;
            jogador2++;
            vit2++;
        }

        // Linha 3 inteira OU Coluna 3 inteira
        else if ((bloick[7] == 'o7' && bloick[8] == 'o8' && bloick[9] == 'o9') || (bloick[3] == 'o3' && bloick[6] == 'o6' && bloick[9] == 'o9')){
            alert('Jogador(a) ' + nome2 + ' venceu :D');
            window.location.href = window.location.href;
            jogador2++;
            vit2++;
        }

        // Diagonais
            // X:
        if ((bloick[1] == 'a1' && bloick[5] == 'a5' && bloick[9] == 'a9') || (bloick[3] == 'a3' && bloick[5] == 'a5' && bloick[7] == 'a7'))
        {
            alert('Jogador(a) ' + nome + ' venceu :D');
            window.location.href = window.location.href;
            jogador1++;
            vit++;
            
        }
            // O:
        else if ((bloick[1] == 'o1' && bloick[5] == 'o5' && bloick[9] == 'o9') || (bloick[3] == 'o3' && bloick[5] == 'o5' && bloick[7] == 'o7'))
        {
            alert('Jogador(a) ' + nome2 + ' venceu :D');
            window.location.href = window.location.href;
            jogador2++; 
            vit2++;
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



