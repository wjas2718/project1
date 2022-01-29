/*class Dv{
    constructor(txt,op1,op2){
        this.txt = txt;
        this.op1 = op1;
        this.op2 = op2;
    }
    quiz() {
        var x = document.createElement("div");
        x.setAttribute('id','quiz');
        x.setAttribute('class','quiz');
        return x;
    }

    button() {
        var btn = document.createElement("button");                
        btn.setAttribute('class', 'btn');
        btn.innerHTML = "x";
        btn.onclick = function() {var quiz = document.getElementById("quiz");
        quiz.style.display = "none";
        }
        return btn;
    }

    text() {
        var tx = document.createElement("p");
        tx.innerText = this.txt;
        return tx;
    }

    option1() {
        var lbl = document.createElement('label');
        lbl.setAttribute('id','lab');
        lbl.setAttribute('class','lab')
        lbl.innerHTML = this.op1;

        var opt1 = document.createElement('input');
        opt1.type = "checkbox";
        opt1.setAttribute('id','opt1');
        opt1.setAttribute('class','opt');

        return lbl,opt1;
    }

    create() {
    document.body.appendChild(x);
    document.getElementById("quiz").appendChild(btn);
    document.getElementById("quiz").appendChild(tx);
    document.getElementById("quiz").appendChild(lbl);
    document.getElementById("lab").appendChild(opt1);

    document.getElementById("quiz").style.display='none';
    }
}*/

class Dv{
    constructor(txt,op1,op2,num){
        this.txt = txt;
        this.op1 = op1;
        this.op2 = op2;
        this.num = num;
        this.id = "quiz" + `${this.num}`
    }
    quiz() {
        
        var x = document.createElement("div");
        x.setAttribute('id',`${this.id}`);
        x.setAttribute('class','quiz');
        document.body.appendChild(x);
        document.getElementById(`${this.id}`).style.display='none';
    }

    button() {
        var id = "quiz" + `${this.num}`;
        var btn = document.createElement("button");                
        btn.setAttribute('class', 'btn');
        btn.innerHTML = "x";
        btn.onclick = function() {var quiz = document.getElementById(`${id}`);
        quiz.style.display = "none";
        }
        document.getElementById(`${id}`).appendChild(btn);
    }

    text() {
        var id = "quiz" + `${this.num}`;
        var tx = document.createElement("p");
        tx.innerText = this.txt;
        document.getElementById(`${id}`).appendChild(tx);
    }

    option1() {
        var op1 = "opt1" + `${this.num}`;
        var id = "quiz" + `${this.num}`;
        var lab = 'lab' + `${this.num}`;
        var lbl = document.createElement('label');
        lbl.setAttribute('id',`${lab}`);
        lbl.setAttribute('class','lab');
        lbl.innerHTML = this.op1;
        document.getElementById(`${id}`).appendChild(lbl);

        var opt1 = document.createElement('input');
        opt1.type = "checkbox";
        opt1.setAttribute('id',`${op1}`);
        opt1.setAttribute('class','opt');
        document.getElementById(`${lab}`).appendChild(opt1);
    }

    option2() {
        var op2 = "opt2" + `${this.num}`;
        var id = "quiz" + `${this.num}`;
        var lab1 = 'lab2' + `${this.num}`;
        var lbl1 = document.createElement('label');
        lbl1.setAttribute('id',`${lab1}`);
        lbl1.setAttribute('class','lab');
        lbl1.innerHTML = this.op2;
        document.getElementById(`${id}`).appendChild(lbl1);

        var opt2 = document.createElement('input');
        opt2.type = "checkbox";
        opt2.setAttribute('id',`${op2}`);
        opt2.setAttribute('class','opt');
        document.getElementById(`${lab1}`).appendChild(opt2);
    }
}
let dv1 = new Dv("Co Giovanni zrobi z twoim kolosem?","Znajdzie cie po zdjeciu w usosie i osobiscie ci odda","Odda go biednym","1");
dv1.quiz();
dv1.button();
dv1.text();
dv1.option1();
dv1.option2();

let dv2 = new Dv("Czemu Paulina nie moze ci przeslac rozwiazania zadania?","Bo cie nienawidzi","Bo nie umie go rozwiazac","2");
dv2.quiz();
dv2.button();
dv2.text();
dv2.option1();
dv2.option2();

let dv3 = new Dv("Co nie interesuje Julie Lange?","Ty","Twoje zycie","3");
dv3.quiz();
dv3.button();
dv3.text();
dv3.option1();
dv3.option2();

let dv4 = new Dv("Dlaczego Anna zyczy dziekanowi doglebnych sukcesow?","Bo dziekan ma wielkie serce","Bo uprawiala z nim seks","4");
dv4.quiz();
dv4.button();
dv4.text();
dv4.option1();
dv4.option2();

document.getElementById("opt11").setAttribute("onclick","op1()");
document.getElementById("opt21").setAttribute("onclick","op1()");
document.getElementById("opt12").setAttribute("onclick","op2()");
document.getElementById("opt22").setAttribute("onclick","op2()");
document.getElementById("opt13").setAttribute("onclick","op3()");
document.getElementById("opt23").setAttribute("onclick","op3()");
document.getElementById("opt14").setAttribute("onclick","op4()");
document.getElementById("opt24").setAttribute("onclick","op4()");

function op1() {
    document.getElementById("opt11").disabled = true;
    document.getElementById("opt21").disabled = true;
    document.getElementById("1").style.display = "block";
}

function op2() {
    document.getElementById("opt12").disabled = true;
    document.getElementById("opt22").disabled = true;
    document.getElementById("2").style.display = "block";
}

function op3() {
    document.getElementById("opt13").disabled = true;
    document.getElementById("opt23").disabled = true;
    document.getElementById("3").style.display = "block";
}

function op4() {
    document.getElementById("opt14").disabled = true;
    document.getElementById("opt24").disabled = true;
    document.getElementById("4").style.display = "block";
}

function funct1(){
    document.getElementById("quiz1").style.display='block'
}

function funct2() {
    
    document.getElementById("quiz2").style.display='block';
}

function funct3() {
    
    document.getElementById("quiz3").style.display='block';
}

function funct4() {
    
    document.getElementById("quiz4").style.display='block';
}