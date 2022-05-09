// let titulo = document.querySelector(".pregunta")
        
//         titulo.addEventListener("click", () => {
//           titulo.classList.toggle("cambiante")
//         });



// var divs = document.getElementsByClassName(".pregunta");
    // for (var i=0; i< divs.length; i++) {

    //     divs[i].addEventListener("click",function() {
	// 	   divs.classList.toggle("cambiante"); 
	    //     });
    // }



var elementos = document.querySelectorAll('.pregunta');
elementos.forEach(function(elemento) {

  var id = elemento.firstChild.nodeValue;

  elemento.addEventListener('click', function() {
    // console.log('Elemento ' + id + ' clickeado');
    elemento.classList.toggle('cambiante');
  });
  
});

var acc = document.getElementsByClassName("pregunta");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
