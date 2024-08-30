//Objeto window = janela do navegador
// window.console.log("Testei")
// window.alert("Alertei")
// window.prompt("Diz pra mim, o que eu já sei")

//objeto document = código html
// console.log(document.head)
// console.log(document.body)

// Elementos por tag name
// var titulo = document.getElementsByTagName("h1")
// console.log(titulo)
//Elementos por class name
// var paragrafos = document.getElementsByClassName("para")
// console.log(paragrafos)
//Elementos por id name
// var para3 = document.getElementById("p3")
// console.log(para3)

// paragrafos[0].innerText = "Tauba"
// para3.innerHTML = "<h3> Novo texto aqui</h3>"

// var p1 = document.getElementsByTagName("p")[0]
// p1.style.backgroundColor = "red"
// para3.style.color = "green"

// function cliquei(){
//     console.log("Cliquei de novo")
// }

function outroFoco(){
    console.log("Mudei o foco, não está mais na caixa");
    
}

// function trocaTexto(){
//     console.log("Estou Digitando");
    
// }

function trocaTexto(textoCaixinha){
    var texto = document.getElementById("textoPraTrocar")
    texto.innerText = textoCaixinha.value
}

function corVerde(elemento){
    elemento.style.color = "green"
    elemento.style.fontSize = "60px"
}

function corAzul(elemento){
    elemento.style.color = "blue"
    elemento.style.fontSize = "30px"
}