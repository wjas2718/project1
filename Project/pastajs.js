function create1(){
    var x = document.createElement("div");
    x.setAttribute('id','quiz');
    x.setAttribute('class','quiz');
    document.body.appendChild(x);

    var btn = document.createElement("button");                
    btn.setAttribute('class', 'btn');
    btn.innerHTML = "x";
    btn.onclick = function() {var quiz = document.getElementById("quiz");
    quiz.style.display = "none";
    }
    document.getElementById("quiz").appendChild(btn);

    var tx = document.createElement("p");
    tx.innerText = "Co Giovanni zrobi z twoim kolosem?";
    document.getElementById("quiz").appendChild(tx);

    var lbl = document.createElement('label');
    lbl.setAttribute('id','lab1');
    lbl.setAttribute('class','lab');
    lbl.innerHTML = 'opt1';
    document.getElementById("quiz").appendChild(lbl);
    
    var opt1 = document.createElement('input');
    opt1.type = "checkbox";
    opt1.setAttribute('id','opt11');
    opt1.setAttribute('class','opt');
    opt1.onclick = function() {

    }
    document.getElementById("lab1").appendChild(opt1);

    document.getElementById('quiz').style.display='none';
}
create1();

function funct1() {
    document.getElementById('quiz').style.display='block';
}

function create2(){
    var x = document.createElement("div");
    x.setAttribute('id','quiz2');
    x.setAttribute('class','quiz');
    document.body.appendChild(x);

    var btn = document.createElement("button");                
    btn.setAttribute('class', 'btn');
    btn.innerHTML = "x";
    btn.onclick = function() {var quiz = document.getElementById("quiz2");
    quiz.style.display = "none";
    }
    document.getElementById("quiz2").appendChild(btn);

    var tx = document.createElement("p");
    tx.innerText = "Czemu Paulina nie moze przeslac ci rozwiazan?";
    document.getElementById("quiz2").appendChild(tx);

    document.getElementById('quiz2').style.display='none';
}
create2();

function funct2() {
    document.getElementById('quiz2').style.display='block';
}

function create3(){
    var x = document.createElement("div");
    x.setAttribute('id','quiz3');
    x.setAttribute('class','quiz');
    document.body.appendChild(x);

    var btn = document.createElement("button");                
    btn.setAttribute('class', 'btn');
    btn.innerHTML = "x";
    btn.onclick = function() {var quiz = document.getElementById("quiz3");
    quiz.style.display = "none";
    }
    document.getElementById("quiz3").appendChild(btn);

    var tx = document.createElement("p");
    tx.innerText = "Co nie interesuje Julie Lange?";
    document.getElementById("quiz3").appendChild(tx);

    document.getElementById('quiz3').style.display='none';
}
create3();

function funct3() {
    document.getElementById('quiz3').style.display='block';
}

function create4(){
    var x = document.createElement("div");
    x.setAttribute('id','quiz4');
    x.setAttribute('class','quiz');
    document.body.appendChild(x);

    var btn = document.createElement("button");                
    btn.setAttribute('class', 'btn');
    btn.innerHTML = "x";
    btn.onclick = function() {var quiz = document.getElementById("quiz4");
    quiz.style.display = "none";
    }
    document.getElementById("quiz4").appendChild(btn);

    var tx = document.createElement("p");
    tx.innerText = "Czemu Anna Gambin zyczy dziekanowi doglebnych sukcesow?";
    document.getElementById("quiz4").appendChild(tx);

    document.getElementById('quiz4').style.display='none';
}
create4();

function funct4() {
    document.getElementById('quiz4').style.display='block';
}