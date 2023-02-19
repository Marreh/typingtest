var igracprvi = document.querySelector('#igrac1')
var dugmeprvi = document.querySelector('#igracbtn1')
var igracdrugi = document.querySelector('#igrac2')
var dugmedrugi = document.querySelector('#igracbtn2')
var igractreci = document.querySelector('#igrac3')
var dugmetreci = document.querySelector('#igracbtn3')
var igraccetvrti = document.querySelector('#igrac4')
var dugmecetiri = document.querySelector('#igracbtn4')
var startbtn = document.querySelector('#startbtn')
var infodiv = document.querySelector('#info')
var texts = [
  'Danas je divan dan',
  'Sutra je divan dan',
  'Juče je bio divan dan',
]
var rand
var winner = 0
startbtn.addEventListener('click', miko)

function miko() {
  var time = 2
  startbtn.innerHTML = time
  var loop = setInterval(function () {
    time--
    startbtn.innerHTML = time
    if (time === 0) {
      clearInterval(loop)
      startbtn.style.display = 'none'
      pocetakucanja()
    }
  }, 1000)
}

function pocetakucanja() {
  rand = Math.floor(Math.random() * texts.length)
  infodiv.innerHTML = '<h3>' + texts[rand] + '</h3>'
  infodiv.style.display = 'block'
  igracprvi.focus()
  comp1()
  comp2()
  comp3()
  jakucam()
}
function jakucam() {
  igracprvi.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
      var usertext = igracprvi.value.trim()
      if (usertext == texts[rand]) {
        winner++
        dugmeprvi.className = 'form-control btn btn-success'
        dugmeprvi.innerHTML = 'Position : ' + winner
      } else {
        dugmeprvi.className = 'form-control btn btn-danger'
        dugmeprvi.innerHTML = 'Wrong Typing'
      }
    }
  })
}
function comp1() {
  var text = texts[rand]
  var textara = text.split('')
  var loop = setInterval(function () {
    if (textara.length != 0) {
      igracdrugi.value += textara.shift()
    } else {
      clearInterval(loop)
      winner++
      dugmedrugi.className = 'form-control btn btn-success'
      dugmedrugi.innerHTML = 'Position : ' + winner
    }
  }, 250)
}

function comp2() {
  var text = texts[rand]
  var textara = text.split('')
  var loop = setInterval(function () {
    if (textara.length != 0) {
      igractreci.value += textara.shift()
    } else {
      clearInterval(loop)
      winner++
      dugmetreci.className = 'form-control btn btn-success'
      dugmetreci.innerHTML = 'Position : ' + winner
    }
  }, 400)
}
function comp3() {
  var text = texts[rand]
  var textara = text.split('')
  var loop = setInterval(function () {
    if (textara.length != 0) {
      igraccetvrti.value += textara.shift()
    } else {
      clearInterval(loop)
      winner++
      dugmecetiri.className = 'form-control btn btn-success'
      dugmecetiri.innerHTML = 'Position : ' + winner
    }
  }, 350)
}
