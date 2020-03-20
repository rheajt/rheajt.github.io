---
title: Return JSON with ContentService
subTitle: Many APIs across the web serve content using JSON and now you can too
author: jordan
categories:
  - Web Applications
  - Portfolio
tags:
  - Projects
  - json
  - javascript
  - coding
  - contentservice
youtube: 'https://www.youtube.com/watch?v=TQzPIVJf6-w'
---

## Javascript Object Notation is one of the most common formats for sending data over the internet.

​<iframe width="560" height="315" src="https://www.youtube.com/embed/TQzPIVJf6-w" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

If you are building any sort of application for the web it is hard to believe that you wouldn't have come across JSON somewhere along the way.

You actually can use a deployed web app with Google Apps Script to serve JSON data to other services on the web. It is like a simple backend server without any of the hosting fees!

In the documentation they give this example:

```javascript
function doGet(request) {
  var events = CalendarApp.getEvents(
    new Date(Number(request.parameters.start) * 1000),
    new Date(Number(request.parameters.end) * 1000),
  );
  var result = {
    available: events.length == 0,
  };
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
```

In my video I do a little more of a deep dive into how to use the ContentService to serve your data. If you run into CORS problems you can also use JSONP.

Want to learn more about this? Send me a message on twitter or leave a comment below!
