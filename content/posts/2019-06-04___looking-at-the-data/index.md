---
title: Looking at the Data!
subTitle: Taking a look at the data from the Game of Thrones brackets
author: jordan
categories:
  - Google Sheets
  - Portfolio
tags:
  - Projects
youtube: ''
image: look-at-the-data.png
---

I wanted to take a look at the responses to the Game of Thrones data I got back in [my Game of thrones season 8 bracket]() so I thought there were some good ways to leverage apps script to do that.

You may be saying to yourself "But Jordan... you can just use `=COUNT(...)`" or some other built in formulas.

To that I say... what is the fun in that? Lets write some code...

```javascript
function ANALYZE_RESPONSES(responses, colOrder) {
  var headers = responses.shift();
  colOrder = colOrder[0];
  var analysis = headers.map(function(character, ind) {
    var [house, name] = character.toString().split(' [');
    name = name.substring(0, name.length - 1);

    //first
    var tally = colOrder.reduce(function(acc, each) {
      acc[each] = 0;
      return acc;
    }, {});

    for (var i = 0; i < responses.length; i++) {
      tally[responses[i][ind]]++;
    }

    //then aggregate the tally with the order of the columns
    var aggregates = colOrder.map(function(col) {
      return Math.round((tally[col] / responses.length) * 100);
    });

    //add the conditional formatting to the table

    return [house, name].concat(aggregates);
  });

  return analysis;
}
```

This gives us a formula that we can use to create:

<iframe width="560" height="315" frameborder="0" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vScXqQ2KxmzwUGRfRVtbYgfXXXNCu4ZJZwA06k_fl8Sc332WkIlIAY5ex85-nV1Cae9MyEw4wGW_KQb/pubhtml?gid=393715392&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
