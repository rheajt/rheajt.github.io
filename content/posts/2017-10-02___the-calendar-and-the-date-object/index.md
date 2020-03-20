---
title: 'The Calendar and the Date Object'
subTitle: 'Calendar and Date object'
author: jordan
categories:
  - Demonstrations
tags:
  - Projects
  - javascript
  - google apps script
  - google calendar
  - dates
  - date object
youtube: 'https://www.youtube.com/watch?v=tOrd_bIrf-Y'
---

## I love when people suggest things for videos... even when they aren't teachers! I made this channel to inspire teachers to think of ways to use coding to build teacher tools, but that doesn't exclude others from joining the conversation.

​<iframe width="560" height="315" src="https://www.youtube.com/embed/tOrd_bIrf-Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

There are a ton of ways to use code to make our lives easier and this is another one suggested by a viewer.

```javascript
function getEvents() {
  var now = new Date();

  var year = now.getYear();
  var month = now.getMonth();
  var day = now.getDay() + 1;

  var today = new Date(year, month, day);
  var tomorrow = new Date(year, month, day, 24);

  var events = CalendarApp.getEvents(today, tomorrow);

  for (var i = 0; i < events.length; i++) {
    Logger.log(events[i].getTitle());
  }
}
```

Creating the date object is the easy part. Once you create the object, there are tons of methods available that allow you to manipulate the object in a number of ways.

[Check the docs for more methods that you can use](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

In my code, all I am doing is using `Logger.log` to print the title to the apps script log. There are tons of methods available provided by apps script. That documentation can be found [here!](https://developers.google.com/apps-script/reference/calendar/calendar-event)

What ideas do you have? Hit me up on twitter or my [plnnr.net](https://plnnr.net) project to make some suggestions of your own!
