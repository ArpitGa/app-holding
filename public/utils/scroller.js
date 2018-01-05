var list = document.getElementsByClassName("header-nav")[0].getElementsByTagName("li");
var position = {};
var elementID = {
  "0": "about_heading",
  "2": "contact_lvh"
}

function scrollToContent(idx) {
  console.log(list[idx]);
  var pos = getPosition(document.getElementById(elementID[idx]));
  console.log(pos);
  scroller(window, pos.y, 1000)
};

function scroller(element, to, duration) {
  console.log("scr");
  let start = element.scrollY
  let change = to - start
  let increment = 20

  let animateScroll = (elapsedTime) => {
    elapsedTime += increment;
    let position = easeInOutQuad(elapsedTime, start, change, duration);
    element.scrollTo(0, position);
    if (elapsedTime < duration) {
      setTimeout(function () {
        animateScroll(elapsedTime);
      }, increment);
    }
  }
  animateScroll(0);
}

function easeInOutQuad(elapsedTime, start, change, duration) {
  elapsedTime /= duration / 2
  if (elapsedTime < 1) {
    return change / 2 * elapsedTime * elapsedTime + start
  }
  elapsedTime -= 1
  return -change / 2 * (elapsedTime * (elapsedTime - 2) - 1) + start
}

$(document).ready(function(){
  console.log("done");
  for(let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function() {
        scrollToContent(i);
    }, false);
  }
});

function getPosition(el) {
  var xPos = 0;
  var yPos = 0;

  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}
