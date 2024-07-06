







let result = {

	D: 0,

	I: 0,

	C: 0,

	N: 0,

	M: 0,

	R: 0,

	U: 0,

	G: 0,

	E: 0

}



let points = [

			[1,1,1,1,1,0,0,1,0],

			[1,1,1,1,1,1,1,1,1],

			[1,0,0,0,0,0,0,0,0],

			[1,0,1,0,0,0,0,1,0],

			[0,0,1,1,0,0,0,0,0],

			[0,0,1,1,0,0,0,0,0],

			[1,0,0,0,0,0,0,0,0],

			[0,0,1,1,0,0,0,0,0],

			[0,1,0,0,0,0,1,1,0],

			[0,0,0,0,0,0,0,1,0],

			[1,0,1,0,1,0,0,0,0],

			[1,0,1,0,1,0,0,0,0],

			[0,0,1,1,0,0,0,1,0],

			[0,0,1,1,0,0,0,0,0],

			[0,0,0,0,1,0,1,0,0],

			[0,0,1,0,0,0,0,1,1],

			[0,0,1,0,0,0,0,0,1],

			[1,1,1,1,1,1,1,1,1],

			[1,0,0,0,0,0,0,0,0],

			[1,0,1,0,0,0,0,1,0],

			[0,0,1,1,0,0,0,0,0],

			[1,1,1,1,1,1,1,1,1],

			[0,0,1,0,1,1,0,0,0],

			[0,0,1,0,1,1,0,0,0],

			[0,0,1,0,1,0,0,0,0],

			[0,1,1,1,0,0,0,0,1],

			[0,1,1,0,0,0,0,0,0],

			[0,0,1,0,0,0,0,1,0],



]



// PROGRESS



// Estilo a números y barra de progreso



let form = document.getElementById('formulario');



let linearProgressBar = document.getElementById('prrogress-bar');  // Fomas de llamar un ID del html al js.

let progressBar = document.querySelector('.circular-progress');

let valueContainer = document.querySelector('.value-container');

let linearValueContainer = document.querySelector('.linear-value-container');

let answerCounter = 0;

let answerYes = [];

let answerNo = [];



showResult();



form.addEventListener('click', (event)=>{ //escuchar el formulario.

	if(event.target.type == 'radio'){

        // Poniendo un visto al numero

		let actualNumber = event.target.offsetParent.childNodes['1']; //propiedades

		actualNumber.style.backgroundColor = '#588c39';

		actualNumber.innerHTML = `<img class="check" src="./AEV_files/check.png" alt="check">` //insertar codigo html

		answerCounter = document.querySelectorAll('.check');  //Contador de checks



        // Incrementar la barra de progreso

		increaseProgressBar(answerCounter.length);



        //Calcular resultados

        let questionNumberString = event.target.className;

        let questionNumber = Number(questionNumberString)



        let answer = event.target.labels[0].innerText;



        if(answer == 'SI' && answerYes[questionNumber-1] !=true ){

            answerYes[questionNumber-1] = true;

            answerNo[questionNumber-1] = false;

            sumPoints(points[questionNumber-1])

            // console.log('answerYes: ' + answerYes)

            // console.log('answerNo: ' + answerNo)

        }else if(answer == 'NO' && answerNo[questionNumber-1] == false){

			answerYes[questionNumber-1] = false;

			answerNo[questionNumber-1] = true;

            // console.log('answerYes: ' + answerYes)

            // console.log('answerNo: ' + answerNo)

			subtractPoints(points[questionNumber-1])

		}



        showResult();



	}

});



function sumPoints(array){

    result.D = result.D + array[0]

	result.I = result.I + array[1]

	result.C = result.C + array[2]

	result.N = result.N + array[3]

	result.M = result.M + array[4]

	result.R = result.R + array[5]

	result.U = result.U + array[6]

	result.G = result.G + array[7]

	result.E = result.E + array[8]

}



function subtractPoints(array){

    if(result.D > 0){

		result.D = result.D - array[0]

	}else{

		result.D = 0

	}



	if(result.I > 0){

		result.I= result.I - array[1]

	}else{

		result.I = 0

	}



	if(result.C > 0){

		result.C = result.C - array[2]

	}else{

		result.C = 0

	}



	if(result.N > 0){

		result.N = result.N - array[3]

	}else{

		result.N = 0

	}



	if(result.M > 0){

		result.M = result.M - array[4]

	}else{

		result.M = 0

	}



	if(result.R > 0){

		result.R = result.R - array[5]

	}else{

		result.R = 0

	}



	if(result.U > 0){

		result.U = result.U - array[6]

	}else{

		result.U = 0

	}



	if(result.G > 0){

		result.G = result.G - array[7]

	}else{

		result.G = 0

	}



	if(result.E > 0){

		result.E = result.E - array[8]

	}else{

		result.E = 0

	}



}



