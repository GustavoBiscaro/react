# S1: Introdução

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

# S2: Fundamentos do React

## Criando componentes

- Na maioria dos projetos os componentes ficam em uma pasta chamada components, que devemos criar;
- Geralmente são nomeados com a camel case: FirstComponent.js;
- No arquivo criamos uma função, que contém o código deste componente (a lógica e o template);
- E também precisamos exportar esta função, para reutilizá-lo;
- Vamos ver na prática!

### Passos
#### 1. npx create-react-app fundamentos
#### 2. cd fundamentos
#### 2.1 npm start

Em App.js limpar até que fique no seguinte padrão:

<code>
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Fundamentos React</h1>
    </div>
  );
}

export default App;
</code>

E em src criar uma pasta chamada components, onde criaremos o primeiro componente.

Exemplo de primeiro componente!

<code>
const FirstComponent = () => {
    return (
        <div>
            <h1>Meu primeiro componente!</h1>
        </div>
    );
};

export default FirstComponent;
</code>

## Importando componente
- A importação é a maneira que temos de reutilizar o componente;
- Utilizamos a sintaxe: import X from './components/X' onde X é o nome do componente;
- Para colocar o componente importado em outro componente, precisamos colocá-lo em forma de tag: <FirstComponent />
- E então finalizamos o ciclo de importação;
- Vamos importar o FirstComponent em App;

## JSX
- JSX é o HTML do React;
- Onde vamos declarar as tags de HTML que serão exibidas no navegador;
- Ficam no return do componente;
- Temos algumas diferenças do HTML, por exemplo: class será className;
- Isso se dá pelas instruções semelhantes de JS e HTML, pois o JSX é JavaScript, então algumas terão nomes diferentes;
- O JSX pode ter apenas um elemento pai;

<code>
const FirstComponent = () => {
    return (
        <div>
            <h1>Meu primeiro componente!</h1>
            <p>Meu texto</p>
        </div>
    );
};

export default FirstComponent;
</code>

Sem aquela Div acusaria erro! E tudo em torno do return!

## Comentários no componente
- Podemos inserir comentários de duas maneiras no componente;
- Na parte da função, onde é executada a lógica, a sintaxe é: // Algum comentário;
- E também no JSX: {/* Algum comentário */}
- As chaves nos permitem executar sentenças em JavaScript, veremos isso mais adiante;
- Vamos testar os comentários!

<code>
const FirstComponent = () => {
    // essa função faz isso
    return (
        // Algum comentário 
        <div>
            <h1>Meu primeiro componente!</h1>
            {/* Comentário dentro do JSX */}
            <p className="teste">Meu texto</p>
        </div>
    );
   
};
</code>

## Template Expressions
- Template Expressions é o recurso que nos permite executar JS no JSX e também interpolar variáveis;
- Isso será muito útil ao longo dos seus projetos em React;
- A sintaxe é: {AlgumCódigoEmJs}
- Tudo que está entre chaves é processado em JavaScript e nos retorna um resultado;
- Vamos ver na prática!

<code>
const TemplateExpressions = () => {
    const name = "Gustavo";
    const data = {
        age: 26,
        job: "Boring Support TI",
    };

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job }</p>
            <p>{ 4 + 5 }</p>
            <p>{console.log("Hello World")}</p>
        </div>
    );
}

export default TemplateExpressions;
</code>

## Hierarquia de componentes
- Os componentes que criamos podem ser reutilizados em vários componentes;
- E ainda componentes podem formar uma hierarquia, sendo importados um dentro dos outros, como fizemos em App;
- Vamos ver na prática estes conceitos!

## Evento de Click
- Os eventos para o front-end são essenciais;
- Em várias situações vamos precisar do click, como ao enviar formulários;
- No React os eventos já estão 'prontos', podemos utilizar onClick para ativar uma função ao clicar em um elemento;
- Esta função é criada na própria função do componente;
- As funções geralmente tem o padrão handleAlgumaCoisa.

## Funções no evento
- Quando as funções são simples, podemos realizar a lógica no próprio evento;
- Isso torna nossa código mais 'complicado', por atrelar lógica com HTML;
- Mas em algumas situações é aplicável;

<code>
const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);

        console.log("Ativou o evento!");
    };


    return (
    <div>
        <div>
           <button onClick={handleMyEvent}>Clique aqui!</button>
        </div>
        <div>
            <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
            <button onClick={() => {
                if(true){
                    console.log("Isso não deveria existir =)")
                }
            }}>Clica aqui, por favor!</button>
        </div>
    </div>
    );
}

export default Events;
</code>

## Funções de renderização
- Podemos criar funções que retornam JSX;
- Isso serve para criar situações que dependam de outras condições condições;
- Ou seja, o JSX a ser renderizado pode variar por alguma variável, por exemplo;
- Vamos ver na prática!

<<<<<<< HEAD
## Imagens no Public
 **< img src="/MK-Public.png" alt="Mortal Kombat" />** 
 Elas podem ser carregadas com uma só barra no React

 ## Imagens em assets
 - A pasta public pode ser utilizada para colocar imagens, como fizemos na aula passada;
 - Mas um padrão bem utilizada para as imagens dos projetos é colocar em uma pasta chamada assets, em src;
 - Ou seja, você vai encontrar projetos com as duas abordagens;
 - Em assets precisaremos importar as imagens, e o src é dinâmico com o nome da importação;
=======
# S3: Avançando em React
>>>>>>> 1dbb85d4bb22b1de48995541c713e26b1772a544

 Passos:
 1) import MKAssets from './assets/MK-Assets.png'
 2) < img src={MKAssets} alt="Mortal Kombat" />

 ## O que são hooks?
 - Recursos do React que tem diversas funções;
 - Como: guardar e alterar o estado de algum dado na nossa aplicação;
 - Todos os hooks começam com use, por exemplo: useState;
 - Podemos criar os nossos hooks, isso é chamado de custom hook;
 - Os hooks precisam ser importados;
 - Geralmente são úteis em todas as aplicações, utilizaremos diversos ao longo deste curso;