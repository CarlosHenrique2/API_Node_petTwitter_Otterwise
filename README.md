<h1 align="center">Projeto Rede Social PETWITER</h1>

<p align="center">Parte Back-End</p>

## Configuração para uso do projeto

```bash
# Para clonar
$ git clone https://github.com/CarlosHenrique2/Project-Final-Otterwise-back.git

# Para instalar todas as dependencias do projeto
$ yarn install

# Caso precise fazer um migrations do seu banco de dados
$ yarn migrate

# Para iniciar o servidor local em seu equipamento
$ yarn dev
```

## Rotas configuradas do Back end

```bash
# Criar User
$ http://localhost:5000/signup

# Criar um PostTwits
$ http://localhost:5000/posts

# Realizar login
$ http://localhost:5000/login

# Remover um User
$ http://localhost:5000/users

# Remover um PostTwits
$ http://localhost:5000/posts

# Para Atualizar um PostTwits
$ http://localhost:5000/posts

# Para atualizar um User
$ http://localhost:5000/users

# Rota de paginação do feed da pagina Home
$ http://localhost:5000/page?page=1

# Rota de paginação para filtrar outros usuários e o perfil do usuário
$ http://localhost:5000/pages?id=24

# Rota que busca todos os usuários cadastrados
$ http://localhost:5000/users

# Rota que busca todos os Posts dos usuários
$ http://localhost:5000/posts

# Rota que busca apenas os dados do usuário de acordo com a ID informada
$ http://localhost:5000/user?id=24

```

## Corpo que deve ser enviado de acordo com as rotas (Json)

<p> PS: enviar sempre em json</p>

```bash
# Corpo para criar um usuário

{
    "name": "Simba Gatinho",
    "email": "Simba_Gati@outlook.com",
    "username": "@catsimba123",
    "password": "12345"
}

# Corpo para criar um PostTwits

{
    "text": "trompei com um gato na minha cozinha vei"
}

# Corpo para fazer login

{
    "email": "Ana_caca@outlook.com",
    "password": "12345"
}

# Corpo para remover um User (apenas informe a ID do usuário)

{
    "id": 23
}

# Corpo para remover um PostTwits (apenas informe a ID do PostTwits)

{
    "id": 142
}

# Corpo para atualizar um PostTwits

{
    "id": 74,
    "authorId": 10,
    "text": " consectetur adipiscing elit. Arcu"
}

# Corpo para atualizar um User

{
    "id": 23,
    "name": "user55",
    "email": "user55@admin.com",
    "username": "@userdog55"
}

# Rotas de paginação por serem Get não é necessario um corpo
# o mesmo vale para as rotas de pegar todos os usuários e pegar todos os posts,

# Porem a rota para pegar o usuário especifico apenas deve informar a ID
 #user?id=24
```

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/en/docs/)
- [Prisma](https://www.prisma.io/docs/)
- [Fastify](https://www.fastify.io/docs/latest/)
- [Fastify-cors](https://www.npmjs.com/package/fastify-cors)
- [Fastify-helmet](https://www.npmjs.com/package/fastify-helmet)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
