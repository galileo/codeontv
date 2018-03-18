  var swiatloRed = document.getElementsByClassName('light red');
  var swiatloYellow = document.getElementsByClassName('light yellow');
  var swiatloGreen = document.getElementsByClassName('light green');

function stoje () {
    var red = swiatloRed[0]
    var yellow = swiatloYellow[0];
    var green = swiatloGreen[0];
    red.classList.add('active');
    yellow.classList.remove('active');
    green.classList.remove('active');
}

function czekam () {
  var red = swiatloRed[0]
  var yellow = swiatloYellow[0];
  var green = swiatloGreen[0];
  red.classList.add('active');
  yellow.classList.add('active');
  green.classList.remove('active');
}

function ide () {
  var red = swiatloRed[0]
  var yellow = swiatloYellow[0];
  var green = swiatloGreen[0];
  red.classList.remove('active');
  yellow.classList.remove('active');
  green.classList.add('active');
}
function reset () {
  var red = swiatloRed[0]
  var yellow = swiatloYellow[0];
  var green = swiatloGreen[0];
  red.classList.remove('active');
  yellow.classList.remove('active');
  green.classList.remove('active');
}
