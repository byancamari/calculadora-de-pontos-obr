"use strict"

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;//Quantos milésimos valem 1 segundo?
var cron;

//Inicia o temporizador
function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

//Para o temporizador mas não limpa as variáveis
function pause() {
    clearInterval(cron);
}

//Para o temporizador e limpa as variáveis
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';66
}

//Faz a contagem do tempo e exibição
function timer() {
    ss++; //Incrementa +1 na variável ss

    if (ss == 60) { //Verifica se deu 59 segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm

        if (mm == 60) { //Verifica se deu 59 minutos
            mm = 0;//Volta os minutos para 0
            hh++;//Adiciona +1 na variável hora
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;
    //Retorna o valor tratado
    return format;
}

function renewinput() {
    let hidden_input = document.createElement('input')
    hidden_input.setAttribute("type", "hidden");
    hidden_input.setAttribute("name", "tempo");
    hidden_input.setAttribute("value", document.getElementById('counter').innerText);
    document.querySelector('.input-group').appendChild(hidden_input)
}

//parte dos calculos
//obstáculo
var obs= 15;
//passagem
var passagem= 10;

//redutores 
var redutores= 5;

//intersecção ou beco
var int= 10;
//rampa
var fez30= 30;
var fez20= 20;
var fez10 =10;
//percuso 
var percuso1= 60;
var percuso2= 40;
var percuso3= 20;
  
//vítimas vivas
var vivas1= 60;
var vivas2= 40;
var vivas3= 20;

//vítimas mortas 
var mortas1= 50;
var mortas2= 30;
var mortas =10;

//resultado0

function obs (){
    var obs = 15 * obs;
    obs = document.getElementById("obs").value;
    document.getElementById("obs").innerHTML;
}

function passagem (){
    var passagem = 10 * passagem;
    passagem = document.getElementById("passagem").value;
    document.getElementById("passagem").innerHTML;
}

function redutores (){
    var redutores = 5 * redutores;
    redutores = document.getElementById("redutores").value;
    document.getElementById("redutores").innerHTML;
}
function int (){
    var int = 10 * int;
    int = document.getElementById("int").value;
    document.getElementById("int").innerHTML;
}


function resultado0 (){ 
var resultado0 = parseInt(obs)+ parseInt(passagem) + parseInt (redutores)+ parseInt(int);
console.log (resultado0.value)
}