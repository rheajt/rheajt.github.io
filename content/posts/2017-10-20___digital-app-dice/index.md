---
title: 'Digital App Dice'
subTitle: 'A fellow innovator and friend devised a really cool way to App Smash with your students'
author: jordan
categories:
  - Web Applications
  - Teacher Tools
tags:
  - Projects
  - app smashing
  - google apps script
  - google innovators
  - collaboration
  - teacher tools
  - innovator project
youtube: 'https://youtu.be/Ng5S6UPJdtI'
image: maxresdefault.jpg
---

App Smashing is a cool way to integrate several apps into a one project. In this project we are building digital dice to add a randomness to our app smashing.

​<iframe width="560" height="315" src="https://www.youtube.com/embed/Ng5S6UPJdtI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## [Ryan Read](https://twitter.com/ryan7read) and [Dee Lanier](https://twitter.com/deelanier) are the two [#appsmashing]() gurus that I have talked to and suggested this project to me.

In [part 1](https://www.youtube.com/watch?v=ZQVapitvEjo), I am using some boilerplate code to get the project started. You can find out more about how to use Github assistant in [my tutorial on boilerplate code for apps script](http://jordanrhea.com/apps-script-boilerplate/).

Then in [part 2](https://www.youtube.com/watch?v=6y99-cJO0Zg) you need to setup a sheet as your data source. We are going to be using JSON and it is pretty simple to setup in the script editor.

```javascript
function doGet() {
  var result = {};

  var mobile = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName('Mobile')
    .getDataRange()
    .getValues();

  result.mobile = getObject(mobile);

  var web = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName('Web')
    .getDataRange()
    .getValues();

  result.web = getObject(web);

  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

function getObject(arr) {
  var headers = arr.shift();

  var obj = {};
  for (var i = 0; i < headers.length; i++) {
    obj[headers[i]] = arr.map(function(app) {
      return app[i];
    });
  }
  return obj;
}
```

Follow along in parts 3, 4, and 5 as we build out the features of this app!

- [We will be using the JSON data we get from the sheet to build the category select boxes.](https://www.youtube.com/watch?v=2Ulvz4W58dY)

- [We also need to trigger changes on the display when we select platform and number of dice options](https://www.youtube.com/watch?v=jSdxONA7LpM)

- [Obviously, rolling dice is no fun without some animation with animate.css!](https://www.youtube.com/watch?v=_DwYYBryF-E)

Finally, we are going to style the app a little bit. There are tons more things you can do with CSS and some creativity, but I want to get you started with a few simple options. At the end of the video the CSS looks like:

```css
body {
  font-family: 'Oswald', sans-serif;
  background-color: #e5e564;
}

input,
select {
  padding: 4px 16px;
}

header {
  display: flex;
  width: 600px;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
}

main {
  display: flex;
  justify-content: space-around;
}

main .container {
  flex-basis: 200px;
}

main .container .die {
  width: 200px;
  height: 200px;
  border: 1px solid black;
  border-radius: 25px;
  text-align: center;
  line-height: 200px;
  font-size: 2em;
  box-shadow: inset 0px 0px 2px 2px rgba(128, 128, 128, 0.53);
  background-color: white;
}

main .container select {
  width: 100%;
  margin-top: 32px;
}
```

How would you use [#appsmashing](https://twitter.com/hashtag/appsmashing) in your classroom? How can you improve on this project? Let me know in the comments below and lets talk about ways to improve this project!