function showResult(){







	/*

	Digestivo 11

	Cardiovascular 7

	General 22

	Nervioso 11

	Inmunológico 10

	Resopiratorio 5

	Urinario 5

	Endócrino 11

	Estructural 6

	*/



	let DiconProgressBar = document.querySelector('#D-icon-circular-progress'); // . clases  #ides.

	let IiconProgressBar = document.querySelector('#I-icon-circular-progress');

	let CiconProgressBar = document.querySelector('#C-icon-circular-progress');

	let NiconProgressBar = document.querySelector('#N-icon-circular-progress');

	let MiconProgressBar = document.querySelector('#M-icon-circular-progress');

	let RiconProgressBar = document.querySelector('#R-icon-circular-progress');

	let UiconProgressBar = document.querySelector('#U-icon-circular-progress');

	let GiconProgressBar = document.querySelector('#G-icon-circular-progress');

	let EiconProgressBar = document.querySelector('#E-icon-circular-progress');



	let DIconCircularProgressContainer = document.querySelector('#D-icon-circular-progress-container')

	let IIconCircularProgressContainer = document.querySelector('#I-icon-circular-progress-container')

	let CIconCircularProgressContainer = document.querySelector('#C-icon-circular-progress-container')

	let NIconCircularProgressContainer = document.querySelector('#N-icon-circular-progress-container')

	let MIconCircularProgressContainer = document.querySelector('#M-icon-circular-progress-container')

	let RIconCircularProgressContainer = document.querySelector('#R-icon-circular-progress-container')

	let UIconCircularProgressContainer = document.querySelector('#U-icon-circular-progress-container')

	let GIconCircularProgressContainer = document.querySelector('#G-icon-circular-progress-container')

	let EIconCircularProgressContainer = document.querySelector('#E-icon-circular-progress-container')



	changeBackgroundColor(result.D, DIconCircularProgressContainer)

	changeBackgroundColor(result.I, IIconCircularProgressContainer)

	changeBackgroundColor(result.C, CIconCircularProgressContainer)

	changeBackgroundColor(result.N, NIconCircularProgressContainer)

	changeBackgroundColor(result.M, MIconCircularProgressContainer)

	changeBackgroundColor(result.R, RIconCircularProgressContainer)

	changeBackgroundColor(result.U, UIconCircularProgressContainer)

	changeBackgroundColor(result.G, GIconCircularProgressContainer)

	changeBackgroundColor(result.E, EIconCircularProgressContainer)







	iconIncreaseBar(DiconProgressBar, calculatePercentage(result.D, 11), result.D)

	iconIncreaseBar(IiconProgressBar, calculatePercentage(result.I, 7), result.I) //Cardiovascular

	iconIncreaseBar(CiconProgressBar, calculatePercentage(result.C, 22), result.C) //General

	iconIncreaseBar(NiconProgressBar, calculatePercentage(result.N, 11), result.N)

	iconIncreaseBar(MiconProgressBar, calculatePercentage(result.M, 10), result.M)

	iconIncreaseBar(RiconProgressBar, calculatePercentage(result.R, 5), result.R)

	iconIncreaseBar(UiconProgressBar, calculatePercentage(result.U, 5), result.U)

	iconIncreaseBar(GiconProgressBar, calculatePercentage(result.G, 11), result.G) //Endócrino

	iconIncreaseBar(EiconProgressBar, calculatePercentage(result.E, 6), result.E)



	console.log(result.D)

	console.log(result.I)

	console.log(result.C)

	console.log(result.N)

	console.log(result.M)

	console.log(result.R)

	console.log(result.U)

	console.log(result.G)

	console.log(result.E)





    // document.getElementById('resultadoD').innerHTML = calculateResultInWords(result.D);

	// document.getElementById('resultadoI').innerHTML = calculateResultInWords(result.I);

	// document.getElementById('resultadoC').innerHTML = calculateResultInWords(result.C);

	// document.getElementById('resultadoN').innerHTML = calculateResultInWords(result.N);

	// document.getElementById('resultadoM').innerHTML = calculateResultInWords(result.M);

	// document.getElementById('resultadoR').innerHTML = calculateResultInWords(result.R);

	// document.getElementById('resultadoU').innerHTML = calculateResultInWords(result.U);

	// document.getElementById('resultadoG').innerHTML = calculateResultInWords(result.G);

	// document.getElementById('resultadoE').innerHTML = calculateResultInWords(result.E);







// ESTO SI FUNCIONA

    /* document.getElementById('digestivo').innerText = `Digestivo: ${result.D}`

	document.getElementById('intestinal').innerText = `Intestinal: ${result.I}`

	document.getElementById('circulatorio').innerText = `Circulatorio: ${result.C}`

	document.getElementById('nervioso').innerText = `Nervioso: ${result.N}`

	document.getElementById('inmunologico').innerText = `Inmunológico: ${result.M}`

	document.getElementById('respiratorio').innerText = `Respiratorio: ${result.R}`

	document.getElementById('urinario').innerText = `Urinario: ${result.U}`

	document.getElementById('glandular').innerText = `Glandular: ${result.G}`

	document.getElementById('estructural').innerText = `Estructural: ${result.E}`

 */



    document.getElementById('RDigestivo').innerText = `${calculateResultInWords(result.D)}`

	document.getElementById('RIntestinal').innerText = `${calculateResultInWords(result.I)}`

	document.getElementById('RCirculatorio').innerText = `${calculateResultInWords(result.C)}`

	document.getElementById('RNervioso').innerText = `${calculateResultInWords(result.N)}`

	document.getElementById('RInmunologico').innerText = `${calculateResultInWords(result.M)}`

	document.getElementById('RRespiratorio').innerText = `${calculateResultInWords(result.R)}`

	document.getElementById('RUrinario').innerText = `${calculateResultInWords(result.U)}`

	document.getElementById('RGlandular').innerText = `${calculateResultInWords(result.G)}`

	document.getElementById('REstructural').innerText = `${calculateResultInWords(result.E)}`

}



