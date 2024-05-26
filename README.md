This react UI is deployed using https://github.com/gitname/react-gh-pages tool.

In summary, this tool has a command in package.json called deploy so `npm run deploy` will build and package
the react UI and then push those changes to the gh-pages branch. In the instruction it specifies you to setup your 
github pages configuration such that it deploys from the gh-pages branch.

Sometimes gh-pages is kinda finnicky and doesn't seem to deploy. Here are some steps to troubleshoot:
1. `rm -rf node_modules/.cache/gh-pages`
2. 