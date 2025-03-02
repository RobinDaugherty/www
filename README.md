# www.robindaugherty.net

Robin's personal website.

## Developing

This project uses Typescript and [Astro](https://docs.astro.build), which defines the project structure
and the `.astro` file format for components.

Prettier is used to format the code, and Husky is used to ensure only pretty code is committed.

### Running

```sh
pnpm dev
```

Your site is now running at `http://localhost:8006`!

Better yet, `echo 8006 > ~/.puma-dev/www.robindaugherty` so that puma-dev will serve it up at www.robindaugherty.localdev

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
