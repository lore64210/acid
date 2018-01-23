


/*Para la galeria principal
---------------------------------------------------------------------------------------------------------------------------*/

var numImg=7;
mostrarImg(numImg);

function posicionMouse(pos){
	mostrarImg(pos)
	numImg=pos;
}

setInterval(function contarSeg(){
	mostrarImg(numImg);
	numImg++;
	if(numImg>8){
		numImg=1;
	}
},5000);

function mostrarImg(num){
	var imagen=document.getElementById("img-principal");

	document.getElementById("descripcion-img1").style.display="none";
	document.getElementById("descripcion-img2").style.display="none";
	document.getElementById("descripcion-img3").style.display="none";
	document.getElementById("descripcion-img4").style.display="none";
	document.getElementById("descripcion-img5").style.display="none";
	document.getElementById("descripcion-img6").style.display="none";
	document.getElementById("descripcion-img7").style.display="none";
	document.getElementById("descripcion-img8").style.display="none";

	document.getElementById("tit-descripcion1").style.display="none";
	document.getElementById("tit-descripcion2").style.display="none";
	document.getElementById("tit-descripcion3").style.display="none";
	document.getElementById("tit-descripcion4").style.display="none";
	document.getElementById("tit-descripcion5").style.display="none";
	document.getElementById("tit-descripcion6").style.display="none";
	document.getElementById("tit-descripcion7").style.display="none";
	document.getElementById("tit-descripcion8").style.display="none";

	switch(num){
		case 1:
			document.getElementById("img-principal").style.backgroundImage="url('../galeria/img1.jpg')";
			document.getElementById("descripcion-img1").style.display="block";
			document.getElementById("tit-descripcion1").style.display="block";
			break;
		case 2:
			imagen.style.backgroundImage="url('../galeria/img2.jpg')";
			document.getElementById("descripcion-img2").style.display="block";
			document.getElementById("tit-descripcion2").style.display="block";
			break;
		case 3:
			imagen.style.backgroundImage="url('../galeria/img3.jpg')";
			document.getElementById("descripcion-img3").style.display="block";
			document.getElementById("tit-descripcion3").style.display="block";
			break;
		case 4:
			imagen.style.backgroundImage="url('../galeria/img4.jpg')";
			document.getElementById("descripcion-img4").style.display="block";
			document.getElementById("tit-descripcion4").style.display="block";
			break;
		case 5:
			imagen.style.backgroundImage="url('../galeria/img5.jpg')";
			document.getElementById("descripcion-img5").style.display="block";
			document.getElementById("tit-descripcion5").style.display="block";
			break;
		case 6:
			imagen.style.backgroundImage="url('../galeria/img6.jpg')";
			document.getElementById("descripcion-img6").style.display="block";
			document.getElementById("tit-descripcion6").style.display="block";
			break;
		case 7:
			imagen.style.backgroundImage="url('../galeria/img7.jpg')";
			document.getElementById("descripcion-img7").style.display="block";
			document.getElementById("tit-descripcion7").style.display="block";
			break;
		case 8:
			imagen.style.backgroundImage="url('../galeria/img8.jpg')";
			document.getElementById("descripcion-img8").style.display="block";
			document.getElementById("tit-descripcion8").style.display="block";
			break;			
	}
}