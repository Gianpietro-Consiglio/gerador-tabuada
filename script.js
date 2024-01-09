var button = window.document.getElementById('gerar')
button.addEventListener('click', gerar)

function gerar(){
    var valor = window.document.getElementById('txt1').value
    var campo = window.document.getElementById('res')
    campo.innerHTML=''
    if (String(valor).length == 0){
        alert('Preencha os campos corretamente!')
    }else{
        var c = 1
        valor = Number(valor)
        while (c <= 10){
            campo.innerHTML += `${valor}x${c}=${valor * c}<br>`
            c++
        }
    }
}

