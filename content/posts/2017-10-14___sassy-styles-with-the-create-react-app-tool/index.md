---
title: 'SASSy Styles with the Create React App Tool'
subTitle: 'SASS is a must when developing larger applications'
author: jordan
categories:
  - Web Applications
  - Portfolio
tags:
  - sass
  - scss
  - styles
  - cli tools
  - create react app
youtube: 'https://www.youtube.com/watch?v=2QaI5ajg4Hw'

---

The create-react-app CLI tool is an incredible way to get started with ReactJS.

​<iframe width="560" height="315" src="https://www.youtube.com/embed/2QaI5ajg4Hw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

If you have ever started a react project in the past you know how daunting the development environment can be. Plus, there are tons of different ways to even set it all up. Who has time to sift through all of that?

Well, the people at Facebook realized all of that and created a cool command line tool to solve those problems.

However, if you like using SCSS or Sass to write your CSS files. Recently they updated the docs with an easy way to do exactly that! [Check out those docs here!](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)

First, make sure you have the CLI tool installed with `npm install -g create-react-app`.

Then, start a new project with `create-react-app PROJECT_NAME` and `cd PROJECT_NAME`.

If you are going to use SCSS then `npm install --save node-sass-chokidar` will install the recommended node package for SCSS and Sass files. If you want to use LESS or Stylus you need to look around for a good package.
In the code below I am using the `node-sass-chokidar` package.

In your package.json file add:

```javascript
"build-css": "node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/",
"watch-css": "npm run build-css && node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/ --watch --recursive",
```

Then, you want to make sure that you run these scripts when you `start` or `build` your project. On your command line run `npm install --save npm-run-all` and add these lines to your package.json:

```javascript
"start-js": "react-scripts start",
"start": "npm-run-all -p watch-css start-js",
"build": "npm run build-css && react-scripts build",
```

Make sure that you remove the original `start` and `build` scripts from the package.json.

Now you can still import css files into your components, however, when you make changes to your scss files node will automatically convert those files into css! Magic! The docs even recommend that you add `*.css` to your .gitignore file to keep them out of your source control.

#Teachers can code!
