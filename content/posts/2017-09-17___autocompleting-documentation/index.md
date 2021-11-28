---
title: Autocompleting Documentation
subTitle: Documenting your code makes it easier to understand
author: jordan
categories:
  - Web Applications
  - Work Tools
tags:
  - Projects
  - autocomplete
  - documentation
  - javascript
  - google apps script
  - google sheets
youtube: 'https://www.youtube.com/watch?v=3YiFlM2niFQ'
---

## How can you create those cool autocompleting popups on your custom functions?

## In this video I am explaining how to build them for yourself and your custom functions

​<iframe width="560" height="315" src="https://www.youtube.com/embed/3YiFlM2niFQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

If you are going to be writing custom functions in a sheet that other users will be collaborating on, it is going to be important that you document the functions that you are writing. How else can you expect those users to know what they are doing?

In a future video I'll be talking about how you can share your custom functions in different Projects. Because when you think about it, the entire point of programming is to prevent having to do things more than once!

```javascript
/**
 * Get the current exchange rates of chosen currencies
 *
 * @param {11} amount The amount of currency to exchange
 * @param {["CNY"} from [OPTIONAL] The currency type to be converted
 * @param {"USD"]} into [OPTIONAL] The currency type to exchange into
 * @return The exchanged amount
 * @customfunction
 */
function CURRENCYEXCHANGE(amount, from, into) {
  from = from || 'CNY';
  into = into || 'USD';

  if (from.length !== 3 || into.length !== 3) {
    throw TypeError('Currency type must be a 3 letter code.');
  }

  var url =
    'https://api.fixer.io/latest?base=' + into.toUpperCase() + '&symbols=' + from.toUpperCase();

  var response = UrlFetchApp.fetch(url);
  response = JSON.parse(response);

  var exchange = amount / response['rates'][from];

  return parseFloat(exchange.toFixed(2));
}
```

Please send me comments on twitter or in the discussion below!
