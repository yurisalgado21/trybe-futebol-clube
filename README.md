README

Desenvolvimento do Projeto TFC: Integração, Dockerização e Modelagem de Dados

 Hoje irei falar um pouco sobre o projeto TFC, meu último projeto do módulo back-end da trybe 

Sobre o Projeto:
O TFC é um site informativo dedicado a fornecer dados detalhados sobre partidas e classificações de futebol. foco principal foi criar uma experiência integrada e eficiente para os entusiastas do esporte, unindo tecnologia e paixão pelo futebol.

o desenvolvimento de uma API robusta utilizando a metodologia TDD (Test-Driven Development). Além disso, temos a integração da aplicação por meio do Docker Compose, garantindo uma execução suave e eficiente ao consumir dados de um banco de dados configurado como container Docker MySQL. Um Sistema de login com JWT que retorna um token ao ser logado corretamente.  e testes de cobertura acima de 80% cobrindo mais de 100 linhas.

Modelagem de Dados com Sequelize:
Um dos pilares do back-end dockerizado é a modelagem de dados utilizando o Sequelize. Esta abordagem proporciona uma estrutura sólida para o desenvolvimento, garantindo que as regras de negócio estabelecidas no projeto sejam respeitadas.A API foi concebida para ser consumida pelo front-end já integrado no projeto, proporcionando uma experiência fluida e coesa.

🔧 Componentes-Chave do Projeto:
1️⃣ Banco de Dados:

Configurado como um container Docker MySQL no docker-compose.
Responsável por fornecer dados ao serviço de backend.
Acessível pelo Sequelize durante os testes via porta 3306 do localhost.
2️⃣ Back-end:

Executado na porta 3001 para atender às requisições padrão do front-end.
Inicialização a partir do arquivo app/backend/src/server.ts.
Utilização do Express, garantindo a resposta adequada às variáveis de ambiente.
3️⃣ Front-end:

Concluído e não requer modificações substanciais.
Comunicação efetiva com o serviço de back-end através da URL http://localhost:3001.
4️⃣ Docker:

Configuração do Docker Compose para unir todos os serviços conteinerizados (backend, frontend e db).
Utilização de Dockerfiles nas raízes do front-end e back-end para inicialização eficiente da aplicação.
🧪 Validação Contínua:
Recomendamos a verificação constante da implementação dos requisitos no back-end, acessando a página no front-end que consome a funcionalidade. Isso garante que a integração esteja alinhada às expectativas e funcione conforme planejado.
