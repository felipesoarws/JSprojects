// CHANGE THEMES
var $body = document.querySelector('body')
var $slider = document.getElementById('slider')

$slider.addEventListener('click', () => {
  var value = $slider.value

  if (value == 0) {
    $body.classList.add('main')

    $body.classList.remove('second')
    $body.classList.remove('third')
  }

  if (value == 1) {
    $body.classList.add('second')

    $body.classList.remove('main')
    $body.classList.remove('third')
  }

  if (value == 2) {
    $body.classList.add('third')

    $body.classList.remove('main')
    $body.classList.remove('second')
  }
})
