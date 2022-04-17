# <APP_NAME>

<!-- TOC -->

- [<APP_NAME>](#app_name)
    - [APP_NAME specifications](#app_name-specifications)
    - [Development](#development)
    - [Development by using Docker](#development-by-using-docker)

<!-- /TOC -->

## APP_NAME specifications

Vue template with:

- [Vue3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia (de facto Vuex 5)](https://pinia.vuejs.org/)
- [Vue Router 4](https://next.router.vuejs.org/guide/)
- [Quasar](https://quasar.dev/)
- [Vue I18n](https://kazupon.github.io/vue-i18n/)

Extras:

- Relative paths
- [ESLint](https://eslint.org/)
- [Yarn](https://yarnpkg.com/)
- [Docker dev configuration](https://docker.com/)

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

## Development by using Docker

1. Run container:

    ```bash
    docker compose -f ./docker-compose.dev.yml up -d
    ```

2. Run /bin/bash in container:

    ```bash
    docker exec -it app_name-front /bin/bash
    ```

3. Build & Run dev server:

    ```bash
    yarn && yarn dev-docker
    ```

- Stop docker container:

    ```bash
    docker compose -f ./docker-compose.dev.yml down -d
    ```
