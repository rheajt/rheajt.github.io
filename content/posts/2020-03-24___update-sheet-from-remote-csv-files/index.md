---
title: Update Sheet from Remote CSV Files
categories:
  - Blog
tags:
  - projects
  - google apps script
  - javascript
  - solutions
  - csv
  - google sheets
  - github
youtube: https://www.youtube.com/watch?v=rvQyR17s9kc
image: thumbnail.jpg
---

## We already pulled some data from a CSV file stored on Github. Now we need a way to update this.

<iframe width="560" height="315" src="https://www.youtube.com/embed/rvQyR17s9kc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Here is a down and dirty implementation of exactly that. The problem remains "What if they change the number of columns on the remote CSV files?" We can tackle that problem when the time comes. For now, hope this gives you some ideas!

```javascript
function main() {
  const dateRange = getLastDateUpdatedRange();

  const requests = dateRange.map(date => {
    return {
      header: {},
      url: `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${date}.csv`,
      method: 'get',
      muteHttpExceptions: true,
    };
  });

  const responses = UrlFetchApp.fetchAll(requests);
  const allCsvRows = processResponses(dateRange, responses);
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName('COVID-19 Daily Reports');

  const range = sheet
    .getRange(sheet.getLastRow() + 1, 1, allCsvRows.length, 9)
    .setValues(allCsvRows);
}

function getDateRange(startDate) {
  const dateRange = [];
  const current = startDate || new Date('01-22-2020');

  while (current < new Date()) {
    dateRange.push(Utilities.formatDate(current, 'GMT+08:00', 'MM-dd-yyyy'));
    current.setDate(current.getDate() + 1);
  }

  return dateRange;
}

function getLastDateUpdatedRange() {
  const sheet = SpreadsheetApp.getActive().getSheetByName(
    'COVID-19 Daily Reports'
  );
  const dateRange = sheet.getRange(sheet.getLastRow(), 1);
  const value = dateRange.getValue();
  const date = new Date(value);
  date.setDate(date.getDate() + 1);

  return getDateRange(date);
}

function processResponses(dateRange, responses) {
  return responses.reduce((acc, cur, ind) => {
    if (cur.getResponseCode() === 404) return acc; // if the url didn't work, ignore
    const date = dateRange[ind];

    const csv = Utilities.parseCsv(cur.getContentText()).reduce(
      (acc, row, rowInd) => {
        //first row is headers, so ignore
        if (rowInd === 0) {
          return acc;
        }

        //add the date to the first column, spread the remaining elements of the row
        acc.push([date, ...row]);

        return acc;
      },
      []
    );

    return acc.concat(csv);
  }, []);
}
```
