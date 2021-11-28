---
title: 'Contact Form'
subtitle: 'Using apps script to create a contact form for your website'
author: jordan
categories:
  - Web Applications
  - Portfolio
tags:
  - Projects
  - html
  - google forms
  - google apps script
  - javascript
  - coding
  - contact form
youtube: 'https://www.youtube.com/watch?v=2Vx00MAmhbs'
image: maxresdefault.jpg
---

Create a contact form on your website hosted on a static site.

​<iframe width="560" height="315" src="https://www.youtube.com/embed/2Vx00MAmhbs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

When you have a cheap shared server package from one of the giant hosting services, it can be hard to build a website that don't involve giant Wordpress add-ons.

There are more efficient ways to do these things! One of those ways is a contact form to get feedback from your users, just like the contact form on my page!

<p data-height="265" data-theme-id="0" data-slug-hash="prGjdV" data-default-tab="html,result" data-user="rheajt" data-embed-version="2" data-pen-title="Contact Form" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/rheajt/pen/prGjdV/">Contact Form</a> by jordan rhea (<a href="https://codepen.io/rheajt">@rheajt</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

You just need to create a script on your drive and deploy it as a web app. You want to make sure that you `Execute the app as yourself` and make it accessible by `Anyone, even anonymous`. Then just use the code below. Be sure to put in your own data!

Code.gs

```javascript
function doPost(e) {
  var json = JSON.parse(e.postData.contents);

  var response = sendMail({
    name: json.name,
    email: json.email,
    subject: json.subject,
    body: json.body,
  });

  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

function sendMail(data) {
  try {
    var html = HtmlService.createTemplateFromFile('email');
    html.name = data.name;
    html.email = data.email;
    html.subject = data.subject;
    html.body = data.body;

    //This should probably be changed to the MailApp service now
    GmailApp.sendEmail('<<YOUR EMAIL ADDRESS>>', data.subject + '[CONTACT FORM]', '', {
      name: 'Contact Form',
      replyTo: data.email,
      htmlBody: html.evaluate().getContent(),
    });

    return {
      code: 'success',
      msg: "Thanks for contacting me! I can't wait to talk about #EdTech with you!",
    };
  } catch (err) {
    return {
      code: 'danger',
      msg: 'Something went wrong! Technology is not always pretty!',
    };
  }
}
```

email.html

```html
<!DOCTYPE html>
<html>
  <head>
    <base target="_top" />
  </head>
  <body>
    <h3>
      You are being contacted from your website by <b><?= name ?></b> at <b><?= email ?></b>
    </h3>

    <p>
      Time sent:
      <b
        ><?= new Date().toDateString() ?>
        at
        <?= new Date().toTimeString() ?></b
      >
    </p>

    <p>
      Subject: <b><?= subject ?></b>
    </p>

    <p><?= body ?></p>
  </body>
</html>
```
