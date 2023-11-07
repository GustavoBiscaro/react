# 1. O que é React?
- React é uma biblioteca JavaScript para desenvolvimento de aplicações front-end;
- Estas aplicações são chamadas de SPA (Single Page Application);
- A arquitetura do React é baseada em componentes;
- Pode ser inserido em um aplicação ou podemos criar a aplicação apenas com React;
- É mantido pelo Facebook;

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

