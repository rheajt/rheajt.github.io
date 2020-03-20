---
title: Instant Feedback
subTitle: Feedback is super important to a student and this project helps make it easier to provide
author: jordan
categories:
  - Teacher Tools
tags:
  - Projects
  - google apps script
  - feedback
  - google sheets
  - onedit trigger
youtube: 'https://www.youtube.com/watch?v=VuoKf5zap0M'
image: maxresdefault.jpg
---

Providing feedback is an important part of teaching. However, it can be hard to manage when you have a classroom full of students requiring your attention.

​<iframe width="560" height="315" src="https://www.youtube.com/embed/VuoKf5zap0M" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Teachers are constantly finding ways to manage the attention of students.

It is great when you can use technology to alleviate some of those problems.

```javascript
function onEdit(e) {
  var range = e.range;

  if (
    range.getColumn() >= 2 &&
    range.getColumn() <= 5 &&
    range.getRow() >= 2 &&
    range.getRow() <= 21 &&
    range.getA1Notation() !== 'B2'
  ) {
    //test to see if any of the cells should be formulas
    if (range.getFormula() === '' && range.getValue() !== '' && range.getColumn() !== 3) {
      range.setNote('Not a formula').setBackground('red');
    } else {
      range.clearNote().setBackground(null);
      isStepComplete(range);
    }
  } else {
    isStepComplete(range);
  }
}

function isStepComplete(range) {
  var steps = [
    { stepCell: 'G1', targetCell: 'B2' },
    { stepCell: 'G2', targetCell: 'D2' },
    { stepCell: 'G3', targetCell: 'E2' },
    { stepCell: 'G4', targetCell: 'B3' },
    { stepCell: 'G5', targetCell: 'E21' },
  ];

  for (var i = 0; i < steps.length; i++) {
    var cell = SpreadsheetApp.getActiveSpreadsheet().getRange(steps[i].targetCell);

    if (cell.getValue() !== '') {
      markComplete(steps[i].stepCell);
    } else {
      markIncomplete(steps[i].stepCell);
    }
  }
}

function markComplete(cell) {
  SpreadsheetApp.getActiveSheet()
    .getRange(cell)
    .setBackground('lightgreen')
    .setFontLine('line-through');
}

function markIncomplete(cell) {
  SpreadsheetApp.getActiveSheet()
    .getRange(cell)
    .setBackground(null)
    .setFontLine(null);
}
```
