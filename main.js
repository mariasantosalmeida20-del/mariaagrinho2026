const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "João acompanhou seu avô ao banco para ajudá-lo a ler e preencher formulários, pois descobriu recentemente que seu avô não sabe ler. Para João isso foi:",
        alternativas: [
            {
                texto: "Preocupante",
                afirmacao: "Você se preocupa com a importância de saber ler e escrever, e acha que a falta dessas habilidades pode ter um impacto significativo na vida das pessoas, especialmente nos dias de hoje. "
            },
            {
                texto: "Normal",
                afirmacao: "Você acha que, apesar de ser importante, encontrar pessoas que não sabem ler e escrever pode ser algo comum, e que isso não é necessariamente surpreendente."
            },
            {
                texto: "Surpreendente",
                afirmacao: "Você acha difícil acreditar que, nos dias de hoje, ainda existem pessoas que não sabem ler e escrever, considerando o acesso a recursos educacionais e a importância dessas habilidades na vida cotidiana."
            }
        ]
    },
    {
        enunciado: "O pai de João não foi aprovado no período de experiência porque não sabia usar computadores e equipamentos tecnológicos. Como João reagiu a essa situação?",
        alternativas: [
            {
                texto: "Achou normal",
                afirmacao: "Você acredita que a falta de habilidades tecnológicas é um problema comum e não vê isso como um fator crítico para o sucesso profissional."
            },
            {
                texto: "Acreditou que seria fácil encontrar um novo emprego",
                afirmacao: "Você considera que as habilidades tecnológicas não são essenciais para todos os empregos e acha que a situação pode ser resolvida sem grandes dificuldades"
            },
            {
                texto: "Ficou preocupado porque seu pai estava desempregado novamente",
                afirmacao: "Você vê as habilidades tecnológicas como fundamentais no mercado de trabalho atual e está preocupado com a dificuldade de seu pai em encontrar um novo emprego devido a essa falta de habilidades."
            }
        ]
    },
    {
        enunciado: "João pesquisou sobre o salário de pessoas sem ensino médio completo e encontrou valores de R$ 1.400,00 por mês. Como João reagiu a essa informação?",
        alternativas: [
            {
                texto: "Achou normal",
                afirmacao: "Você considera que o salário de R$ 1.400,00 é uma faixa esperada para pessoas sem ensino médio completo e não vê isso como uma situação fora do comum."
            },
            {
                texto: "Achou ruim e não gostou do salário",
                afirmacao: "Você acha que o salário de R$ 1.400,00 é baixo e não é satisfatório para quem não tem ensino médio completo, demonstrando descontentamento com essa faixa salarial."
            },
            {
                texto: "Achou legal e gostou do salário",
                afirmacao: "Você vê o salário de R$ 1.400,00 como razoável e até positivo, considerando que pode ser uma quantia aceitável para quem não possui ensino médio completo."
            }
        ]
    },
    {
        enunciado: "Se João descobrisse que as pessoas com ensino superior completo ganham em média R$ 6.000,00 por mês, como ele reagiria ao comparar com o salário de quem não tem ensino médio completo? ",
        alternativas: [
            {
                texto: "Achou a diferença significativa",
                afirmacao: "Você percebe que há uma grande diferença entre os salários de pessoas com ensino superior e aquelas sem ensino médio completo, reconhecendo a importância da educação para obter melhores oportunidades."
            },
            {
                texto: "Achou que a diferença não é importante",
                afirmacao: "Você acredita que, apesar da diferença salarial, outras variáveis podem ser mais relevantes e que a educação não é o único fator que influencia o salário. "
            },
            {
                texto: "Achou que os salários são mais iguais do que imaginava",
                afirmacao: "Você pensou que a diferença entre os salários de diferentes níveis de educação não é tão grande quanto esperado, considerando que a educação não é o único determinante de salários. "
            }
        ]
    },
    {
        enunciado: "Se João soubesse que muitas vagas de emprego exigem habilidades tecnológicas básicas, como ele reagiria sabendo que seu pai tem dificuldades com tecnologia",
        alternativas: [
            {
                texto: "Acharia que isso é um desafio significativo para o pai",
                afirmacao: "Você vê as dificuldades com tecnologia como um grande obstáculo para conseguir um emprego, especialmente em um mercado que exige habilidades tecnológicas básicas."
            },
            {
                texto: "Acharia que isso pode ser superado com algum treinamento",
                afirmacao: "Você acredita que, com treinamento adequado, as dificuldades com tecnologia podem ser superadas e que seu pai ainda pode ter boas chances de encontrar um emprego."
            },
            {
                texto: "Acharia que isso não afetará as chances de seu pai encontrar um emprego",
                afirmacao: "Você pensa que, apesar das dificuldades com tecnologia, isso não deve ser um fator determinante para a dificuldade de seu pai em encontrar um emprego."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Suas perspectivas educacionais...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();