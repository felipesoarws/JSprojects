// CALCULATOR
'use strict'
var display = document.getElementById('display')
var teclas = document.querySelectorAll('[id*=tecla]')
var operadores = document.querySelectorAll('[id*=operacao]')

var numeroNovo = true
var operador
var numeroAnterior

function operacaoPendente() {
  operador != undefined
}

function calcular() {
  if (operacaoPendente) {
    var numeroAtual = parseFloat(display.textContent)
    numeroNovo = true

    if (operador === '+') {
      atualizarDisplay(numeroAnterior + numeroAtual)
    } else if (operador === '-') {
      atualizarDisplay(numeroAnterior - numeroAtual)
    } else if (operador === 'x') {
      atualizarDisplay(numeroAnterior * numeroAtual)
    } else if (operador === '/') {
      atualizarDisplay(numeroAnterior / numeroAtual)
    }
  }
}

function atualizarDisplay(valor) {
  if (numeroNovo) {
    display.textContent = valor
    numeroNovo = false
  } else {
    display.textContent += valor
  }
}

function inserirTecla(evento) {
  atualizarDisplay(evento.target.textContent)
}

teclas.forEach(tecla => {
  tecla.addEventListener('click', inserirTecla)
})

function selecionarOperador(evento) {
  if (!numeroNovo) {
    calcular()
    numeroNovo = true
    operador = evento.target.textContent
    numeroAnterior = parseFloat(display.textContent)
  }
}

operadores.forEach(operador => {
  operador.addEventListener('click', selecionarOperador)
})

function acionarIgual() {
  calcular()
  operador = undefined
}
document.getElementById('igual').addEventListener('click', acionarIgual)

function limparCalculo() {
  display.textContent = ''
  operador = undefined
  numeroNovo = true
  numeroAnterior = undefined
}
document
  .getElementById('limparDisplay')
  .addEventListener('click', limparCalculo)

document.getElementById('backspace').addEventListener('click', backspace)
function backspace() {
  display.textContent = display.textContent.slice(0, -1)
}

var existeDecimal = display.textContent.indexOf('.') != -1

var existeNumero = display.textContent.length > 0

document.getElementById('decimal').addEventListener('click', decimal)

function decimal() {
  if (!existeDecimal) {
    if (existeNumero) {
      atualizarDisplay('.')
    } else {
      atualizarDisplay('0.')
    }
  }
}

var mapaTeclado = {
  0: 'tecla0',
  1: 'tecla1',
  2: 'tecla2',
  3: 'tecla3',
  4: 'tecla4',
  5: 'tecla5',
  6: 'tecla6',
  7: 'tecla7',
  8: 'tecla8',
  9: 'tecla9',
  '-': 'operacaoSubtrair',
  '+': 'operacaoSomar',
  '/': 'operacaoDivir',
  x: 'operacaoMultiplicar',
  '.': 'operacaoMultiplicar',
  Backspace: 'backspace',
  c: 'limparDisplay',
  '=': 'igual',
  Enter: 'igual'
}

function mapearTeclado(evento) {
  var tecla = evento.key

  const teclaPermitida = Object.keys(mapaTeclado).indexOf(tecla) != -1

  if (teclaPermitida) {
    document.getElementById(mapaTeclado[tecla]).click()
  }
}
document.addEventListener('keydown', mapearTeclado)
