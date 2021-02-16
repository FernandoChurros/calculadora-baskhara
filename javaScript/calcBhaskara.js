function calcBhaskara() {
   var A = window.document.getElementById("numA").value
   var B = window.document.getElementById("numB").value
   var C = window.document.getElementById("numC").value
   var reBhas = window.document.getElementById("receiveBhas")
   
   
   reBhas.innerHTML += `<p>a= ${A}, b= ${B}, c= ${C}</p>`
   
   if (B < 0 && C < 0) {
      var delta = ((B)**2) - 4 * A * (C)
      var raizDelta = Math.sqrt(delta)
      // CALCULA O DELTA
      reBhas.innerHTML += `<p>&#120491; = B<sup>2</sup> - 4.A.C</p>`
      reBhas.innerHTML += `<p>&#120491; = (${B})<sup>2</sup> - 4.${A}.(${C}) </p>`
      reBhas.innerHTML += `<p>&#120491; = ${(B)**2} + ${-4 * A * (C)} </p>`
      reBhas.innerHTML += `<p>&#120491; = ${delta} </p>`

      reBhas.innerHTML += `<br><p>x = -(${B}) &#177; &#8730;${delta} / 2 . ${A} </p>`
      reBhas.innerHTML += `<p>x = ${-(B)} &#177; ${raizDelta} / ${2*A} </p>`

      reBhas.innerHTML += `<br><p>x\' = ${-(B)} + ${raizDelta} / ${2*A} </p>`
      reBhas.innerHTML += `<p>x\' = ${-(B) + raizDelta} / ${2 * A} = ${(-(B) + raizDelta) / 2 * A} </p>`

      reBhas.innerHTML += `<br><p>x\' = ${-(B)} - ${raizDelta} / ${2*A} </p>`
      reBhas.innerHTML += `<p>x\' = ${-(B) - raizDelta} / ${2 * A} = ${(-(B) - raizDelta) / 2 * A} </p>`
   } else {
      reBhas.innerHTML = "tá funcionando"
   }
}
