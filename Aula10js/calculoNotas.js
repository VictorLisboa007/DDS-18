var alunos = ["Pedro","Tiago","João"]
var notasA = [8.0, 7.0, 6.0]
var notasB = [7.0, 5.7, 3.3]

function media(nota1, nota2){

    var n1 = nota1
    var n2 = nota2
    var media = (n1 + n2) / 2
    return media
}

function mostraResultados(){
    
    for(var index in alunos){
    var notaPri = notasA[index]
    var notaSeg = notasB[index]
    var mediaAtual = media(notaPri, notaSeg)
    var final = graduado(mediaAtual)
        console.log("O aluno", alunos[index], "teve média de", mediaAtual,"e sua situação final é:", final);
    }
}

function graduado(media){

    if(media >= 7.0){
        return "Aprovado"
    }
    else if(media < 7.0 && media >= 5){
        return "Recuperação"
    }
    else{
        return "Reprovado"
    }
}

mostraResultados()
graduado()