function calculatePercentage(value, base){

	return Math.floor((100 * value) / base);

}



function changeBackgroundColor(number, element){



	let innerElement = element.firstElementChild.firstElementChild;



	if(number>=0 && number<=1){



		element.style.backgroundColor = "#588c39"

		element.style.boxShadow= "0 0 10px #588c39";

		innerElement.style.backgroundColor = "#588c39"





	}else if(number>=2 && number<=3){



		element.style.backgroundColor= "#FED140";

		element.style.boxShadow= "0 0 10px #FED140";

		innerElement.style.backgroundColor = "#FED140"



	}else if(number>=4 && number<=5){



		element.style.backgroundColor= "#f7941d";

		element.style.boxShadow= "0 0 10px #f7941d"

		innerElement.style.backgroundColor = "#f7941d"



	}else if(number>=6 ){



		element.style.backgroundColor= "#ED1B24";

		element.style.boxShadow= "0 0 10px #ED1B24";

		innerElement.style.backgroundColor = "#ED1B24"



	}

}



function iconIncreaseBar(element, porcentage, number){



	if(number>=0 && number<=1){

		element.style.transition = "all .8s ease-in-out"

		element.style.background = `conic-gradient(#fff ${porcentage*3.6}deg, #588c39 ${porcentage*3.6}deg)`;

		}else if(number>=2 && number<=3){

			element.style.transition = "all .8s ease-in-out"

		element.style.background = `conic-gradient(#fff ${porcentage*3.6}deg, #FED140 ${porcentage*3.6}deg)`;

	}else if(number>=4 && number<=5){

		element.style.transition = "all .8s ease-in-out"

		element.style.background = `conic-gradient(#fff ${porcentage*3.6}deg, #f7941d ${porcentage*3.6}deg)`;

	}else if(number>=6 ){

		element.style.transition = "all .8s ease-in-out"

		element.style.background = `conic-gradient(#fff ${porcentage*3.6}deg, #ED1B24 ${porcentage*3.6}deg)`;

	}

}



function calculateResultInWords(number){



    if(number>=0 && number<=1){

		return "Óptima"

	}

	if(number>=2 && number<=3){

		return "Buena"

	}

	if(number>=4 && number<=5){

		return "Regular"

	}

	if(number>=6 ){

		return "Deficiente"

	}



}







function increaseProgressBar(answerCounter){//contador de elementos

	let porcentage = Math.floor((100 * answerCounter) / 28); // REGLA DE TRES

	valueContainer.innerHTML = `${porcentage}<span>%</span>` //Forma de llamar una variable de Java a Html.

	progressBar.style.background = `conic-gradient(#588c39 ${porcentage*3.6}deg, #CACECF ${porcentage*3.6}deg)`;

	linearProgressBar.value = porcentage  //Propiedads del html como value.

	linearValueContainer.innerHTML = `${porcentage}<span>%</span>`

}



