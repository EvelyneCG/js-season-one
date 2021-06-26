// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    // your code here
document.getElementById("data-hover").addEventListener("mouseover", mouseOver);
document.getElementById("src").addEventListener("mouseout", mouseOut);

function mouseOver() {
  this.src = '../../_shared/img/kiss-wink-heart.svg';
}

function mouseOut() {
    this.src = '../../_shared/img/kiss.svg';
}
})();
