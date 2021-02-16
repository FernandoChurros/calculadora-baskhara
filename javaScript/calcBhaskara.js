function calcBhaskara() {
   var A = window.document.getElementById("numA").value
   var B = window.document.getElementById("numB").value
   var C = window.document.getElementById("numC").value
   var reBhas = window.document.getElementById("receiveBhas")
   
   var delta = ((B)**2) - 4 * A * (C)
   var raizDelta = Math.sqrt(delta)
   
   reBhas.innerHTML = "<p class='resultado'>-B &#177; &#8730; &#120491; / 2 . A </p>"
   reBhas.innerHTML += `<p>a= ${A}, b= ${B}, c= ${C}</p>`
   
   reBhas.innerHTML += `<p>&#120491; = B<sup>2</sup> - 4.A.C</p>`
   reBhas.innerHTML += `<p>&#120491; = (${B})<sup>2</sup> - 4.${A}.(${C}) </p>`
   reBhas.innerHTML += `<p>&#120491; = ${(B)**2} + ${-4 * A * (C)} </p>`
   reBhas.innerHTML += `<p>&#120491; = ${delta} </p>`
   
   reBhas.innerHTML += `<br><p>x = -(${B}) &#177; &#8730;${delta} / 2 . ${A} </p>`
   reBhas.innerHTML += `<p>x = ${-(B)} &#177; ${raizDelta} / ${2*A} </p>`
   
   reBhas.innerHTML += `<br><p>x\' = ${-(B)} + ${raizDelta} / ${2*A} </p>`
   reBhas.innerHTML += `<p class="resultado">x\' = ${-(B) + raizDelta} / ${2 * A} = ${(-(B) + raizDelta) / 2 * A} </p>`
   
   reBhas.innerHTML += `<br><p>x\'\' = ${-(B)} - ${raizDelta} / ${2*A} </p>`
   reBhas.innerHTML += `<p class="resultado">x\'\' = ${-(B) - raizDelta} / ${2 * A} = ${(-(B) - raizDelta) / 2 * A} </p>`
   
}
