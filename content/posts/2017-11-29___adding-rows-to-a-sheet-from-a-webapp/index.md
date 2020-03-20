---
title: 'Adding Rows to a Sheet from a WebApp'
subTitle: 'A demonstration of the doPost(e) trigger using a web app'
author: jordan
categories:
  - Demonstrations
tags:
  - Projects
  - javascript
  - coding
  - web apps
  - dopost trigger
youtube: 'https://www.youtube.com/watch?v=kZkiTgtvVW0'
---

A great community suggestion from John Galla in the comments of a previous video!

​<iframe width="560" height="315" src="https://www.youtube.com/embed/kZkiTgtvVW0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

The `Code.gs` file is simply:

```javascript
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index').setTitle('Adding Rows');
}

function sendText(data) {
  var sheet = SpreadsheetApp.openById(
    '1bpPJq8U4QIAN_ojHdipP9h9Qvu2aaJpy7CSbIFA_DRM',
  ).getActiveSheet();

  sheet.appendRow([data.studentName, data.studentSentence]);

  return 'Success!';
}
```

Then, on the front-end of your project, you need to do some work! When you send and recieve data from a webpage without reloading or redirecting, this is called 'asynchronous' and can be achieved with some simple Javascript.

```html
<form onsubmit="sendText(event)">
  <input type="text" name="student-name" />

  <input type="text" name="student-sentence" />

  <input type="submit" value="submit" />
</form>

<script>
  function sendText(e) {
    e.preventDefault();

    var data = {
      studentName: e.target['student-name'].value,
      studentSentence: e.target['student-sentence'].value,
    };

    google.script.run
      .withSuccessHandler(function(response) {
        console.log(response);
      })
      .sendText(data);
  }
</script>
```

Often, in my `html` files involved in an Apps Script project, I just put the JavaScript inline with the rest of the code. This cuts down on clutter. If your files get too big though, you can easily break them into multiple template files.

If you have an idea for a project, or need some help with Google Apps Script... let me know in my [new Reddit Community: Teachers Can Code!](https://reddit.com/r/teacherscancode)

## Please help me out by sharing any of my Projects that you like with teachers that you know!
