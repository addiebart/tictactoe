/*! main.js for gh:addiebart/tictactoe | (c) Addie 2021*/
document.addEventListener('DOMContentLoaded',function() {
const squares = ({
'sq1': document.getElementById('1'),
'sq2': document.getElementById('2'),
'sq3': document.getElementById('3'),
'sq4': document.getElementById('4'),
'sq5': document.getElementById('5'), /*gets boxes*/
'sq6': document.getElementById('6'),
'sq7': document.getElementById('7'),
'sq8': document.getElementById('8'),
'sq9': document.getElementById('9')
}),

pointer1=(function(){clickHandle(1)}),
pointer2=(function(){clickHandle(2)}),
pointer3=(function(){clickHandle(3)}),
pointer4=(function(){clickHandle(4)}),
pointer5=(function(){clickHandle(5)}), /*click ponters*/
pointer6=(function(){clickHandle(6)}),
pointer7=(function(){clickHandle(7)}),
pointer8=(function(){clickHandle(8)}),
pointer9=(function(){clickHandle(9)});

squares.sq1.addEventListener('click',pointer1);
squares.sq2.addEventListener('click',pointer2);
squares.sq3.addEventListener('click',pointer3);
squares.sq4.addEventListener('click',pointer4);
squares.sq5.addEventListener('click',pointer5); /*event listeners*/
squares.sq6.addEventListener('click',pointer6);
squares.sq7.addEventListener('click',pointer7);
squares.sq8.addEventListener('click',pointer8);
squares.sq9.addEventListener('click',pointer9);
document.getElementById('playAgain').addEventListener('click',function(){void(location.reload());});
document.getElementById('oBtn').addEventListener('click',function(){
    xFirstFlg = false;
    document.getElementById('oBtn').parentElement.hidden = true;
    document.getElementById('status').textContent = '\"O\" is going first. May the best player win!';
});

let xFirstFlg = true,
turnNum = 0,
board = [
    undefined,
    undefined,
    undefined,
    undefined,  /*game vars*/
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
];

let markParser = function() {
    let letter = '';
    if (xFirstFlg) {
        if (turnNum%2 == 0) {
            letter = 'X';
        }
        else {
            letter = 'O';
        }
    }
    else {
        if (turnNum%2 == 0) {
            letter = 'O';
        }
        else {
            letter = 'X';
        }
    }
    return letter;
}

let clickHandle = function(boxNum) {
    document.getElementById('oBtn').parentElement.hidden = true;
    let mark = markParser();
    squares['sq'+boxNum.toString()].querySelector('span').textContent = mark;
    board[boxNum] = turnNum%2;
    checkForWin();
    turnNum++;
}

let checkForWin = function() {
    let sqCheck = null;
    if ((board[1]==board[2])&&(board[2]==board[3])&&(board[1]!==undefined)) {sqCheck=1;}
    if ((board[4]==board[5])&&(board[5]==board[6])&&(board[4]!==undefined)) {sqCheck=4;}
    if ((board[7]==board[8])&&(board[8]==board[9])&&(board[7]!==undefined)) {sqCheck=7;}
    if ((board[1]==board[4])&&(board[4]==board[7])&&(board[1]!==undefined)) {sqCheck=1;}
    if ((board[2]==board[5])&&(board[5]==board[8])&&(board[2]!==undefined)) {sqCheck=2;}
    if ((board[3]==board[6])&&(board[6]==board[9])&&(board[3]!==undefined)) {sqCheck=3;}
    if ((board[1]==board[5])&&(board[5]==board[9])&&(board[1]!==undefined)) {sqCheck=1;}
    if ((board[3]==board[5])&&(board[5]==board[7])&&(board[3]!==undefined)) {sqCheck=3;}
    if (sqCheck!==null) {
        let mark = squares['sq'+sqCheck.toString()].querySelector('span').textContent;
        document.querySelector('#winDiv h2').textContent = '\"'+mark+'\" is the Winner!';
        document.getElementById('playAgain').hidden = false;
    }
    else {
        if (turnNum >= 8) {
            document.querySelector('#winDiv h2').textContent = 'The game is a tie.';
            document.getElementById('playAgain').hidden = false;
        }
    }
}
});