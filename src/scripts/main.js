document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form-area").addEventListener("submit", function (e) {
    e.preventDefault();

    var raioDoCirculo = document.getElementById("raio-circulo").value;
    raioDoCirculo = parseFloat(raioDoCirculo);

    var area = Math.PI * Math.pow(raioDoCirculo, 2);
    document.getElementById("resultado-area").innerText = area.toFixed(2);
    document.querySelector(".resultado").style.display = "block";
  });
});
