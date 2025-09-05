---
draft: true
date: 2024-02-07
title: Fix Your Custom Page Manager
categories:
    - Blog
tags:
    - google chrome
    - snippet
    - powerschool
    - javascript
    - solutions
image: ../../img/default-code.png
---

### simple fixes are the best

```javascript
const breadcrumbs = document.getElementById("breadcrumbs");
const header = document.querySelector("#content-main .page-header");

if (breadcrumbs) {
    breadcrumbs.remove();
}

if (header) {
    header.remove();
}

document.getElementById("container").style.gridTemplateRows = "";
document.getElementById("content-main").style.overflow = "hidden";
```
