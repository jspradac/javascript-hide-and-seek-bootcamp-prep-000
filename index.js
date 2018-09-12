function getFirstSelector(selector) {
return document.querySelector(selector);  
}
function nestedTarget(target, nested) {
  return document.querySelector('#nested .target');
}
function increaseRankBy(n) {
  const rank = document.querySelectorAll(".ranked-list li");
  for (let i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n;
  }
}
function deepestChild() {
  const deep = document.querySelectorAll("#grand-node div");
  return deep[deep.length - 1];
}