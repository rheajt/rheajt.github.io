---
title: The Goodreads API in a Custom Function
subTitle: Using the Goodreads API in a custom function to curate classroom book lists
author: jordan
categories:
  - Web Applications
  - Portfolio
tags:
  - Projects
  - github
  - urlfetchapp
  - custom functions
  - google sheets
  - goodreads api
youtube: 'https://www.youtube.com/watch?v=x4TMk7otZWI'
image: maxresdefault.jpg
---

## Do you ever keep lists of books for your students on Goodreads? In this video I am showing how we can write a custom function to get data straight from the Goodreads API into a spreadsheet.

​<iframe width="560" height="315" src="https://www.youtube.com/embed/x4TMk7otZWI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

There are tons of things you can do with custom functions. I have made several videos demonstrating some of those things.

```javascript
function GETAUTHOR(book) {
  book = encodeURIComponent(book);
  var url = 'https://www.goodreads.com/search/index.xml?key=0VWQwPpAjauc0yyC4GFwdg&q=' + book;

  var response = UrlFetchApp.fetch(url).getContentText();

  var xml = XmlService.parse(response);

  var root = xml.getRootElement();

  var author = root
    .getChild('search')
    .getChild('results')
    .getChild('work')
    .getChild('best_book')
    .getChild('author')
    .getChild('name')
    .getValue();

  return author;
}
```

Check out my video about how you can use autocompleting to make your custom functions more accessible to collaborators.
