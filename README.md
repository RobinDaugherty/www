[![Netlify Status](https://api.netlify.com/api/v1/badges/6b0036e3-f57a-46ec-8b76-33c0cb128978/deploy-status)](https://app.netlify.com/sites/www-robindaugherty/deploys)

# www.robindaugherty.net

My personal website.

## Developing

You should have [nodenv](https://github.com/nodenv/nodenv) so that the correct/consistent Node version is used in this project. `brew install nodenv` and add to your `~/.zshrc`.

You also need to have yarn installed. `brew install yarn`

```shell
cd www-robindaugherty/
yarn install
yarn develop
```

Your site is now running at `http://localhost:8006`!

Better yet, `echo 8006 > ~/.puma-dev/manual.harper` so that puma-dev will serve it up at manual.harper.localdev

