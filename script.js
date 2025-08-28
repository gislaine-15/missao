const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
      enunciao: "Quantos jogadores compõem uma equipe de voleibol em quadra durante uma partida?",
      alternativas: [
        {
            texto:"6",
            afirmação:"resposta correta",
            pontos:1
        },
        {
            texto:"7",
            afirmação:"resposta incorreta",
            pontos:0
        }
      ]
    },
    {
      enunciado: "Qual é o nome do movimento usado para começar o jogo no voleibol?",
      alternativas: [
        {
            texto:"Batida",
            afirmação:"resposta incorreta",
            pontos:0
        },
        {
            texto:"Saque",
            afirmação:"resposta correta",
            pontos:1
        }
      ]
    },
     {
      enunciao: "Quantos sets um jogo de voleibol geralmente possui?",
      alternativas: [
        {
            texto:"5",
            afirmação:"resposta incorreta",
            pontos:0
        },
        {
            texto:"3",
            afirmação:"resposta correta",
            pontos:1
        }
      ]
    },
{
      enunciao: "Qual é o nome do jogador responsável por distribuir a bola para os atacantes durante o jogo?",
      alternativas: [
        {
            texto:"Levantador",
            afirmação:"resposta correta",
            pontos:1
        },
        {
            texto:"Atacante",
            afirmação:"resposta incorreta",
            pontos:0
        }
      ]
    },
    {
      enunciao: " Qual é a marcação numérica de pontos necessária para vencer um set no voleibol?",
      alternativas: [
        {
            texto:"30",
            afirmação:"resposta incorreta",
            pontos:0
        },
        {
            texto:"25",
            afirmação:"resposta correta",
            pontos:1
        }
      ]
    },

]
let atual=0;
let perguntaAtual;
let historiaFinal="";
let pontos=0;

function mostraPergunta(){
    perguntaAtual=perguntas[atual];
    caixaPerguntas.textContent=perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(alternativa) { 
    const afirmacao = alternativa.afirmacao; 
    historiaFinal = afirmacao; 
    pontos += alternativa.pontos;  
    atual++; 

    if (atual < perguntas.length) { 
        mostraPergunta();  
    } else {
        exibeResultado();  
    }
}

function exibeResultado() { 
    caixaPerguntas.textContent = "Fim do Quiz!"; 
    caixaAlternativas.textContent = "";  
    textoResultado.textContent = `Sua pontuação final é: ${pontos} pontos.`;  

    if (pontos === perguntas.length) {
        textoResultado.textContent += " Parabéns! Você acertou todas as questões!"; 
    } else if (pontos > perguntas.length / 2) {
        textoResultado.textContent += " Bom trabalho, você teve um desempenho legal!"; 
    } else {
        textoResultado.textContent += " Você pode melhorar! Tente novamente!"; 
    }
}

mostraPergunta();

