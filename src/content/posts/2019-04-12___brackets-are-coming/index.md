---
title: Brackets are Coming
subTitle: You either win or you die!
author: jordan
categories:
  - Google Forms
tags:
  - Projects
  - javascript
  - solutions
  - pdf
  - document flow
youtube: 'https://www.youtube.com/watch?v=OgWuQNs2FMQ'
image: maxresdefault.jpg
---

Winter is here and brackets are coming! If you are like me, you lost your NCAA bracket. But that isn't the end for aspiring bracketologists...

There are some awesome people at [FollowTheThrone.com](https://followthethrone.com) who came up with a bracket for season 8 of Game of Thrones. It is a really cool idea.

It made me think that there had to be a way I could incorporate a little bit of code into the form and automate the creation of a PDF file and then email it to the person submitting the bracket.

<iframe width="560" height="315" src="https://www.youtube.com/embed/OgWuQNs2FMQ?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

There are a lot of characters so it does take a few minutes to complete the form. [Go ahead and do that here.](https://forms.gle/JNQnriTZ1J1dD7UA6)

If you watched the video above, then you should get the idea.

First, I created a variable to store all of the options.

```javascript
var ALL_SHAPES = {
  'Episode 1': 'g57c35e1c7d_0_0',
  'House Stark': 'g57c35e1c7d_0_1',
  'Episode 2': 'g57c35e1c7d_0_2',
  'Episode 3': 'g57c35e1c7d_0_3',
  'Episode 4': 'g57c35e1c7d_0_4',
  'Episode 5': 'g57c35e1c7d_0_5',
  'Episode 6': 'g57c35e1c7d_0_6',
  'House Baratheon': 'g57c35e1c7d_29_7',
  'House Arryn': 'g57c35e1c7d_29_8',
  'House Tully': 'g57c35e1c7d_29_9',
  'House Frey': 'g57c35e1c7d_29_10',
  'House Lannister': 'g57c35e1c7d_29_11',
  'House Targaryen': 'g57c35e1c7d_29_12',
  'House Greyjoy': 'g57c35e1c7d_29_13',
  'House Tarly': 'g57c35e1c7d_29_14',
  'Free Folk': 'g57c35e1c7d_29_15',
  'Nights Watch': 'g57c35e1c7d_29_16',
  Others: 'g57c35e1c7d_29_17',
  'Who takes the throne?': 'g57c35e1c7d_29_18',
};
```

That is easy enough, but I also need a couple of other variables. One to store the Google Slide that I am using to create the PDF, and one to store the folder ID where I want the PDFs saved.

Once you have done that, it is just an installable `onSubmit(e)` trigger. For all you JS wizards out there looking through my code, I am sure this can be refactored into a much cleaner solution. Let me know in the comments below!

Basically, I am using the reduce method to turn the responses into an object matching the options I defined above. Then I just iterate over the options and BOOM! ... we got ourselves a PDF goin'!

```javascript
function onSubmit(e) {
  var response = e.response;
  var email = '',
    name = '';

  var keys = Object.keys(ALL_SHAPES);
  var allItems = keys.reduce(function(acc, key) {
    acc[key] = [];
    return acc;
  }, {});

  //parse items into multidimensional
  var items = response.getItemResponses().reduce(function(acc, each) {
    var item = each.getItem();
    if (item.getType() === FormApp.ItemType.GRID) {
      item = item.asGridItem();
      var title = item.getTitle();
      var rows = item.getRows();
      var answers = each.getResponse();

      rows.forEach(function(row, ind) {
        if (answers[ind] === 'Survive') {
          acc[title].push(row);
        } else {
          acc[answers[ind]].push(row);
        }
      });
    } else {
      var title = item.getTitle();
      var answer = each.getResponse();
      Logger.log(title);
      if (title === 'Email address where you want your bracket sent') {
        email = answer;
      }

      if (title === 'What is your name?') {
        name = answer;
      }

      if (title === 'Who takes the throne?') {
        acc[title].push(answer);
      }
    }

    return acc;
  }, allItems);

  //copy the template
  var copiedFile = DriveApp.getFileById(slidesId).makeCopy();
  var copiedFileId = copiedFile.getId();
  DriveApp.getFolderById(folderId).addFile(copiedFile);

  //insert the answers
  var slideDeck = SlidesApp.openById(copiedFileId);

  for (var i = 0; i < keys.length; i++) {
    var currentShapeId = ALL_SHAPES[keys[i]];
    var currentShape = slideDeck.getPageElementById(currentShapeId).asShape();
    if (items[keys[i]].length > 0) {
      currentShape.getText().setText(items[keys[i]].join('\n'));
    } else if (items[keys[i]].length === 0 && keys[i].indexOf('Episode') > -1) {
      currentShape.getText().setText('Nobody');
    }
  }

  slideDeck.saveAndClose();

  copiedFile = DriveApp.getFileById(copiedFileId);
  var pdf = DriveApp.createFile(copiedFile.getAs('application/pdf')).setName(name + '-GoT-Bracket');
  DriveApp.getFolderById(folderId).addFile(pdf);
  copiedFile.setTrashed(true);

  //get download link alternative
  // var downloadUrl = pdf.getDownloadUrl();

  //mail the pdf
  try {
    MailApp.sendEmail(email, 'Game of Thrones Bracket', 'Here is your bracket!', {
      attachments: [pdf.getBlob()],
    });
  } catch (err) {
    console.log(err);
  }
  return true;
}
```

Let me know in comments what you think.