valueContainer.innerHTML = `${answerCounter}<span> %</span>`





// Modal de resultado

// let resultBtn = document.getElementById('resultBtn');

let acceptResultBtn = document.getElementById("acceptResultBtn");



// resultBtn.addEventListener('click', ()=>{

// 	if(answerCounter.length == 38){

// 		calculate();

// 	}else{

// 		let resultModal = document.getElementById('resultModal');

// 		resultModal.style.display = "block";//mostrar modales.

// 	}

// });





acceptResultBtn.addEventListener('click', ()=>{

	resultModal.style.display = "none"; //ocultar modal

});



// Modal Exportar

let exportBtn = document.getElementById('exportBtn');

let downloadBtn = document.getElementById('descargarBtn');

let inputName = document.getElementById('inputName');

let inputEmail = document.getElementById('inputEmail');

let nombreError = document.getElementById('nombreError');

let emailError = document.getElementById('emailError');

let inputPhone = document.getElementById('inputPhone');



function validateEmpty(valueInput, divInput, divError, nameInput ){

	if(valueInput.length == 0){

		divInput.style.border = '1px solid red';

		divError.innerHTML = `<p class="error">${nameInput} no puede estar vacío</p>`

		return false;

	}else{

		divInput.style.border = '1px solid hsl(246, 25%, 77%)';

		divError.innerHTML = '';

		return true;

	}

}



function validateEmail(valueInput, divInput, divError, nameInput){

    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if(regExp.test(valueInput) == true){

        divInput.style.border = '1px solid hsl(246, 25%, 77%)';

		divError.innerHTML = '';

		return true;

    }else{

        divInput.style.border = '1px solid red';

		divError.innerHTML = `<p class="error">${nameInput} está incorrecto.</p>`

		return false;

    }

}





let radioHombre = document.getElementById('hombre');

let genre;



exportBtn.addEventListener('click', ()=>{

	if(answerCounter.length == 28){                          //PRUEBAS!!



		let formModal = document.getElementById("formModal");

		formModal.style.display = 'block'



		downloadBtn.addEventListener('click', event=>{

			event.preventDefault();

			// VALIDAR SI LOS IMPUT ESTAN LLENOS

			/* if(validateEmpty(inputName.value, inputName, nombreError, 'El campo Nombre') &&

			validateEmail(inputEmail.value, inputEmail, emailError, 'El Email') == true){ */

				formModal.style.display = 'none'



				if(radioHombre.checked == true){

					genre = 'Hombre'

				}else{

					genre = 'Mujer'

				}



				console.log('Nombre: '+ inputName.value)

				console.log('Correo: '+ inputEmail.value)

				console.log('Genero: '+ genre)

				console.log('Numero: '+ inputPhone.value)



				exportarPDF();

			//}





		})















	}else{

		let resultModal = document.getElementById('resultModal');

		resultModal.style.display = "block";

	}

});





// Imprimir PDF



