var borderTR = document.getElementById('topRight')
var borderBR = document.getElementById('bottomRight')
var borderBL = document.getElementById('bottomLeft')
var borderTL = document.getElementById('topLeft')

var container = document.querySelector('.border-generator')

borderTR.addEventListener('mouseup', () => {
    var valor = borderTR.value
    container.style.borderTopRightRadius = valor +'%'
    document.getElementById('valueTR').textContent = valor+'% '
})

borderBR.addEventListener('mouseup', () => {
    var valor = borderBR.value
    container.style.borderBottomRightRadius = valor +'%'
    document.getElementById('valueBR').textContent = valor+'% '
})

borderBL.addEventListener('mouseup', () => {
    var valor = borderBL.value
    container.style.borderBottomLeftRadius = valor +'%'
    document.getElementById('valueBL').textContent = valor+'%; '
})

borderTL.addEventListener('mouseup', () => {
    var valor = borderTL.value
    container.style.borderTopLeftRadius = valor +'%'
    document.getElementById('valueTL').textContent = valor+'% ' 
})

var copyInput = document.getElementById('copyCode')
var button = document.getElementById('copy')


button.addEventListener('click', () => {
    const body = document.querySelector('body')
    const area = document.createElement('textarea')
    
    body.appendChild(area)
    area.value = copyInput.textContent
    area.select()
    document.execCommand('copy')
    body.removeChild(area)

    document.querySelector('.alert').classList.toggle('show')
})




