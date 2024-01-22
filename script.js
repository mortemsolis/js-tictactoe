let currentChar = 1
let count = 0

const buttons = document.getElementsByClassName('ttt');

let gameNotEnded = true

function startGame() {
    document.getElementById('playerSelect').style = 'display: none';
    document.getElementById('gameGrid').style = 'display: block';
    TTT();
}

function endGame(X) {
    if (gameNotEnded) {
        if (X.innerHTML != '-') { document.getElementById('log').innerHTML = X.innerHTML + ' je pobijedio!'; }
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style = 'color: #E5FFDE; background-color: #9590A8; cursor: default';
            if (buttons[j].innerHTML == '&nbsp;') {
                buttons[j].innerHTML = '-'
                buttons[j].style = 'color: #9590A8; background-color: #9590A8; cursor: default'
            }
        gameNotEnded = false
        }
    }
}

function winCond(x, i, a, b, c) {
    if (x[a].innerHTML == x[b].innerHTML && x[b].innerHTML == x[c].innerHTML && x[a].innerHTML != '&nbsp;') {
        endGame(x[i]);
        if (x[a].innerHTML != '-') {x[a].style = 'background-color: #634B66; color: #E5FFDE; cursor: default'}
        if (x[b].innerHTML != '-') {x[b].style = 'background-color: #634B66; color: #E5FFDE; cursor: default'}
        if (x[c].innerHTML != '-') {x[c].style = 'background-color: #634B66; color: #E5FFDE; cursor: default'}
    }
}

function TTT() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if (buttons[i].innerHTML == '&nbsp;'){
                if (currentChar % 2 == 0) {
                    buttons[i].innerHTML = 'X'
                } else {
                    buttons[i].innerHTML = 'O'
                };
                currentChar++;
                count++;
            }
            winCond(buttons, i, 0, 1, 2)
            winCond(buttons, i, 3, 4, 5)
            winCond(buttons, i, 6, 7, 8)
            winCond(buttons, i, 0, 3, 6)
            winCond(buttons, i, 1, 4, 7)
            winCond(buttons, i, 2, 5, 8)
            winCond(buttons, i, 0, 4, 8)
            winCond(buttons, i, 2, 4, 6)
            if (count == 9 && gameNotEnded) {
                document.getElementById('log').innerHTML = 'Neriješeno!'; 
                for (let j = 0; j < buttons.length; j++) {
                    buttons[j].style = 'color: #E5FFDE; background-color: #9590A8; cursor: default';
                }
            }
        })
    }
}
