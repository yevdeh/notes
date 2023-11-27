1. [Install Prettier](https://prettier.io/docs/en/install.html): `npm install --save-dev --save-exact prettier`.
1. Create an empty config file to let the editor know that Prettier is used in the project: `echo {}> .prettierrc`.
1. Optionally, [create a .prettierignore file](https://prettier.io/docs/en/ignore.html).
1. [Install eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#installation): `npm install --save-dev eslint-config-prettier`.
1. In .eslintrc, in the "extends" block add "prettier" (must be the last line).
1. Find unnecessary rules: `npx eslint-config-prettier project-folder/**/*.js`.
1. Remove unnecessary rules from .eslintrc.
1. Format all files: `npx prettier --write .`.
