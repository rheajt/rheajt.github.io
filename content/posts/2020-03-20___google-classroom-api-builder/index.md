---
draft: true
title: Google Classroom API Builder
categories:
  - google classroom
tags:
  - google apps script
  - javascript
  - automation
youtube: ''
image: ../../img/default-code.png
---

```javascript
function main() {
  // 1. get the courses from the spreadsheet
  const courses = getCoursesFromSpreadsheet();

  // 2. create the courses on the classroom

  const responses = courses.map((course, ind) => {
    const resource = createCourseResource(course);
    const response = Classroom.Courses.create(resource);
    course[3] = response.alternateLink;
    course[4] = response.enrollmentCode;
    return course;
  });

  // 3. write the course url and share code the spreadsheet
  return writeCoursesToSpreadsheet(responses);
}

function writeCoursesToSpreadsheet(courses) {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName('CourseSingleSheet');
  const range = sheet.getRange(
    2,
    1,
    sheet.getLastRow() - 1,
    sheet.getLastColumn()
  );

  //set new values
  range.setValues(courses);

  return true;
}

function getCoursesFromSpreadsheet() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName('CourseSingleSheet');
  const data = sheet.getDataRange().getValues();
  data.shift();
  return data.filter(row => row !== null);
}

function createCourseResource(course) {
  const [courseName, instructorName, instructorEmail] = course;

  const resource = Classroom.newCourse();
  resource.name = courseName;
  resource.ownerId = 'me';
  resource.description = instructorName;
  return resource;
}
```
