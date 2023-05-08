function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num
    var alerta = document.getElementById('alert')
    if (numero.length > 22) {
        alerta.innerHTML = 'Você atingiu a quantidade maxima <br></br>de numeros!';
        document.getElementById('resultado').innerHTML = ''
    }
}

function clean() {
    document.getElementById('resultado').innerHTML = ""

}

function apagar() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else{
        document.getElementById('resultado').innerHTML = "0";
    }
}