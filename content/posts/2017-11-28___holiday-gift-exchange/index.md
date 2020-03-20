---
title: 'Holiday Gift Exchange'
subTitle: 'Turn a simple form into a cool holiday gift exchange!'
author: jordan
categories:
  - Web Applications
  - Portfolio
tags:
  - Projects
  - gift exchange
  - secret santa
  - google forms
  - google apps script
youtube: 'https://www.youtube.com/watch?v=sShYV2qK6wQ'
image: maxresdefault.jpg
---

It is the holiday season and I want to share a fun way to engage your students with the spirit of sharing!

​<iframe width="560" height="315" src="https://www.youtube.com/embed/sShYV2qK6wQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Many customs and cultures exchange gifts at the holiday times. This idea was shared with me from my Dutch friends who celebrate Sinterklaas. They exchange gifts and poems.

That gave me the idea that I could use Google forms to ask students to give their names and a few details about themselves. Then when the teacher decides, end the submissions and pair all of the students secretly!

It even sends emails to their gmail accounts. Check out the video above for a demonstration on how to setup the project with your class. Below, I am going to talk a little bit about the code

The `makeList()` function is the main entry point.

```javascript
function makeList() {
  //1. Close the responses to the form
  var formUrl = SpreadsheetApp.getActiveSheet().getFormUrl();
  FormApp.openByUrl(formUrl)
    .setAcceptingResponses(false)
    .setCustomClosedFormMessage('Sorry but the pairs have been made and entry is closed!');

  //2. Pair the people together
  var pairs = getPairs();

  //3. Create an answer sheet
  writeSheet(pairs);

  //4. Send emails to everyone!
  sendEmails(pairs);

  //Done, signal the sheet
  Browser.msgBox('Done creating the pairs and emailing the members');
}
```

Then, I am using the array method `.slice()` to force a copy of the array of students and an array shuffle function that I found on [StackOverflow](https://stackoverflow.com) to shuffle the copy.

```javascript
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
```

I check to make sure that the two arrays are not equal, and if they aren't, I match up the students. This way, every student has a unique pair.

```javascript
function isEqual(vals, copy) {
  for (var i = 0; i < vals.length; i++) {
    if (vals[i][1] === copy[i][1]) {
      return true;
    }
  }
  return false;
}
```

### Find the complete code and help me to clean up my code a little bit on the [Github repository](https://github.com/rheajt/Holiday-Gift-Exchange)
