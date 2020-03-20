---
title: Keystone Calendars
subTitle: Synchronize a 6-day schedule with a 5-day week
author: jordan
categories:
  - Portfolio
tags:
  - Projects
  - javascript
  - office 365
  - twitter bootstrap
  - outlook calendars
youtube: ''
image: keystone-calendars-screenshot.png
---

A year and change ago I wrote some code that would help synchronize a 6-day calendar with a 5 day week. The goal is to remove the paper planners from the list of tools that students need to carry around with them all day.

I coded a server where an administrator can upload all of the schedules. Then when a user logs in, they can build their specific schedule into their own Outlook calendar.

![Keystone calendars](./keystone-calendars-screenshot.png)

The app itself is powered by `graphql-yoga` with a frontend simply styled by a bootstrap theme. I used Apollo Client to run the queries on the frontend. The school is in the process of moving all of their schedules to a system called `Power School` so I set up a very simple temporary solution that can be replaced later.

The end result ends up looking like this:

![outlook view](./keystone-calendars.png)
