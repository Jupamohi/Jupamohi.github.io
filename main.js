// Con "reducir movimiento" activado, el punto del anillo se queda quieto en el primer nodo.
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) return;
  var anim = document.querySelector(".packet animateMotion");
  if (anim) anim.remove();
})();
