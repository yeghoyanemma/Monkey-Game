let win = 0;
let loss = 0;
let time = '';
let person = '';

let replay = document.getElementById("button");
replay.onclick = function () {
    game();
}

let playbutton = document.getElementById("play");
let gamediv = document.getElementById("game");
let startdiv = document.getElementById("start");
let easy = document.getElementById("easy");
let medium = document.getElementById("medium");
let hard = document.getElementById("hard");
let grinch1 = document.getElementById("monkey1");
let grinch2 = document.getElementById("monkey2");
let text = document.getElementById("text");

let b = true;
easy.onclick = function () {
    time = 'easy';
    easy.classList.add("border");
    medium.classList.remove("border");
    hard.classList.remove("border");
}
medium.onclick = function () {
    time = 'medium';
    easy.classList.remove("border");
    medium.classList.add("border");
    hard.classList.remove("border");
}
hard.onclick = function () {
    time = 'hard';
    easy.classList.remove("border");
    medium.classList.remove("border");
    hard.classList.add("border");
}


monkey1.onclick = function () {
    person = 1;
    monkey1.classList.add("border");
    monkey2.classList.remove("border");
}
monkey2.onclick = function () {
    person = 2;
    monkey1.classList.remove("border");
    monkey2.classList.add("border");
}


playbutton.onclick = function () {
    if (time == '' || person == '') {
        text.style.color = "red"
        text.innerText = "Please choose a level or a player!";

    } else {
        gamediv.style.display = "block";
        startdiv.style.display = "none";
        game();
    }
}

document.getElementById("menu").onclick = function () {
    location.reload();
}


function game() {

    document.getElementById('q8').style.opacity = 0;
    document.getElementById('q7').style.opacity = 0;
    replay.style.display = "none";

    let bananas = document.getElementsByClassName("bananas");
    for (let i = 0; i < bananas.length; i++) {
        bananas[i].style.top = Math.round(Math.random() * 90) + "%";
        bananas[i].style.left = Math.round(Math.random() * 90) + "%";
        bananas[i].classList.remove('rr');
    }

    let u;
    if (time == 'easy') {
        u = 45;
    }
    else if (time == 'medium') {
        u = 30;
    }
    else if (time == 'hard') {
        u = 15;
    }

    let a = setInterval(function () {
        u--;
        document.getElementById('a2').innerHTML = u;
        if (u == 0) {
            clearInterval(a);
            document.getElementById('q7').style.opacity = 1;
            document.getElementById('q8').style.opacity = 0;
            document.onkeydown = null;
            replay.style.display = "block";
            document.getElementById('b2').innerHTML = loss += 1;
        }
    }, 1000)

    if (person == 1) {
        document.getElementById("monkeyimg").src = "./monkey1.png";
    }
    else {
        document.getElementById("monkeyimg").src = "./monkey2.png";

    }
    document.onkeyup = function () {
        document.getElementById("q6").style.animation = '';
    }


    document.onkeydown = function (e) {

        var ll = document.getElementById('q6').offsetLeft
        var tt = document.getElementById('q6').offsetTop

        var ll1 = document.getElementById('q').offsetLeft
        var tt1 = document.getElementById('q').offsetTop

        var ll2 = document.getElementById('q1').offsetLeft
        var tt2 = document.getElementById('q1').offsetTop

        var ll3 = document.getElementById('q2').offsetLeft
        var tt3 = document.getElementById('q2').offsetTop

        var ll4 = document.getElementById('q3').offsetLeft
        var tt4 = document.getElementById('q3').offsetTop

        var ll5 = document.getElementById('q4').offsetLeft
        var tt5 = document.getElementById('q4').offsetTop

        var ll6 = document.getElementById('q5').offsetLeft
        var tt6 = document.getElementById('q5').offsetTop

        if (e.keyCode == 38 || e.keyCode == 87) {
            tt -= 10
            tt = tt < 0 ? innerHeight - 100 : tt;
            document.getElementById('q6').style.top = tt + 'px'
        }
        if (e.keyCode == 40 || e.keyCode == 83) {
            tt = tt + 10
            tt = tt > innerHeight ? 0 : tt;
            document.getElementById('q6').style.top = tt + 'px'
        }
        if (e.keyCode == 37 || e.keyCode == 65) {
            ll = ll - 10;
            ll = ll < 0 ? innerWidth - 100 : ll;
            document.getElementById('q6').style.left = ll + 'px'
            document.getElementById("q6").style.transform = "rotateY(180deg)";
        }
        if (e.keyCode == 39 || e.keyCode == 68) {
            ll = ll + 10;
            ll = ll > innerWidth ? 0 : ll;
            document.getElementById('q6').style.left = ll + 'px'
            document.getElementById("q6").style.transform = "rotateY(360deg)";
        }
        if (e.keyCode == 32) {
            document.getElementById("q6").style.animation = 'circle 1s infinite linear';
        }

        if (ll + 100 > ll1 && ll < ll1 + 100 && tt + 100 > tt1 && tt < tt1 + 100) {
            document.getElementById('q').classList.add('rr')
        }
        if (ll + 100 > ll2 && ll < ll2 + 100 && tt + 100 > tt2 && tt < tt2 + 100) {
            document.getElementById('q1').classList.add('rr')
        }
        if (ll + 100 > ll3 && ll < ll3 + 100 && tt + 100 > tt3 && tt < tt3 + 100) {
            document.getElementById('q2').classList.add('rr')
        }
        if (ll + 100 > ll4 && ll < ll4 + 100 && tt + 100 > tt4 && tt < tt4 + 100) {
            document.getElementById('q3').classList.add('rr')
        }
        if (ll + 100 > ll5 && ll < ll5 + 100 && tt + 100 > tt5 && tt < tt5 + 100) {
            document.getElementById('q4').classList.add('rr')
        }
        if (ll + 100 > ll6 && ll < ll6 + 100 && tt + 100 > tt6 && tt < tt6 + 100) {
            document.getElementById('q5').classList.add('rr')
        }

        var cl = document.getElementsByClassName('rr').length * 5;
        document.getElementById('a1').innerHTML = cl;
        if (cl == 30) {
            clearInterval(a);
            document.getElementById('q8').style.opacity = 1;
            document.getElementById('q7').style.opacity = 0;
            document.onkeydown = null;
            replay.style.display = "block";
            document.getElementById('b1').innerHTML = win += 1;
        }
    }
}