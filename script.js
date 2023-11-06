document.addEventListener("DOMContentLoaded", function () {
  const tipoSeguro = document.getElementById("tipo_seguro");
  const valorSeguro = document.getElementById("valor_seguro");
  const valor = document.getElementById("valor");

  tipoSeguro.addEventListener("change", function () {
    const selectedOption = tipoSeguro.value;
    let seguroValor = 0;

    if (selectedOption === "basico") {
      seguroValor = 500;
    } else if (selectedOption === "intermedio") {
      seguroValor = 1000;
    } else if (selectedOption === "premium") {
      seguroValor = 1500;
    }

    valor.innerText = "$" + seguroValor;
    valorSeguro.style.display = "block";
  });
});
