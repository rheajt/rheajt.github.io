---
title: 'Multi-DropDown DataValidation'
subtitle: 'A tool I created to make it easier to create dropdown data validations in Google Sheets'
author: jordan
categories:
  - Productivity
  - Portfolio
tags:
  - Projects
  - google apps script
  - data validation
  - dropdowns
  - google sheets
  - needs update
youtube: 'https://www.youtube.com/watch?v=1tQLg69L0JY'
image: sddefault.jpg
---

### Updated on Oct. 22nd 2018!

​<iframe width="560" height="315" src="https://www.youtube.com/embed/1tQLg69L0JY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

I have finally updated this add-on due to getting tons of messages about it having stopped working in the summer. Some of the differences between the development and production environments for the code here caused some difficulties, however, I think it is working now!

Let me know in the comments below if you have problems!

It works by saving in the `PropertiesService` the sheet where you want the dropdown, and the location of the categories. For example, here is the function that creates the named range dropdown.

```javascript
function createNamedRule(data) {
  var ranges = SpreadsheetApp.getActiveSpreadsheet()
    .getNamedRanges()
    .reduce(function(acc, curr) {
      if (curr.getName().indexOf(data.source) > -1) {
        acc.push(curr.getRange().getValue());
      }
      return acc;
    }, []);

  var rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(ranges, true)
    .build();
  return rule;
}
```

Then in the `onEdit(e)` I am looking for the new value of the cell.

```javascript
function changeNamedRule(title, select) {
  var ranges = SpreadsheetApp.getActiveSpreadsheet()
    .getNamedRanges()
    .reduce(function(acc, curr) {
      var category = curr.getRange().getValue();
      if (category == select) {
        acc = curr
          .getRange()
          .getValues()
          .slice(1);
      }
      return acc;
    }, []);

  var rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(ranges, true)
    .build();
  return rule;
}
```

It is a fairly simple process but there are so many different custom use cases, it is really difficult to build a tool that fits all needs. If there are custom implementations that you need, contact me and with any luck we can work together on a similar project!

[Find Multi-Dropdowns on the Chome Webstore](https://chrome.google.com/webstore/detail/dynamic-dropdowns/ablikkpbpbkbgfleddaecmgklbnoflid)
