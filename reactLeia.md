# 1. O que é React?
- React é uma biblioteca JavaScript para desenvolvimento de aplicações front-end;
- Estas aplicações são chamadas de SPA (Single Page Application);
- A arquitetura do React é baseada em componentes;
- Pode ser inserido em um aplicação ou podemos criar a aplicação apenas com React;
- É mantido pelo Facebook;
## Para que serve?
- React é um framework JavaScript criado pelo Facebook (atual Meta)
- É usado para criar interfaces de usuário (UI) em aplicativos web.
- Ele é popular por ser fácil de usar, altamente flexível e escalável,
- É usado por muitas empresas de tecnologia, incluindo o Facebook, Instagram e Airbnb.

- O React permite dividir uma página inteira em partes, chamadas de componentes. Assim é possível trabalhar cada um desses componentes de forma individual e independente.

- Os componentes de React utilizados no desenvolvimento de uma user interface podem ser reaproveitados para a construção de outras aplicações e UIs. Por exemplo, um componente de imagens em slides utilizado em um site, pode ser reutilizado para a construção de outros sites.

- Dessa forma, um desenvolvedor não precisa criar todos os comandos e linhas de código desde o início, o que pode tornar o seu trabalho muito mais ágil.

- O React utiliza um DOM Virtual (Document Object Model - modelo de documento por objeto), uma cópia virtual do documento que representa a parte visual de uma página web, o que permite o desenvolvimento de interfaces de forma mais otimizada.
- O React é flexível: facilita a interface com outras bibliotecas e frameworks
- Uso de componentes reutilizáveis: Um componente é como se fosse uma função JavaScript que permite dividir a interface em partes independentes e reutilizáveis, livres de outras dependências externas. Com ele, você ´pde criar, reutilizar e combinar componentes no seu código.

- Facilidade no aprendizado: O React, antes de tudo, é JavaScript. Se você já tem experiência com JavaScript, é possível absorver toda a proposta do React facilmente, criando aplicações modernas com pouco tempo de estudo.

## React SPA: Entendendo o conceito de uma Single Page Application

- O carregamento dos recursos (como CSS, JavaScript e HTML das páginas) ocorre apenas uma única vez: na primeira vez em que o usuário acessa a aplicação.
- Nesse primeiro acesso, todo o conteúdo já é transferido para o cliente.
- Não será necessário mais fazer requisições ao servidor para a carga dessas novas páginas.

## Vantagens
- Uma SPA é rápida, pois a maioria dos recursos (HTML+CSS+Scripts) são carregados apenas uma vez ao longo da vida útil do aplicativo.

- O desenvolvimento é simplificado, não havendo a necessidade de escrever código para renderizar páginas no servidor. É muito mais fácil começar porque normalmente você pode iniciar o desenvolvimento a partir de um simples arquivo, sem usar nenhum servidor.

# 2. O que é Node.js?
- O Node.js é uma runtime de JavaScript;
- Ou seja, uma biblioteca utilizada por um compilador durante a execução do programa;
- Que está construída na V8 engine (escrita em C++) da Google;
- Possibilitando criar softwares em JS no lado do servidor;
- Temos então um código JS rodando em C++ para garantir alta performance;

# 3. O que é npm?
- O npm é um gerenciador de pacotes do Node;
- Vamos poder utilizar **bibliotecas de terceiros**, baixando elas pelo npm;
- E também executar determinados scripts no nosso programa;
- Dificilmente um software em Node.js não utiliza o npm;
- Os módulos externos ficam numa pasta chamada **node_modules**;
- Ela deve ser descartável, ou seja, a cada instalação do projeto baixamos todos os pacotes novamente; 

# 4. Instalação Node Windows
- O download do Node.js é feito no site oficial: **nodejs.org**;
- Vamos baixar um arquivo .msi que é o instalador;
- É interessante saber que o npm vem junto do Node;
- Após a instalação podemos testar o Node e o npm em um terminal, para validar a instalação;
- Note que os binários precisam estar no PATH, este passo está na instalação do Node;

