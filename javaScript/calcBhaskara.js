function calcBhaskara() {

   let A = window.document.getElementById("numA").value
   let B = window.document.getElementById("numB").value
   let C = window.document.getElementById("numC").value
   const reBhas = window.document.getElementById("receiveBhas")

   let delta = ((B) ** 2) - 4 * A * (C)
   let raizDelta = Math.sqrt(delta)

   function createElemento(tag, content, atributo) {
      let elemento = document.createElement(tag);
      elemento.classList.add(atributo);
      elemento.textContent = content;
      reBhas.appendChild(elemento);
   }

   reBhas.innerHTML = "<p class='resultado'> -B ± √ 𝚫 / 2 . A </p>"
   createElemento('p', `a= ${A}, b= ${B}, c= ${C}`);

   createElemento('p', `𝚫 = B \u00B2 - 4.A.C`);
   createElemento('p', `𝚫 = (${B})\u00B2 - 4.${A}.(${C})`);
   createElemento('p', `𝚫 = ${(B)**2} + ${-4 * A * (C)}`);
   createElemento('p', `𝚫 = ${delta}`);


   createElemento('p', `x = -(${B}) ± √${delta} / 2 . ${A}`);
   createElemento('p', `x = ${-(B)} ± ${raizDelta} / ${2*A} `);

   createElemento('p', `x\' = ${-(B)} + ${raizDelta} / ${2*A}`);
   createElemento('p', `x\' = ${-(B) + raizDelta} / ${2 * A} = ${(-(B) + raizDelta) / 2 * A}`, 'resultado');

   createElemento('p', `x\'\' = ${-(B)} - ${raizDelta} / ${2*A}`);
   createElemento('p', `x\'\' = ${-(B) - raizDelta} / ${2 * A} = ${(-(B) - raizDelta) / 2 * A}`, 'resultado');
}

// &#120491; = 𝚫  &#177; = ±   &#8730; = √