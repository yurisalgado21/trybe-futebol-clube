README


Desenvolvimento do Projeto TFC: Integração, Dockerização e Modelagem de Dados
Este é o README do projeto TFC, desenvolvido como parte do módulo back-end da Trybe.

Sobre o Projeto
O TFC é um site informativo dedicado a fornecer dados detalhados sobre partidas e classificações de futebol. Nosso foco principal foi criar uma experiência integrada e eficiente para os entusiastas do esporte, unindo tecnologia e paixão pelo futebol.

Desenvolvimento
O desenvolvimento do projeto envolveu várias etapas cruciais:

API Robusta com TDD: Utilizamos a metodologia TDD (Test-Driven Development) para desenvolver uma API robusta, garantindo alta qualidade e confiabilidade.
Integração via Docker Compose: Docker Compose foi empregado para integrar eficientemente todos os serviços necessários, garantindo uma execução suave e eficiente.
Modelagem de Dados com Sequelize: Utilizamos o Sequelize para modelagem de dados, garantindo uma estrutura sólida e respeitando as regras de negócio do projeto.
Sistema de Login com JWT: Implementamos um sistema de login com JWT que fornece tokens de autenticação após o login bem-sucedido.
Testes de Cobertura: Nossos testes de cobertura ultrapassam 80%, cobrindo mais de 100 linhas de código.
Componentes-Chave do Projeto
Banco de Dados: Configurado como um container Docker MySQL no docker-compose. Responsável por fornecer dados ao serviço de backend.
Back-end: Executado na porta 3001, utiliza Express para atender às requisições padrão do front-end.
Front-end: Comunica-se efetivamente com o serviço de back-end através da URL http://localhost:3001.
Docker: Configuração do Docker Compose para unir todos os serviços conteinerizados (backend, frontend e db).
Validação Contínua
Recomendamos a verificação constante da implementação dos requisitos no back-end, acessando a página no front-end que consome a funcionalidade. Isso garante que a integração esteja alinhada às expectativas e funcione conforme planejado.

Instruções de Uso
Seu projeto vai conter um arquivo docker-compose.yml que será utilizado pelo avaliador para realizar o build da aplicação, você não deve alterá-lo ou excluí-lo. Para executar a aplicação na sua máquina local, execute o seguinte comando na raiz do projeto:

bash
Copy code
npm run compose:up
Lembre-se de iniciar seu Docker Compose antes de testar localmente!

Ao rodar o comando npm install na pasta raiz do projeto, você estará instalando somente as dependências para rodar os requisitos do projeto. Cada diretório (frontend e backend) possui suas próprias dependências - você pode instalá-las de forma rápida rodando o comando:

bash
Copy code
npm run install:apps
ou executando npm install dentro de cada diretório.
