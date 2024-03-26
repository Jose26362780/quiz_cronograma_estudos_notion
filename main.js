const perguntas = [
  {
    pergunta: "O que é programar?",
    respostas: [
      "Conectar dispositivos à internet",
      "Escrever instruções para o computador seguir",
      "Criar um novo hardware",
    ],
    correta: 1,
  },
  {
    pergunta: "Como funciona a web?",
    respostas: [
      "Por meio de sinais de rádio",
      "Utilizando uma rede local",
      "Através da comunicação entre navegadores e servidores",
    ],
    correta: 2,
  },
  {
    pergunta: "O que é firmware?",
    respostas: [
      "Software embutido em hardware que fornece instruções de baixo nível",
      "Hardware que pode ser atualizado remotamente",
      "Um tipo de servidor",
    ],
    correta: 0,
  },
  {
    pergunta: "O que é DNS?",
    respostas: [
      "Protocolo de comunicação para transferência de dados na web",
      "Um tipo de servidor",
      "Sistema de Nomes de Domínio que traduz nomes de domínio em endereços IP",
    ],
    correta: 2,
  },
  {
    pergunta: "O que é kernel?",
    respostas: [
      "Um tipo de software de edição de texto",
      "Parte central de um sistema operacional que gerencia recursos do sistema",
      "Um tipo de hardware",
    ],
    correta: 1,
  },

  {
    pergunta: "Quais são as diferenças entre low-level e high-level?",
    respostas: [
      "Low-level refere-se a linguagens de programação próximas ao código de máquina, enquanto high-level são linguagens mais abstratas e fáceis de entender",
      "Low-level refere-se a computadores lentos e high-level a computadores rápidos",
    ],
    correta: 0,
  },
  {
    pergunta: "O que é um website estático e dinâmico?",
    respostas: [
      "Um website estático usa tecnologias antigas, enquanto um website dinâmico usa tecnologias modernas",
      "Um website estático é mais rápido que um website dinâmico",
      "Um website estático exibe conteúdo que permanece o mesmo para todos os usuários, enquanto um website dinâmico exibe conteúdo personalizado com base na interação do usuário ou outras variáveis",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual a diferença entre Frontend e Backend?",
    respostas: [
      "Frontend é o mesmo que Back-end",
      "Frontend refere-se à parte da aplicação que interage diretamente com o usuário, enquanto o Backend refere-se à parte que lida com a lógica de negócios e a interação com o banco de dados",
      "Frontend refere-se à parte do servidor e o Backend refere-se ao lado do cliente",
    ],
    correta: 1,
  },
]

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector("#acertos span")
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector("h3").textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true)
    dt.querySelector("span").textContent = resposta
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta-" + perguntas.indexOf(item)
    )
    dt.querySelector("input").value = item.respostas.indexOf(resposta)
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
    }
    quizItem.querySelector("dl").appendChild(dt)
  }

  quizItem.querySelector("dl dt").remove()

  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
