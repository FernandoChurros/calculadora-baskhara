function calcBhaskara() {
   var A = window.document.getElementById("numA").value;
   var B = window.document.getElementById("numB").value;
   var C = window.document.getElementById("numC").value;
   var reBhas = window.document.getElementById("receiveBhas");

   // window.document.getElementById("receiveBhas").innerHTML = `valor ${A}, valor ${B}, valor ${C}`

   reBhas.innerHTML = `- ${B} &#177; &#8730; ${B}<sup>2</sup> - 4 . ${A} . ${C} / 2 . ${A}`
   
}