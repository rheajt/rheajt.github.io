---
title: Covid-19 Query Time
categories:
  - Blog
tags:
  - Projects
  - google apps script
  - javascript
  - solutions
youtube: <<YOUTUBE_URL>>
image: thumbnail.png
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/_We0zGK3aWY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## More problems have arisen! They changed the format of the CSV files in the Github Repository.

Gee whiz! Well that is something that we can fix, and at the same time make our code a little more robust.

Before we do that though, let's look at the data we already do have. To do that, we need to write a few QUERY statements to shine a little clarity on our situation. This won't be an exhaustive tutorial on the QUERY function, however, it will give you just enough information to get you into trouble.

First we can bring in our data with a little bit of a filter. Specifically a filter by date.

```xlsx
=QUERY('COVID-19 Daily Reports'!A:I, "select B, C, E, F, G WHERE A = date '"& TEXT(H1, "yyyy-mm-dd")&"'", 1)
```

Then we can add in a Country filter, and a little extra data for fun.

```xlsx
=TRANSPOSE(QUERY(A2:E, "select sum(C), sum(D), sum(E) WHERE B = '"&H2&"' LABEL sum(C) 'Confirmed', sum(D) 'Death', sum(E) 'Recovered'", -1))
```

Lets add a sheet that

```xlsx
=QUERY('COVID-19 Daily Reports'!A:I, "select A, count(B), sum(E), sum(F), sum(G) WHERE A is not null GROUP BY A LABEL count(B) 'Countries'", 1)
```

Comment below if you have comments or suggestions. For a more exhaustive look at the `QUERY` function, [check out this post from Ben Collins](https://www.benlcollins.com/spreadsheets/google-sheets-query-sql/)!
