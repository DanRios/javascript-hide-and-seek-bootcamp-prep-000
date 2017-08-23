function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var nest = document.querySelector('#nested div.target')
  return nest
}

function deepestChild() {
  var listdiv = document.getElementById("grand-node").querySelectorAll('div');
  var find;
  for (let i = 0; i < listdiv.length; i++) {
    find = listdiv[i]
  }
  return find
}

function increaseRankBy(n) {
  var list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for(let i = 0; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString();
  }
}
