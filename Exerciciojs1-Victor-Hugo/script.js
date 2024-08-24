//questão 1
function subtrair(valor1, valor2) {
    //Calcula a diferença entre os dois valores
      return valor1 - valor2;
    }
    
    var resultado = subtrair(30, 12);
    //Calcula o resultado
    console.log(resultado);
    //Mostra o resultado no console

//questão 2
function calcularTotalTomadas(t1, t2, t3, t4) {
    // o total de tomadas disponíveis é o número de tomadas da primeira régua
    // mais as tomadas adicionais das outras réguas, menos 3, pois cada régua adicional
    // ocupa uma tomada da régua anterior.
    var totalTomadas = (t1 - 1) + (t2 - 1) + (t3 - 1) + (t4 - 1) + 1;
    
    // mostra o total de tomadas disponíveis
    console.log(totalTomadas);
}

// Exemplo de uso da função com valores de entrada
const t1 = 2; // Número de tomadas da primeira régua
const t2 = 2; // Número de tomadas da segunda régua
const t3 = 2; // Número de tomadas da terceira régua
const t4 = 2; // Número de tomadas da quarta régua

// Chama a função com os valores especificados
calcularTotalTomadas(t1, t2, t3, t4);

//questão 3
function verificarRecordes(resultadoOlimpico, recordeMundial, recordeOlimpico) {
    //verifica se o resultado é um novo recorde mundial
        if (resultadoOlimpico < recordeMundial) {
            console.log("RM");
        } else {
            console.log("*");
        }
    //verifica se o resultado é um novo recorde olimpico
        if (resultadoOlimpico < recordeOlimpico) {
            console.log("RO");
        } else {
            console.log("*");
        }
    }
    // exemplo de uso da função
    var resultadoOlimpico = 10;
    var recordeMundial = 10;
    var recordeOlimpico = 10;
    
    //mostra o resultado
    verificarRecordes(resultadoOlimpico, recordeMundial, recordeOlimpico);


//questão 4
function viagens(A, B, C) {
    // Verifica se todas as caixas podem ser transportadas em uma única viagem
    if ((A + B) < C) {
        console.log(1);
    }
    // Verifica se duas caixas podem ser transportadas em uma viagem
    else if ((A + B) >= C && (A + B) < C) {
        console.log(2);
    }
    // Caso contrário, será necessário 3 viagens
    else {
        console.log(3);
    }
}

// Exemplo de valores
var A = 67;
var B = 67;
var C = 67;

//Mostra o resultado
viagens(A, B, C);

//questão 5
function encontrarIdadeCamila(idade1, idade2, idade3) {
    // Inicialmente, assumimos que Camila é a primeira idade
    var idadeCamila;

    // Verifica qual das idades é a intermediária
    //Verifica se a idade1 está entre as idades idade2 e idade3.
    if ((idade1 > idade2 && idade1 < idade3) || (idade1 < idade2 && idade1 > idade3)) {
        idadeCamila = idade1;
    //Verifica se a idade2 está entre as idades idade1 e idade3.
    } else if ((idade2 > idade1 && idade2 < idade3) || (idade2 < idade1 && idade2 > idade3)) {
        idadeCamila = idade2;
    //Verifica se a idade3 está entre as idades idade1 e idade2.
    } else if ((idade3 > idade1 && idade3 < idade2) || (idade3 < idade1 && idade3 > idade2)) {
        idadeCamila = idade3;
    }

    // Exibir a idade de Camila no console
    console.log(idadeCamila);
}

// Exemplo de uso
//Depois de identificar qual idade está no meio, essa idade é atribuída à variável idadeCamila.
encontrarIdadeCamila(6, 9, 7);

//questão 6
function ajustarVelocidade(A, B, C) {
    // Calcula a distância entre os carros
        var distanciaAB = B - A;
        var distanciaBC = C - B;
    // Verifica a relação das distâncias e decide a ação
        if (distanciaAB < distanciaBC) {
            console.log(1);
        } else if (distanciaAB > distanciaBC) {
            console.log(-1);
        } else {
            console.log(0);
        }
    }
    // Exemplo de uso com valores fornecidos
    var A = 10;
    var B = 23;
    var C = 38;
    //Mostra o Resultado
    ajustarVelocidade(A, B, C);

//questão 7
function diasParaTopoMuro(A, S, D) {
    var alturaAtual = 0;
    var dias = 0;

    while (alturaAtual < A) {
        dias++; // Incrementa o número de dias
        alturaAtual += S; // Sobe a distância durante o dia
        
        if (alturaAtual >= A) {
            break; 
            // Verifica se a altura alcançada é suficiente para atingir o topo. Se sim, o loop é interrompido.
        }
        
        alturaAtual -= D; 
        // Se ainda não alcançou o topo, subtrai a distância que ela desce durante a noite.
    }
    
    console.log(dias);
}

// O número de dias é exibido no console.
diasParaTopoMuro(10000, 100, 50);

//questão 8
function idadeDoFilhoMaisVelho(idadeDonaMonica, idadeFilho1, idadeFilho2) {
    // Calcula a idade do terceiro filho
    var idadeFilho3 = idadeDonaMonica - (idadeFilho1 + idadeFilho2);
    
    // Determina a idade mais velha
    var idadeMaisVelha = idadeFilho1; 
    // Assume inicialmente que o primeiro filho é o mais velho

    // Compara com a idade do segundo filho
    if (idadeFilho2 > idadeMaisVelha) {
        idadeMaisVelha = idadeFilho2;
    }

    // Compara com a idade do terceiro filho
    if (idadeFilho3 > idadeMaisVelha) {
        idadeMaisVelha = idadeFilho3;
    }
    
    // Mostra a idade do filho mais velho
    console.log(idadeMaisVelha);
}

// Exemplo com as idades
idadeDoFilhoMaisVelho(52, 14, 18);

//questão 9
function verificarCapacidade(alunos, monitores) {
    // Define a capacidade máxima do bondinho
    var capacidadeMaxima = 50;
    
    // Calcula o número total de pessoas
    var totalPessoas = alunos + monitores;
    
    // Verifica se o total de pessoas é menor ou igual à capacidade máxima
    if (totalPessoas <= capacidadeMaxima) {
        console.log('S');
        //'S' se todos podem ser transportados em uma única viagem
    } else {
        console.log('N');
        //'N' se não podem ser transportados
    }
}

// Definindo os valores
var numeroDeAlunos = 12;
var numeroDeMonitores = 39;

// Chama a função com os valores definidos
verificarCapacidade(numeroDeAlunos, numeroDeMonitores);