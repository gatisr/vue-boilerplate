[![CodeFactor](https://www.codefactor.io/repository/github/gatisr/vue-boilerplate/badge/master)](https://www.codefactor.io/repository/github/gatisr/vue-boilerplate/overview/master)

# <APP_NAME>

<!-- TOC -->

- [<APP_NAME>](#app_name)
    - [How to use](#how-to-use)
    - [<APP_NAME> specifications](#app_name-specifications)
    - [Development](#development)
    - [Development with Docker](#development-with-docker)

<!-- /TOC -->

## How to use

Find and replace all `<APP_NAME>` and `app_name` with your desired app name & start to develop

## <APP_NAME> specifications

Vue template with:

- [Vue3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia (de facto Vuex 5)](https://pinia.vuejs.org/)
- [Vue Router 4](https://next.router.vuejs.org/guide/)
- [Quasar](https://quasar.dev/)
  - [Material design icons](https://materialdesignicons.com/)
- [Vue I18n](https://kazupon.github.io/vue-i18n/)

Extras:

- Relative paths
- [ESLint](https://eslint.org/)
- [Yarn](https://yarnpkg.com/)
- [Docker dev configuration](https://docker.com/)
- Dark theme
- Page 404

Recommended IDE:

- [VSCode](https://code.visualstudio.com/)

## Development

1. Build dev server:

    ```bash
    yarn
    ```

2. Run dev server:

    ```bash
    yarn dev
    ```

## Development with Docker

1. Run container:

    ```bash
    docker compose -f ./docker-compose.dev.yml up -d
    ```

2. Run shell in container:

    ```bash
    docker exec -it app_name-front sh
    ```

3. Build & Run dev server:

    ```bash
    yarn && yarn dev
    ```

- Stop docker container:

    ```bash
    docker compose -f ./docker-compose.dev.yml down -d
    ```
