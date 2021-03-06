var footfall = 0;

function countfootfall() {
  if (footfall < 30) {
    footfall += 5;
  }
  document.getElementById('counterfootfall').innerHTML = footfall + 'k+';
  setTimeout(countfootfall, 100);
}

var colleges = 0;

function countcolleges() {
  if (colleges < 1000) {
    colleges += 5;
  }
  document.getElementById('countercolleges').innerHTML = colleges + '+';
  setTimeout(countcolleges, 3);
}

var events = 0;

function countevents() {
  if (events < 3000) {
    events += 10;
  }
  document.getElementById('counterevents').innerHTML = events + '+';
  setTimeout(countevents, 1);
}

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    top + height <= window.pageYOffset + window.innerHeight &&
    left + width <= window.pageXOffset + window.innerWidth
  );
}

var flag = 0;
var aboutus = function() {
  if (elementInViewport(document.querySelector('.so'))) {
    countcolleges();
    countevents();
    countfootfall();
  }
  setTimeout(aboutus, 500);
};
aboutus();
