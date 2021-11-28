---
title: Parsing a PDF to CSV
categories:
  - Blog
tags:
  - Projects
  - google apps script
  - javascript
  - solutions
youtube: <<YOUTUBE_URL>>
image: ../../img/default-code.png
---

```javascript
const fs = require('fs');
const pdf = require('pdf-parse');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const file = './pdfs/unofficial-transcripts.pdf';

let dataBuffer = fs.readFileSync(file);

let pages = [];
// default render callback
async function renderPage(pageData) {
  //check documents https://mozilla.github.io/pdf.js/
  let renderOptions = {
    //replaces all occurrences of whitespace with standard spaces (0x20). The default value is `false`.
    normalizeWhitespace: false,
    //do not attempt to combine same line TextItem's. The default value is `false`.
    disableCombineTextItems: false,
  };
  return pageData.getTextContent(renderOptions).then(textContent => {
    // try {
    let lastY, text;

    const obj = {
      name: '',
      courses: [],
    };

    for (let item of textContent.items) {
      if (item.transform[5] === 734.1152) {
        // console.log(item);
        obj.name += item.str;
        continue;
      }

      if (item.transform[5] <= 734.1152) {
        if (lastY == item.transform[5] || !lastY) {
          // text += item.str;
          obj.courses[obj.courses.length - 1].scores.push(item.str);
        } else {
          // text += '\n' + item.str;
          obj.courses.push({ courseName: item.str, scores: [] });
        }
      }

      lastY = item.transform[5];
    }

    // return text;
    pages.push(obj);
    return JSON.stringify(obj);
  });
}

let options = {
  pagerender: renderPage,
};

pdf(dataBuffer, options).then(function(data) {
  const records = pages.reduce((acc, cur) => {
    cur.courses.forEach(course => {
      const record = {};
      record.studentName = cur.name
        .replace('STUDENT NAME:', '')
        .replace(/\?/g, '')
        .trim();

      record.courseName = course.courseName;

      if (!course.scores.includes('CR')) {
        record.cr = course.scores[0];
        record.s1fpmy = course.scores[1];
        record.fg = course.scores[2];
      }

      acc.push(record);
    });

    return acc;
  }, []);

  console.log(records);

  const csvWriter = createCsvWriter({
    path: 'transcript-records.csv',
    header: [
      { id: 'studentName', title: 'Student Name' },
      { id: 'courseName', title: 'Course Name' },
      { id: 'cr', title: 'CR' },
      { id: 's1fpmy', title: 'S1F/PMY' },
      { id: 'fg', title: 'FG' },
    ],
  });

  csvWriter.writeRecords(records).then(() => console.log('done'));
});
```
