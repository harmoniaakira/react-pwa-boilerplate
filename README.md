# TQI CONSULTORIA E DESENVOLVIMENTO

## React Web Application Boilerplate

O principal objetivo deste projeto é manter um boilerplate atualizado para a criação de **React Web Apps** e **Progressive Web Apps**.

## :rocket: Inicializando o ambiente

Passo-a-passo para inicializar o ambiente

### Clone o repositório

```bash
$ git clone http://git.tribanco.com.br/tricard/site-lojista-pwa-web
```

### Instalando as dependências

```bash
$ npm i
```

### Iniciar o servidor

```bash
$ npm run start
```

## :heavy_check_mark: Padrões

Definições para manter a padronização da arquitetura

- NPM ou Yarn;
- Biblioteca UI [MaterialUI](https://material-ui.com);
- Para estilização mais complexa de componentes [Styled Components](https://styled-components.com);
- Framework de internacionalização [react.i18next](https://react.i18next.com);
- Linter: Reportar padrões de ECMAScript/JavaScript [ESLint](https://eslint.org);
- Mocks: [Mirage](https://miragejs.com/docs/getting-started/introduction/);
- [Por que react-scripts?](https://create-react-app.dev/docs/getting-started/);
- [Por que Axios?](https://github.com/axios/axios#features);
- [Por que MaterialUI?](https://material-ui.com/blog/material-ui-v4-is-out)

Nesse projeto foi adotado o padrão de componentes funcionais utilizando Hooks

[API de Referência dos Hooks](https://pt-br.reactjs.org/docs/hooks-reference.html)

## :open_file_folder: Project structure

- **src/assets**: Arquivos estáticos (imagens, fontes and icones);
- **src/resources**: configurações de API e endpoints;
- **src/components**: Componentes react para serem reutilizados e compartilhados;
- **src/common**: Utils, constantes, configurações, i18n e outros;
- **src/containers**: Componentes que se comportam como paginas;
- **src/routes**: Rotas do aplicativo para serem usadas na navegação da SPA;
- **src/store**: Configuração de estados do Redux;
- **docs**: Documentos de congiguração.