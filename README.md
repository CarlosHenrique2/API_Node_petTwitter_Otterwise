# Boilerplate de back-end da Otterwise

## Tecnologias

- [Prisma](https://www.prisma.io/)
- [Fastify](https://fastify.io)

## Utilização

### Instalando as dependências

`yarn` ou `npm install`

### Conectando ao seu banco de dados

Crie um novo arquivo chamado .env e copie o conteúdo do arquivo .env-example modificando os dados para conectar no seu banco local

### Rodando a aplicação

Antes de rodar a aplicação, certifique-se que o seu banco de dados está com as ultimas atualizações do prisma.schema. Para garantir que estejam, rode `yarn prisma:push`.
Após certificar que o banco reflete seu prisma.schema, utilize o comando `yarn dev` para rodar a aplicação localmente.

### Scripts

`start`: para rodar a aplicação em modo produção.

`dev`: para rodar a aplicação em modo desenvolvimento utilizando o nodemon.

`db:push`: roda o comando `npx prisma db push`, que atualiza seu banco de dados para a ultima versão do seu prisma.schema.

`db:seed`: roda o comando `npx prisma db seed`, que roda as seeds.

`db:migrate-dev`: espera um nome ao final para que crie uma nova migration com este nome.

`db:migrate-prod`: utilizado para aplicar as alterações de migrations em um ambientem de testes ou produção.

`studio`: executa o comando `npx prisma studio` para abrir o studio do prisma no navegador.

## Estrutura de pastas

`prisma`: arquivos gerados pelo prisma.

`config`: onde ficam as configurações do servidor fastify.

`controllers`: onde ficam os arquivos responsáveis por chamar o prisma e realizar as conexões com o banco de dados.

`helpers`: contém arquivos com funções auxiliares ao desenvolvimento e projeto.

`routes`: as rotas utilizando o padrão REST.
