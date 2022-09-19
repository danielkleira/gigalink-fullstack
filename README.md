# gigalink-fullstack

## ✨ Projeto

Gigalink Fullstack é uma aplicação baseada em um gerenciador de vendas de produtos, boa parte de seu Frontend foi desenvolvido com a biblioteca MaterialUI pensando em agilidade, escalabilidade e responsividade. Para os formulários foi utilizado o Yup em conjunto ao React Hook Form e para gestão da API foi escolhido o Axios. No Backend foi utilizado Django com Python devido a sua robustez, segurança e praticidade, realizando algumas validações também. Em questão de futuras melhorias, acredito que seja uma melhor componentização e também a adição de serviços baseados em token de autenticação, pensando nisso deixei o front de login e cadastro já moldado para caso seja útil realizar essas features.

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias/bibliotecas:

<table border="0">
 <tr>
<td> HTML5</td>
<td> CSS3</td>
<td> JavaScript</td>
 </tr>
  <tr>
<td> React</td>
<td> React Router Dom</td>
<td> React Hook Form</td>
 </tr>
  <tr>
<td> Axios</td>
<td> React Icons</td>
<td> Yup</td>
 </tr>
  <tr>
<td> MaterialUI</td>
<td> Styled-components</td>
<td> React Toastify</td>
 </tr>

   <tr>
<td> Python</td>
<td> Django</td>
<td> Docker</td>
 </tr>
</table>

## 👨🏻‍💻 Executando o projeto

O projeto esta dividido em duas branchs, a de Backend, que foi mergeada na main para rodar no Heroku(que infelizmente apresentou problemas na conta) e a Frontend, onde consta o projeto em React.
Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto frontend.
Em seguida, inicie o projeto.

Iniciando a versão web(Frontend):

```cl
yarn start ou npm run dev
```

Para rodar o backend utilize o django:

# Adicione um ambiente virtual na mesma pasta:

```cl
python -m venv venv
```

# Acesse o ambiente:

```cl
.\venv\Scripts\activate
```

# Adicione o django:

```cl
pip install django
```

# Rode a instalação de todos os pacotes:

```cl
pip install requirements.txt
```

# Crie um .env com os dados contidos no .env.exemple e crie um banco de dados postgres em sua máquina

# Rode o servidor:

```cl
/manage.py runserver ou docker-compose up
```

Assim o servidor estara rodando e pode ser testado.

## Opções de testagem: 

## Caso prefira, pode baixar meu workspace do insominia para testar os endpoints:
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Gigalink-Daniel-Leira&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fdanielkleira%2FinsomniaGigalink%2Fmain%2FInsomnia_gigalink.json%3Ftoken%3DGHSAT0AAAAAABQH46JFQCCRAMO7L7CF2M74YZHXVHQ)

## Ou acessando a documentação schema gerada pelo drf-Spectacular
``` http://localhost:8000/api/doc/ ```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes.