function exportarPDF(){



	//creo un nuevo documento PDF:



	const doc = new jsPDF();



	//Agrego una imagen:



	let imgData = "data:image/png;base64,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";





// Función para convertir colores hexadecimal a RGB

function hexToRgb(hex) {

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result ? {

        r: parseInt(result[1], 16),

        g: parseInt(result[2], 16),

        b: parseInt(result[3], 16)

    } : null;

}



// Añade la imagen

doc.addImage(imgData, 'JPEG', 20, 10, 50, 20);



// Titulo principal

doc.setFontSize(14);

doc.setTextColor(40);

doc.setFont('Arial', 'normal');
doc.text('ANÁLISIS DE ESTILO DE VIDA', 105, 20, { align: 'center' });



// Agrega una línea divisoria

doc.setDrawColor(0);

doc.setLineWidth(1);

doc.line(20, 30, 180, 30);



// Subtitulo

doc.setFontSize(10);

doc.setFont('Arial', 'normal');

doc.text('RESULTADOS:', 20, 65);



// Agregar el nuevo texto después de la línea divisoria

doc.setFontSize(10);

doc.setFont('Arial', 'normal');

let tipsText = 'Tips para interpretar tus resultados. En Vida Natural Elite tenemos productos para tu bienestar, si en tus resultados encuentras "Deficiente" o "Regular" te podemos recomendar varios de nuestros productos para que tus cuerpo funcione adecuadamente de acuerdo a tus necesidades.';

let splitTipsText = doc.splitTextToSize(tipsText, 150); // Asegurando que el texto no exceda el ancho de la página

doc.text(splitTipsText, 20, 40); // Ajusta el segundo argumento (50) para cambiar la posición vertical del texto



// Calcula la nueva posición Y después del texto

let lineHeight = doc.getLineHeight();

let lines = splitTipsText.length;

let nextYPos = 50 + (lines * lineHeight) + 10; // +10 para un poco de espacio después del texto



// Define los colores para cada sistema

let colors = {

  Digestivo: '#28594C',

  Cardiovascular: '#BF522D',

  'Salud General': '#D68132',

  Nervioso: '#F5CF3C',

  Inmunológico: '#1A3C4E',

  Respiratorio: '#4E5A34',

  Urinario: '#E0A7BE',

  Endócrino: '#3C7F6F',

  Estructural: '#EC8A6D'

};



// Define los resultados para cada sistema

let results = {

  Digestivo: calculateResultInWords(result.D),

  Cardiovascular: calculateResultInWords(result.I),

  'Salud General': calculateResultInWords(result.C),

  Nervioso: calculateResultInWords(result.N),

  Inmunológico: calculateResultInWords(result.M),

  Respiratorio: calculateResultInWords(result.R),

  Urinario: calculateResultInWords(result.U),

  Endócrino: calculateResultInWords(result.G),

  Estructural: calculateResultInWords(result.E)

};



// Añade los resultados con sus colores correspondientes

let yPos = 70; // Se cambió de 45 a 70

for (let system in colors) {

  let rgb = hexToRgb(colors[system]);

  doc.setFillColor(rgb.r, rgb.g, rgb.b);

  doc.rect(20, yPos + 3, 5, 5, 'F'); // añade cuadro de color

  doc.setTextColor(0);

  doc.text(`${system}: ${results[system]}`, 30, yPos + 7);

  yPos += 8;

}

// Restaura color del texto para la información del usuario

doc.setTextColor(0);











// Añade información de usuario

let pageHeight = doc.internal.pageSize.height;

let userTextY = pageHeight - 20; // Acercamos aún más los datos de usuario al borde del documento



// Añade la invitación y el eslogan

let pageWidth = 210; // Ancho de la página

let inviteTextY = userTextY - 70; // Ajustamos la altura del rectángulo

let inviteText = "Te invitamos a contactar a Daniel Miño en su whatsapp +593993348801 para obtener la recomendación de productos adecuados para ti.";

let sloganText = '"Mereces estar saludable. Productos que cambian al mundo."';



doc.setFontSize(10);

doc.setFont('helvetica', 'normal');

doc.setTextColor(0);

doc.setDrawColor(0);

doc.setFillColor(233, 236, 239);  // Color de relleno gris claro



let rectWidth = 160;

let rectX = (pageWidth - rectWidth) / 2; // Centra el rectángulo horizontalmente en el documento

doc.roundedRect(rectX, inviteTextY, rectWidth, 30, 3, 3, 'FD');  // Ajustamos la altura del rectángulo



let splitInviteText = doc.splitTextToSize(inviteText, 150);

let longestLineInvite = splitInviteText.reduce((max, line) => Math.max(max, doc.getStringUnitWidth(line)), 0);

let inviteTextWidth = longestLineInvite * doc.internal.getFontSize() / doc.internal.scaleFactor;

let inviteTextX = rectX + (rectWidth - inviteTextWidth) / 2; // centra horizontalmente el texto en el rectángulo

doc.text(splitInviteText, inviteTextX, inviteTextY + 10);  // Añade el texto de la invitación



doc.setFont('Montserrat', 'italic');

doc.setFontSize(12);

doc.setTextColor(0, 128, 0);

let splitSloganText = doc.splitTextToSize(sloganText, 150);

let sloganTextWidth = doc.getStringUnitWidth(sloganText) * doc.internal.getFontSize() / doc.internal.scaleFactor;

let sloganTextX = rectX + (rectWidth - sloganTextWidth) / 2; // centra horizontalmente el eslogan en el rectángulo

doc.text(splitSloganText, sloganTextX, inviteTextY + 30 - 5);  // Añade el eslogan un poco más arriba del borde inferior del rectángulo



doc.setFont('helvetica', 'normal');

doc.setFontSize(10);

doc.setTextColor(0);











// Configuración inicial

doc.setFontSize(12);

doc.setDrawColor(0);

doc.setFillColor(220, 220, 220);



// Define la sección del enlace

let linkSectionYStart = 240;

let linkSectionHeight = 30; // Reducir la altura del rectángulo

let linkSectionYEnd = linkSectionYStart + linkSectionHeight;

let linkSectionXStart = (pageWidth - rectWidth) / 2;

let linkSectionXEnd = linkSectionXStart + rectWidth;



// Dibuja el rectángulo de la sección de enlaces

doc.roundedRect(linkSectionXStart, linkSectionYStart, rectWidth, linkSectionHeight, 3, 3, 'FD');



// Configura y agrega el texto informativo

doc.setFont('courier', 'italic');

doc.setFontSize(8);

let instructions = 'Haga clic en tú país que deseas consultar. Si no aparece su país, lo invitamos a contactarte con Daniel Miño al 593993348801 para la recomendación de productos más adecuada.';

let instructionsSplit = doc.splitTextToSize(instructions, rectWidth - 20);

doc.text(instructionsSplit, linkSectionXStart + 10, linkSectionYStart + 10);



// Configura los enlaces

doc.setFont('courier', 'normal');

doc.setFontSize(12);



let links = [

    { text: 'Colombia', url: 'https://co.aplgo.com/j/921664/' },

    { text: 'Ecuador', url: 'https://ec.aplgo.com/j/921664/' },

    { text: 'Perú', url: 'https://pe.aplgo.com/j/921664/' },

    { text: 'Estados Unidos', url: 'https://us.aplgo.com/j/921664/' },

	{ text: 'Rep. Dominicana', url: 'https://do.aplgo.com/j/921664/' },

];



// Calcula el espacio disponible para los enlaces

let availableSpace = rectWidth - 20;

let totalLinkWidth = links.reduce((total, link) => total + doc.getStringUnitWidth(link.text), 0) * doc.internal.getFontSize() / doc.internal.scaleFactor;

let spaceBetweenLinks = (availableSpace - totalLinkWidth) / (links.length - 1);



let currentX = linkSectionXStart + 10;

let linkYPosition = linkSectionYEnd - 7;

for (let i = 0; i < links.length; i++) {

    let link = links[i];

    let linkWidth = doc.getStringUnitWidth(link.text) * doc.internal.getFontSize() / doc.internal.scaleFactor;

    doc.setTextColor(214, 45, 32);

    doc.textWithLink(link.text, currentX, linkYPosition, { url: link.url });

    currentX += linkWidth;

    if (i < links.length - 1) { // No agrega una barrera después del último enlace

        let barrierWidth = spaceBetweenLinks / 2;

        currentX += barrierWidth;

    }

}



// Restablece la configuración del documento

doc.setFont('helvetica', 'normal');

doc.setFontSize(10);

doc.setTextColor(0);


// Añade información de usuario

doc.text(`Nombre: ${inputName.value}`, 20, userTextY);

doc.text(`Correo: ${inputEmail.value}`, 20, userTextY + 7); // Acercamos los datos de usuario entre sí

doc.text(`Género: ${genre}`, 20, userTextY + 14); // Acercamos los datos de usuario entre sí


// Agrega fecha

let actualDate = new Date();

let months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

let dateString = `${actualDate.getDate()} / ${months[actualDate.getMonth()]} / ${actualDate.getFullYear()}`;

doc.setTextColor(80);

doc.text(`Fecha: ${dateString}`, 150, pageHeight - 10);







// Agrega catálogo de colores en la parte derecha

doc.setFontSize(10);

doc.setTextColor(0);

doc.text('CATÁLOGO DE COLORES', 120, 65);

let yCatalog = 70;

for (let system in colors) {

    let rgb = hexToRgb(colors[system]);

    doc.setFillColor(rgb.r, rgb.g, rgb.b);

    doc.rect(120, yCatalog, 60, 10, 'F'); // Añade rectángulo de color al catálogo

    let textWidth = doc.getStringUnitWidth(system) * doc.internal.getFontSize() / doc.internal.scaleFactor;

    let textOffset = (60 - textWidth) / 2;

    doc.setTextColor(255, 255, 255);  // Define el color del texto en blanco

    doc.text(system, 120 + textOffset, yCatalog + 7);  // Posiciona el texto centrado en el rectángulo

    yCatalog += 12;  // Ajusta la separación entre los rectángulos

}



	//Guardo documento

	doc.save(`${inputName.value}_Análisis_de_Salúd_APLGO.pdf`);



}
