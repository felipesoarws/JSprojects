var form = document.getElementById('form')
var decimal = document.getElementById('decimal')
var binario = document.getElementById('binario').value


form.addEventListener('submit', (e) => {
    e.preventDefault()

    binario = document.getElementById('binario').value

    
    decimal.value = bin2dec(binario)
})


function bin2dec(bin) {
    var dec = 0

    for (var index = bin.length-1 ; index >= 0; index--) {
        dec += parseInt(bin[index]) * Math.pow(2, bin.length-1-index)
    }

    return dec
}

// BIN = 101

// INDEX = (BIN.LENGTH - 1 === ULTIMA POSICAO DO NUMERO) 

// O LOOP PARA QUANDO O INDEX FOR MENOR QUE 0

// parseInt(bin[index]) === VAI PEGAR O NUMERO ATUAL DA STRING E TRANSFORMAR EM NUMERO 

// * Math.pow(2, bin.length-1-index) === VAI MULTIPLICAR COM POTENCIA 2, ELEVANDO O NUMERO ANTECESSOR AO ATUAL

// VAI FAZER O LOOP ATÉ SOMAR TUDO E RETORNAR O VALOR FINAL

