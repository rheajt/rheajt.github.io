---
title: 'Stranger Things'
subTitle: 'Strange Things season 2 is coming out, so here is a fun tool with apps script!'
author: jordan
categories:
  - Web Applications
  - Portfolio
tags:
  - stranger things
  - codepen examples
  - google apps script
  - the upsidedown
  - tv addiction
youtube: 'https://www.youtube.com/watch?v=NHVn8vyTLa8'
image: maxresdefault.jpg
---

## It is almost time for Stranger Things Season 2! What better way to celebrate than to turn a cool codepen into a review game.

​<iframe width="560" height="315" src="https://www.youtube.com/embed/NHVn8vyTLa8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

I wanted to build a cool way to have students interact with the questions. Everyone can participate from their own device while the game is taking place.

There are no points or competition, but I did show the name of the student who responded first to the code. If you don't like this idea, remove it from the code! That is the beauty of open source code!

###Here is a bit of the code!

First, you need a spreadsheet with a bunch of questions and answers. I wrote a function that pulls those in:

```javascript
function getQuestions() {
  var sheetId = PropertiesService.getScriptProperties().getProperty('SHEET_ID');

  var questionSheet = SpreadsheetApp.openById(sheetId).getSheetByName('Review Questions');

  var values = questionSheet.getDataRange().getValues();

  var questions = [];

  for (var i = 1; i < values.length; i++) {
    questions.push({
      question: values[i][0],
      answer: values[i][1],
    });
  }

  return questions;
}
```

In the front-end html file, I created a timer to check answers. It isn't exactly real time but I think it is as close as you can get. It also maintains the position you are in, so that you don't check the same rows twice.

```javascript
function checkAnswers(question, answer, row) {
  var sheetId = PropertiesService.getScriptProperties().getProperty('SHEET_ID');

  var responseSheet = SpreadsheetApp.openById(sheetId).getSheetByName('Form Responses 1');

  var values = responseSheet.getDataRange().getValues();

  var regExp = new RegExp(answer, 'gi');

  for (var i = row; i < values.length; i++) {
    if (regExp.test(values[i][3].toLowerCase())) {
      return {
        success: true,
        message:
          'The last message from the upside down was "' +
          question +
          '" answered by ' +
          values[i][2] +
          ' with the answer "' +
          values[i][3] +
          '".',
      };
    }
  }

  //if there is no answer found in the loop
  return { success: false, lastRow: values.length };
}
```

To use this project yourself, check out the video introduction. You will need to have the [Github Assistant Chrome Extension](https://chrome.google.com/webstore/detail/google-apps-script-github/lfjcgcmkmjjlieihflfhjopckgpelofo?hl=en) installed. You can also just copy/paste the code into your project. Whatever floats your boat. [I did make a video about using the extension though.](http://gtrainerdemo.jordanrhea.com/version-control-your-apps-scripts-with-github) Just sayin'.

I hope you can find ways to improve the project, and let me know what you think in the comments below.

[Github Repository](https://github.com/rheajt/Stranger-Things-Alphabet-Wall)
