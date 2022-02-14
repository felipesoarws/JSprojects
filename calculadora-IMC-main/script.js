var $altura = document.getElementById('altura')
var $peso = document.getElementById('peso')
var $submit = document.getElementById('submit')
var $imcResultado = document.getElementById('valorIMC')
var $imcNivel = document.getElementById('classifcIMC')

var alturaValor = parseFloat($altura.value)
var pesoValor = parseFloat($peso.value)

$submit.addEventListener('click', () => {
  alturaValor = $altura.value
  pesoValor = $peso.value

  if (pesoValor === '' || alturaValor === '') {
    return
  } else {
    calcIMC()
  }
})

function calcIMC() {
  var metros = alturaValor / 100
  var calc = pesoValor / parseFloat(Math.pow(metros, 2))

  $imcResultado.innerHTML = calc.toFixed(2)

  nivelIMC(calc)
}

function nivelIMC(grau) {
  console.log(grau)
  if (grau < 18.5) {
    $imcNivel.innerHTML = 'Magreza'
  } else if (grau < 24.9) {
    $imcNivel.innerHTML = 'Normal'
  } else if (grau < 29.9) {
    $imcNivel.innerHTML = 'Sobrepeso I'
  } else if (grau < 39.9) {
    $imcNivel.innerHTML = 'Obesidade II'
  } else if (grau > 40) {
    $imcNivel.innerHTML = 'Obesidade Grave III'
  }
}
