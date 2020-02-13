---
draft: true
title: Building a Data Studio Connector with Apps Script
categories:
  - portfolio
tags:
  - Projects
  - google apps script
  - javascript
  - solutions
  - data studio
youtube: ''
image: ../../img/default-code.png
---

Creating data studios is a pretty awesome way to create data visualizations. However, if the connectors don't already exist, you have to find ways to make them exist. That is where Google Apps Script comes into play. That is what we are going to do now!

Part 1: Building and deploying the connector
Part 2: Refactoring the code and caching the data
Part 3: Design the dashboard and embed in a website

First step is creating an Auth.gs file and writing some simple Authentication data. There are other ways to do the authentication, but we are going to stick with the easy way to start.

```javascript
var cc = DataStudioApp.createCommunityConnector();

// https://developers.google.com/datastudio/connector/reference#getauthtype
function getAuthType() {
  var AuthTypes = cc.AuthType;
  return cc
    .newAuthTypeResponse()
    .setAuthType(AuthTypes.NONE)
    .build();
}

// https://developers.google.com/datastudio/connector/reference#isadminuser
function isAdminUser() {
  return false;
}
```

Next up is building the configuration. These are parameters that get attached to the request that we can use throughout the connection process. In this project we don't really need them, but I am going to put my user id on there for fun.

```javascript
var cc = DataStudioApp.createCommunityConnector();
var DEFAULT_USER = PropertiesService.getScriptProperties().getProperty('STACKOVERFLOW_USER_ID');

// https://developers.google.com/datastudio/connector/reference#getconfig
function getConfig() {
  var config = cc.getConfig();

  config
    .newInfo()
    .setId('instructions')
    .setText('Enter the User Id to pull StackOverflow data');

  config
    .newTextInput()
    .setId('userId')
    .setName('Enter a single user id')
    .setHelpText('e.g. "4541958"')
    .setPlaceholder(DEFAULT_USER)
    .setAllowOverride(true);

  //  config.setDateRangeRequired(true);

  return config.build();
}
```

Now comes the schema. This is the backbone of the whole connector. The connector uses the schema to define the data that comes back from ... wherever it comes from. In this case, it is coming from a couple of different APIs.

```javascript
function getFields() {
  var fields = cc.getFields();
  var types = cc.FieldType;
  var aggregations = cc.AggregationType;

  fields
    .newDimension()
    .setId('display_name')
    .setName('Display Name')
    .setType(types.TEXT);

  fields
    .newDimension()
    .setId('link')
    .setName('Link')
    .setType(types.URL);

  fields
    .newDimension()
    .setId('profile_image')
    .setName('Profile Image')
    .setType(types.URL);

  fields
    .newDimension()
    .setId('gold_badges')
    .setName('Gold Badges')
    .setType(types.NUMBER);

  fields
    .newDimension()
    .setId('silver_badges')
    .setName('Silver Badges')
    .setType(types.NUMBER);

  fields
    .newDimension()
    .setId('bronze_badges')
    .setName('Bronze Badges')
    .setType(types.NUMBER);

  fields
    .newMetric()
    .setId('reputation')
    .setName('Reputation')
    .setType(types.NUMBER)
    .setAggregation(aggregations.SUM);

  return fields;
}

// https://developers.google.com/datastudio/connector/reference#getschema
function getSchema(request) {
  var schema = { schema: getFields().build() };
  console.log(schema);
  return schema;
}
```

After the backbone, now we gotta put some muscles on this thing. The `getData` function does that, it organizes the work that needs to be done.

```javascript
// https://developers.google.com/datastudio/connector/reference#getdata
function getData(request) {
  var requestedFields = getFields().forIds(
    request.fields.map(function(field) {
      return field.name;
    }),
  );

  try {
    console.log('start request');
    var apiResponse = fetchDataFromApi(request);
    var data = formatData(apiResponse, requestedFields);
    console.log(data);
  } catch (e) {
    cc.newUserError()
      .setDebugText('Error fetching data from API. Exception details: ' + e)
      .setText(
        'The connector has encountered an unrecoverable error. Please try again later, or file an issue if this error persists.',
      )
      .throwException();
  }

  return {
    schema: requestedFields.build(),
    rows: data,
  };
}

function fetchDataFromApi(request) {
  request = request;
  var url = [
    'https://api.stackexchange.com/2.2/users/' + request.configParams.userId,
    '?order=desc&sort=reputation&site=stackoverflow',
    '&key=' + PropertiesService.getScriptProperties().getProperty('STACKOVERFLOW_KEY'),
  ].join('');
  var response = UrlFetchApp.fetch(url);
  return JSON.parse(response.getContentText());
}

function formatData(response, requestedFields) {
  var item = response.items.shift();
  console.log(item);
  var row = requestedFields.asArray().map(function(field) {
    switch (field.getId()) {
      case 'display_name':
        return item.display_name;

      case 'link':
        return item.link;

      case 'profile_image':
        return item.profile_image;

      case 'gold_badges':
        return item.badge_counts.gold;

      case 'silver_badges':
        return item.badge_counts.silver;

      case 'bronze_badges':
        return item.badge_counts.bronze;

      case 'reputation':
        return item.reputation;

      default:
        return '';
    }
  });
  return [{ values: row }];
}
```

Finally, we can write the manifest and then deploy from manifest. This will provide us with a project ID that we can connect as a data source in data studio.

```json
{
  "timeZone": "Asia/Hong_Kong",
  "dependencies": {},
  "dataStudio": {
    "name": "Developer Data",
    "logoUrl": "https://jordanrhea.com/static/isotope-81ac8718d875fc9e5fad9213dd690341.png",
    "company": "jordanrhea.com",
    "companyUrl": "jordanrhea.com",
    "addonUrl": "https://techyenglish.com",
    "supportUrl": "https://techyenglish.com",
    "description": "get developer data",
    "sources": ["stackoverflow", "github"]
  }
}
```

Whew! With any luck that will generate a data source that you can use to start building your dashboard. In part 2 we will be adding a cache to limit the number of requests we have to make to various APIs (because we will also be adding some other data sources!).
