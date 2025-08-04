const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está escalando um penhasco e avista duas pontes. A primeira ponte está claramente quebrada, você poderá andar sob ela por alguns metros, mas depois terá apenas 10 segundos para atravessar. A segunda ponte está inteira, mas há jacarés nela e, se você encostar em um, todos acordarão e você terá apenas 10 segundos para fugir. O que você escolhe?",
        alternativas: [
            {
                texto: "Escolho atravessar a primeira ponte quebrada.",
                afirmacao: "Você atravessou a primeira ponte com cuidado, arriscando-se, mas conseguiu chegar ao outro lado a tempo. Agora, sente-se mais confiante em tomar decisões sob pressão."
            },
            {
                texto: "Escolho enfrentar os jacarés e atravessar a segunda ponte.",
                afirmacao: "Com muita cautela, você conseguiu evitar os jacarés e atravessar a ponte. Essa escolha fez você perceber que, às vezes, os maiores riscos podem trazer as maiores recompensas."
            }
        ]
    },
    {
        enunciado: "Após a travessia, você segue pela trilha até encontrar uma bifurcação no caminho. De um lado, a estrada continua com uma subida íngreme e parece levar a uma área mais alta da montanha. Do outro lado, há uma trilha mais tranquila que desce em direção a um vale. Qual direção você escolhe?",
        alternativas: [
            {
                texto: "Escolho a trilha íngreme e sigo subindo.",
                afirmacao: "A subida foi difícil e cansativa, mas ao alcançar o topo você tem uma visão espetacular da paisagem ao seu redor. Se sentiu vitorioso e em contato com a natureza."
            },
            {
                texto: "Escolho a trilha tranquila e desço para o vale.",
                afirmacao: "A descida foi suave e você encontrou um ambiente sereno, com um rio calmo e árvores ao redor. A paz do vale trouxe uma sensação de calmaria e tranquilidade."
            }
        ]
    },
    {
        enunciado: "Enquanto segue pela trilha, você encontra uma pequena cabana. Parece abandonada, mas ainda há sinais de que alguém poderia ter passado por ali recentemente. Você sente uma curiosidade crescente sobre quem poderia estar morando ali. O que você faz?",
        alternativas: [
            {
                texto: "Decido entrar na cabana e explorar o que há lá dentro.",
                afirmacao: "Dentro da cabana, você encontra alguns utensílios simples, um mapa antigo e uma carta com anotações sobre o lugar. Parece que alguém já esteve ali, talvez há algum tempo atrás."
            },
            {
                texto: "Decido ignorar a cabana e continuar meu caminho.",
                afirmacao: "Embora a cabana tenha gerado curiosidade, você optou por seguir em frente, sentindo que o caminho ainda tinha mais a oferecer."
            }
        ]
    },
    {
        enunciado: "Enquanto segue em frente, você chega a uma nova bifurcação. Uma estrada parece levar a uma aldeia que está visível ao longe, com fumaça saindo das chaminés, enquanto a outra se afasta mais para as montanhas, indo em direção a um local mais misterioso e isolado. Para onde você vai?",
        alternativas: [
            {
                texto: "Escolho seguir em direção à aldeia e descobrir o que está acontecendo lá.",
                afirmacao: "Você chegou na aldeia e encontrou pessoas acolhedoras, que estavam comemorando uma festividade local. Foi uma experiência de conexão com novas culturas e tradições."
            },
            {
                texto: "Escolho seguir em direção às montanhas, em busca de algo mais isolado e misterioso.",
                afirmacao: "Você seguiu pelas montanhas e encontrou um local isolado, onde o silêncio e a natureza te envolvem. Esse lugar lhe trouxe uma sensação de autossuficiência e introspecção."
            }
        ]
    },
    {
        enunciado: "Após explorar a aldeia ou as montanhas, você se depara com uma grande fogueira. Algumas pessoas se reúnem ao redor dela e parece que estão compartilhando histórias e músicas antigas. Você decide participar da reunião. O que você faz?",
        alternativas: [
            {
                texto: "Decido me juntar às pessoas ao redor da fogueira e ouvir suas histórias.",
                afirmacao: "Você passou a noite ouvindo histórias sobre antigos exploradores e mistérios das montanhas. As narrativas de coragem e aventura te inspiraram profundamente."
            },
            {
                texto: "Decido ficar afastado e apenas observar a reunião.",
                afirmacao: "Você preferiu observar a reunião à distância, aproveitando a tranquilidade da noite e refletindo sobre sua jornada até ali."
            }
        ]
    },
    {
        enunciado: "Depois da noite ao redor da fogueira, você percebe que precisa decidir o que fazer a seguir. Você ouviu boatos sobre um lugar místico que poucos conseguiram encontrar. Seu desejo de aventura agora o chama. O que você faz?",
        alternativas: [
            {
                texto: "Decido buscar o local místico, enfrentando os desafios que surgirem no caminho.",
                afirmacao: "Você partiu em busca do local místico, pronto para qualquer obstáculo que surgisse. Sua jornada se tornou ainda mais empolgante e cheia de surpresas."
            },
            {
                texto: "Decido voltar para casa e encerrar minha jornada por aqui.",
                afirmacao: "Você optou por voltar para casa, com a sensação de que a aventura já tinha sido rica e suficiente. Agora, pode levar as memórias e lições aprendidas."
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

function mostraAlternativas() {
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
    caixaPerguntas.textContent = "Sua jornada continua...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
