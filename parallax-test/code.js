window.addEventListener("load", function () {
  var container = document.querySelector("[data-parallax]");
  var childNodes = container.children;
  for (var n = 0; n < childNodes.length; n++) {
    childNodes[n].setAttribute("data-index", n + 1);
  }
  container.addEventListener("mousemove", function (e) {
    var elms = this.children;
    var windowX = window.innerWidth / 2;
    var windowY = window.innerHeight / 2;
    for (var c = 0; c < elms.length; c++) {
      var motion = parseInt(elms[c].getAttribute("data-index")) / 40;
      var moveX =
        ((windowX - e.clientX) / window.innerWidth) * 100 * motion + 50;
      var moveY =
        ((windowY - e.clientY) / window.innerHeight) * 100 * motion + 50;
      var x = moveX + "%";
      var y = moveY + "%";
      elms[c].style.backgroundPosition = x + " " + y;
    }
  });
});
