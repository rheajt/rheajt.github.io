---
title: 'Summer Vacation Map'
subTitle: 'A project to aggregate location data into a cool map visualization'
author: jordan
categories:
  - Teacher Tools
  - Web Applications
  - Portfolio
tags:
  - Projects
  - google apps script
  - google maps
  - teacher tools
  - collaboration
  - summer vacation
  - feedback
  - visual
youtube: 'https://www.youtube.com/watch?v=9lSm07ZJ-6k'
image: maxresdefault.jpg
---

## This is a project that I built for a part of a demo slam with [Ceci Gomez-Galvez](https://twitter.com/cecigomez_g) at the Shekou Summit.

## This is a longer project that I usually post so feel free to ask questions below. I really want to hear from other educators about how to use this kind of tool to direct instruction.

​<iframe width="560" height="315" src="https://www.youtube.com/embed/9lSm07ZJ-6k" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

The first thing you need is to create a form as I did in the video. Then make sure you create a trigger like below. This will ensure that everytime someone submits your form, it grabs the geo-codes for that city.

Code.gs

```javascript
function submitTrigger(e) {
  var range = e.range;
  var vals = e.values;

  var response = Maps.newGeocoder().geocode(vals[3]);

  var geoCodes = [
    response.results[0].geometry.location.lat,
    response.results[0].geometry.location.lng,
  ];

  //Make sure that you put the geoCodes variable into square brackets
  //The setValues method expects to have a multi-dimensional array.
  SpreadsheetApp.getActiveSheet()
    .getRange(range.getRow(), 5, 1, 2)
    .setValues([geoCodes]);
}
```
