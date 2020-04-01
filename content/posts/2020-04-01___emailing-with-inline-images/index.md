---
title: Emailing with Inline Images
categories:
  - Blog
tags:
  - Projects
  - google apps script
  - mailapp
  - images
  - html
  - javascript
  - solutions
youtube: https://www.youtube.com/watch?v=DoYZTsNkbsk
image: thumbnail.jpg
---

```js
function sendPics() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getActiveSheet();

  const cell = sheet.getActiveCell();
  const row = cell.getRow();
  const column = cell.getColumn();

  const assignmentName = sheet.getRange(4, column).getValue();
  const emailAddress = sheet.getRange(row, 3).getValue();
  const subjectLine = "Congratulations! You've earned an Assignment Badge!";
  const body =
    'By earning this badge you are helping Dragon find his way home!';

  ss.toast(emailAddress + ': ' + assignmentName);
  const html = HtmlService.createTemplateFromFile('email');
  html.assignmentName = assignmentName;

  const picture1 = DriveApp.getFileById('1uybi-n3BSDv_OgSlI43i-ZRVb9YSigz6'); //public with link
  MailApp.sendEmail(emailAddress, subjectLine, body, {
    htmlBody: html.evaluate().getContent(),
    inlineImages: { dragonBadge: picture1.getBlob() },
  });
}
```

```html
<div
  class="container"
  style="width: 400px; text-align: center; margin: 0 auto; position: relative; font-family: sans-serif;"
>
  <h1
    style="position: absolute; width: 100%; top: 230px; font-size: 2rem; text-shadow: 1px 1px 5px black;"
  >
    <?= assignmentName ?>
  </h1>
  <img src="cid:dragonBadge" alt="badge" style="width: 100%;" />
  <p>
    Congratulations! You are helping (Dragon) find his way home! You have done
    an amazing job this week and earned a badge! Keep earning badges and
    (Dragon) will get home soon!
  </p>
</div>
```
