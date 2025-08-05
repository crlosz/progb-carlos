document.addEventListener("DOMContentLoaded", () => {
  let contador = 0;
  const contadorCarrito = document.getElementById("contador-carrito");
  const botones = document.querySelectorAll(".btn-carrito");

  botones.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      contador++;
      contadorCarrito.textContent = contador;

      const tarjeta = e.target.closest(".tarjeta");
      const nombre = tarjeta.querySelector("h3").textContent;
      const precio = tarjeta.querySelector(".precio").textContent;

      console.log(`Producto añadido: ${nombre} - ${precio}`);
    });
  });
});