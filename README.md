# www.robindaugherty.net

Robin's personal website.

## Developing

This project uses Typescript and [Astro](https://docs.astro.build), which defines the project structure.

Most of the content is made up of [Astro Components](https://docs.astro.build/en/basics/astro-components) which can contain JS, HTML and CSS.

Prettier is used to format the code, and Husky is used to ensure only pretty code is committed.

### Running

```sh
pnpm dev
```

If you want to emulate static deployment, use the following:

```sh
pnpm build
pnpm preview
```

That will build and then serve the project from the `dist/` directory.
Unlike the dev server, changes to the project will not be reflected.

### Setup

You should have [nodenv](https://github.com/nodenv/nodenv) so that the correct/consistent Node version is used in this project. `brew install nodenv` and add to your `~/.zshrc`.

You also need to have yarn installed. `brew install yarn`

```sh
# In the project directory
nodenv install
corepack enable
pnpm install
pnpm dev
```
