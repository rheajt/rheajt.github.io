---
title: 'Sharable Link Trigger'
subTitle: 'I wanted to demonstrate how to change document properties on a trigger'
author: jordan
categories:
  - Productivity
  - Work Tools
tags:
  - Projects
  - triggers
  - link sharing
  - google apps script
  - automation
  - properties service
youtube: 'https://www.youtube.com/watch?v=CNa73KOqHyI'
---

## Sometimes you want to share a document with an entire class and let everyone have edit permissions. However, what if you want to revoke those permissions at a specific time? Easy as pie with just a few lines of code.

​<iframe width="560" height="315" src="https://www.youtube.com/embed/CNa73KOqHyI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

My friend [Gretchen Orwig](https://twitter.com/goblees) suggested this project and luckily I was able to write it pretty quickly. Just open the script editor in any document that you want to set the triggering system in. Then just copy in the code below and create a project trigger as in my video!

```javascript
function removeSharing() {
  var id = SlidesApp.getActivePresentation().getId();
  var file = DriveApp.getFileById(id);

  file.setSharing(DriveApp.Access.DOMAIN_WITH_LINK, DriveApp.Permission.VIEW);
}
```

Let me know on twitter what you think! Do you have any ideas for ways to incorporate code into your G Suite for Edu Projects? Share them with us!
