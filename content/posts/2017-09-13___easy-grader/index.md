---
title: "Easy Grader"
subtitle: "Make the tedious task of marking grades on a spreadsheet a little easier"
author: jordan
categories:
    - Productivity
    - Portfolio
tags:
    - Projects
    - teacher tasks
    - teacher tools
    - google apps script
    - google add-ons
    - needs update
youtube: "https://www.youtube.com/watch?v=SOImg-iwT6c"
---

## Entering student marks... the easy way!

### Have you ever spent 5 hours marking work, and then realized it was going to take you another 45 minutes just to type those marks into a spreadsheet?

<iframe width="560" height="315" src="https://www.youtube.com/embed/SOImg-iwT6c" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

I wanted to create an easier way to enter those marks into a computer. Now you can even get it as an add-on!

In the documention for add-ons, it is advised to not import libraries such as Jquery into your Projects because they are pretty code heavy. However, I wanted to use the autocompleting methods provided in order to quickly sort through a roster of students.

You can easily import Jquery and Jquery-UI from Google libraries.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
```

```html
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
```

Using the methods is as easy as below!

```javascript
function getStudents() {
    //get the student names from the spreadsheet for fuzzy search
    google.script.run
        .withSuccessHandler(function (availableTags) {
            $("#tags").autocomplete({
                source: availableTags,
                autoFocus: true,
            });
        })
        .getAvailableTags();
}
```

The code for this project is available on [Github](https://github.com/rheajt/easy-grader) and it may still be live on the [Chrome Store](https://chrome.google.com/webstore/detail/easy-grader-add-on/bkloilagbahbeblhjgkojapenendkkpk)