# 5. Instalação Node Linux
- O download do Node.js é feito no site oficial: **nodejs.org**
- Vamos baixar um executável que inicializa a instalação;
- Note que o npm vem junto do Node;
- Após a instalação precisamos validar em um terminal;

<code>
sudo apt install nodejs
sudo apt install npm
</code>

**Para testar**
nodejs -v
npm -v

# 6. Hello World em React
- Para criar as nossas aplicações em React, vamos utilizar um executor de scripts do Node, que é o npx;
- Com o comando: **npx create-react-app <nome>** temos uma nova aplicação sendo gerada;
- Podemos iniciar a aplicação com npm start;
- Vamos ver na prática!
**npm install -g npx**
**npm i -g create-react-app** Global
1º npm init
2° npm install
3° npx create-react-app <nome>
...

## Vite

**npm create vite@latest**
e seguir as orientações!


## O que é uma AP?
Imagine que você está em um restaurante e deseja fazer um pedido. O garçom, neste caso, seria como a API (Interface de Programação de Aplicações). Aqui está uma analogia para explicar uma API:

**Pedido (Request):** Você, como cliente, decide o que deseja comer e pede ao garçom. Isso é semelhante a fazer uma requisição (request) para a API, onde você solicita dados ou ações específicas.

**Garçom (API):** O garçom atua como um intermediário entre você e a cozinha. Ele aceita o seu pedido, garante que a cozinha o entenda e, em seguida, repassa sua solicitação. Da mesma forma, a API aceita sua requisição, interpreta-a e a encaminha para o servidor ou banco de dados apropriado.

**Cozinha (Servidor/Backend):** No restaurante, a cozinha é responsável por preparar a comida com base no pedido do garçom. Na analogia da API, o servidor ou backend é responsável por processar a requisição, manipular dados, ou executar ações conforme solicitado pela API.

**Comida Pronta (Resposta - Response):** Após a cozinha preparar a comida, o garçom a traz de volta até você. Da mesma forma, a API recebe a resposta do servidor ou backend e a entrega de volta ao cliente na forma de dados, informações ou confirmações de ação.

**Cliente Satisfeito (Sucesso):** Se a comida atender às suas expectativas, você fica satisfeito. Da mesma forma, se a API for bem-sucedida em processar sua requisição, você recebe os dados ou confirmações necessárias para continuar o fluxo da sua aplicação.

**Erro no Pedido (Falha na Requisição):** Se houver algum problema com o seu pedido, como um prato incorreto, é análogo a uma falha na requisição da API. Nesse caso, o garçom (API) pode informar sobre o problema, e você pode corrigir seu pedido.

# 7. Estrutura Inicial do React
- Há algumas pastas e arquivos chave para o desenvolvimento em React;
- **node_modules**: Onde as dependências do projeto ficam;
- **public**: Assets estáticos e HTML de inicialização;
- **src**: Onde vamos programar as nossas apps;
- **src/index.js**: Arquivo de inicialização do React;
- **src/App.js**: Componente principal da aplicação;

# 8. Extensão para React
- Há uma extensão no marketplace do VS Code que ajuda muito a programar em React;
- O nome dela é: ES7 + React/Redux/React-Native snippets;
- Conseguimos criar muito código com apenas alguns atalhos;
- Vamos instalá-la!

# 9. Preparando o Emmet para React
- Emmet é uma extensão nativa do VS Code que ajuda a escrever HTML mais rápido;
- Porém ela não vem configurada para o React!
- Temos que acessar **File > Settings > Extensions** e procurar por Emmet;
- Lá vamos incluir a linguagem: **javascript - javascriptreact**;
- Vamos configurar!

# 10. Como tirar melhor proveito do curso
- Sempre programe os códigos das aulas!
- O curso foi planejado sequencialmente, se não domina o React não pule aulas, especialmente para os projetos;
- Faça todos os exercícios propostos;
- Tire as suas dúvidas no fórum (Q & A) e responda as dúvidas dos outros alunos que souber;
- Dica extra: assistir primeiro, executar depois;
