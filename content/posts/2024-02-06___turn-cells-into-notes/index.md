---
draft: true
date: 2024-02-06
title: Turn Cells Into Notes
categories:
    - Blog
tags:
    - Projects
    - google apps script
    - javascript
    - solutions
image: ./screenshot.png
---

## Turn a range of cells into notes without spending all day clicking!

```js
function createNotes() {
    const ss = SpreadsheetApp.getActive();
    const sheet = ss.getSheetByName("SHEET_NAME"); // replace with the name of your sheet

    // the range information will differ depending on your sheet
    const rng = sheet.getRange(2, 1, sheet.getLastRow(), 2);
    const values = rng.getValues();

    // can remove this step because you only need to convert your range
    // into an array that matches the dimensions of your sheet
    const notes = values.map(val => {
        const [ex, resp] = val;
        return `${ex}\n\n${resp}`;
    });

    // the range information will be different based upon your sheet
    const setRng = sheet.getRange(2, 1, sheet.getLastRow());
    setRng.setNotes(notes);
}
```
