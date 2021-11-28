---
title: 'The Properties Service'
subTitle: 'Using the properties service to dynamically access data in your Projects'
author: jordan
categories:
  - Demonstrations
tags:
  - Projects
  - properties service
  - dynamic data
  - google slides
youtube: 'https://www.youtube.com/watch?v=x2QMpLjBukg'
image: maxresdefault.jpg
---

Another dope idea from the yearbook guru [@jentechnology](https://twitter.com/jentechnology).

​<iframe width="560" height="315" src="https://www.youtube.com/embed/x2QMpLjBukg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

I noticed that she was asking about a better way to store notes inside of a slidedeck. She uses Google Keep currently, but wondered if there is an add-on available.

I don't know of one, but we can definitely build it! The properties service is a way to save data INSIDE a document. There are 3 different services available.

1. `PropertiesService.getScriptProperties()` is for all the users of a specific script.

2. `PropertiesService.getDocumentProperties()` is for all the users of a single, specific document.

3. `PropertiesService.getUserProperties()` is for only the specific user saving the properties.

Each serves a specific purpose, and in this case we want to use the same properties in any slideshow that we use this add-on, so we are choosing the `Script` properties. However, they are all used the same way!

Since the properties service is only capable of saving simple data, we can't directly save an object, so we need to stringify it first. Below I am sharing two simple functions that allow you to save an array into the script properties.

```javascript
function putTheme(theme) {
  var props = JSON.parse(PropertiesService.getScriptProperties().getProperty('THEMES')) || [];

  props.push(theme);

  PropertiesService.getScriptProperties().setProperty('THEMES', JSON.stringify(props));

  return props;
}

function getThemes() {
  var props = JSON.parse(PropertiesService.getScriptProperties().getProperty('THEMES')) || [];

  return props;
}
```

For the full code, check out the github repository! If you want to contribute, 1) fork the repo, 2) make changes, 3) share your changes back with the community!

[Github Repository](https://github.com/rheajt/Color-Theme-Properties-Service)
