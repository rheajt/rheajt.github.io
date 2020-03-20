---
title: 'Insert From Drawings'
subTitle: 'Get drawings directly into your Slidedecks'
author: jordan
categories:
  - Data Automations
  - Portfolio
tags:
  - google apps script
  - google drawings
  - google slides
  - community suggestions
  - features
youtube: 'https://www.youtube.com/watch?v=_Z9QOx8qrW0'

---

## During the #GoogleEI twitter chat, an idea was proposed and I couldn't help but give it a try.

​<iframe width="560" height="315" src="https://www.youtube.com/embed/_Z9QOx8qrW0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Thanks to [@jentechnology](https://twitter.com/jentech) for the great idea. Check her out on Twitter to see the super cool stuff she is doing with using slides to create yearbooks.

I had no idea, but you can't actually import a drawing directly into a slide. You can only import image files. Well with, a little bit of code I fixed that.

I used the basic file-select documentation to build the file picker itself. This is pretty easy to follow along with [here]().

Once you have done that, a little bit of manipulation and you are golden.

```javascript
function getDrawing(drawingId) {
  var image = Drive.Files.get(drawingId);

  var imageBlob = getBlob(image.exportLinks['image/jpeg']);
  var presentation = SlidesApp.getActivePresentation();
  var currentPage = presentation.getSelection().getCurrentPage();
  currentPage.insertImage(imageBlob);
}

function getBlob(url) {
  var response = UrlFetchApp.fetch(url, {
    headers: {
      Authorization: 'Bearer ' + ScriptApp.getOAuthToken(),
    },
  });

  return response.getBlob();
}
```

I did publish it to the add-on store, but it is unlisted. Installing add-ons is the easy way out! Look at the code, use the code, and improve the code!

[Github Repository](https://github.com/rheajt/Insert-From-Drawings)

[Chrome Web Store](https://chrome.google.com/webstore/detail/insert-from-drawings/hgkklaeengmfkbfjlnnakgkcknbcjfoc?hl=en)
