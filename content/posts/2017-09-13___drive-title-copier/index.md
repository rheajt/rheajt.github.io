---
title: 'Drive Title Copier'
subtitle: 'Repeat your tasks with simple code'
author: jordan
categories:
  - Productivity
  - Portfolio
tags:
  - Projects
  - google drive
  - automation
youtube: 'https://www.youtube.com/watch?v=vxrl5AuCoH8'
---

A colleague had a ton of student work that she needed names in the titles. She had the fear that she would have to open each document and manually change every title.

## Never fear! Google Apps Script to the rescue!

<iframe width="560" height="315" src="https://www.youtube.com/embed/vxrl5AuCoH8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

If there is a repeatable task, it is definitely a safe bet that it can be automated with a little bit of code. In this tutorial I am demonstrating an example of exactly that.

```javascript
function copyTitles() {
  var folderId = '<<<PUT THE NAME OF THE FOLDER WITH YOUR DOCUMENTS HERE>>>';
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFilesByType(MimeType.GOOGLE_DOCS);

  while (files.hasNext()) {
    var file = files.next();
    var fileId = file.getId();
    var fileName = file.getName();

    DocumentApp.openById(fileId)
      .getBody()
      .insertParagraph(0, fileName)
      .setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      .setHeading(DocumentApp.ParagraphHeading.HEADING1);
  }
}
```

What are some of the recurring tasks that you wish you could automate? Leave me some comments below!
