function clicou(){
	document.getElementById("agradecimento").innerHTML = "<b> Obrigado por clicar </b>";
	//console.log(document.getElementById("agradecimento"));
	//alert("Obrigado por clicar");
}

function redirecionar(){
	window.open("https://www.google.com.br/");
	//window.location.href = "https://www.google.com.br/";
}

function trocar(elemento){
	//document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
	elemento.innerHTML = "Obrigado por passar o mouse";
	//alert("trocar texto");
}
function voltar(elemento){
	//document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
	elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
	alert("pagina carregada");
}

function fubcaoChange(elemento){
	console.log(elemento.value)
}
/*
function validaIdade(idade){
	var validar;
	if(idade >=18){
		var validar = true;
	}else{
		validar = false;
	}
	return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/

/*
function soma(n1,n2){
	return n1+n2;
}

function setReplace(frase, nome, novo_nome){
	return frase.replace(nome, novo_nome);
}

alert (soma(5, 10));
alert (setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/
/*
var count;
for(count=0; count<=5; count++){
	alert(count);
};
*/

/*
var count =0;
while(count <= 5){
	console.log(count);
	count++;
};
*/

/*
var idade = prompt("Qual a sua idade");
if (idade>=18){
	alert("maior de idade");
}else{
	alert("menor de idade");
};
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"} ];
console.log(frutas)
alert(frutas[1].nome);
*/

//var lista =["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome = "Lucas ";
//var n1 = 5;
//var n2 = 3;
//var frase = "bom dia";
//alert (nome + " tem " + idade);
//alert (idade + idade2);
//console.log(nome);
//console.log(n1*n2);
//console.log(frase.toLocaleUpperCase);
//alert (frase.replace("bom dia","boa noite"));