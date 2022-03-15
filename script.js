function displayNun(numero){
    const input = document.getElementById('viewNunber').value
    document.getElementById('viewNunber').value = input + numero
}

function calcular (){
    const input = document.getElementById('viewNunber').value
    document.getElementById('viewNunber').value = eval(input)
  
} 