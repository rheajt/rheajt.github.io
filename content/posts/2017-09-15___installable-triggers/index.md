---
title: Installable Triggers
subTitle: Installable triggers provide a lot more function than the built in simple triggers
author: jordan
categories:
  - Demonstrations
  - Web Applications
tags:
  - Projects
  - installable triggers
  - google forms
youtube: 'https://www.youtube.com/watch?v=-bGuSYSeaGg'
image: maxresdefault.jpg
---

How to use installable triggers with Google Apps Script.

​<iframe width="560" height="315" src="https://www.youtube.com/embed/bGuSYSeaGg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

This project is based on a Google Form about a club signup. These kinds of signups always provide students with a first, second, and third choice. However, someone always has to go through and match those things up!

I wanted to create a system that automatically fills the club rosters with students first available choice based on when they sign up.

It is also a great way to demonstrate the installable trigger `onSubmit(e)` that you can use to run code when a user submits a form. Check out the code below:

```javascript
function formSubmit(e) {
  var choices = [
    e.namedValues['First Choice'][0],
    e.namedValues['Second Choice'][0],
    e.namedValues['Third Choice'][0],
  ];

  var studentData = [e.values[1], e.values[2]];

  var ss = SpreadsheetApp.getActiveSpreadsheet();

  var studentNeedsGroup = true;

  while (studentNeedsGroup) {
    var i = 0;
    if (!isGroupFull(choices[i])) {
      if (ss.getSheetByName(choices[i])) {
        ss.getSheetByName(choices[i]).appendRow(studentData);
      } else {
        ss.insertSheet(choices[i]).appendRow(studentData);
      }

      studentNeedsGroup = false;
    }
    i++;
  }
}

function isGroupFull(group) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(group);

  if (sheet) {
    return sheet.getDataRange().getValues().length >= 10 ? true : false;
  } else {
    return false;
  }
}
```

If you have any suggestions or questions, let me know in the comments below!
