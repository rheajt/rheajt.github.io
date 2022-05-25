---
draft: true
date: 2022-05-25
title: Group by Month - Website update
categories:
    - Blog
tags:
    - typescript
    - react
    - web development
    - solutions
youtube: ""
image: ../../img/default-code.png
---

My current goal is to continue to post some parts, demos, and other miscellaneous documentation of some of the many projects that I have been a part of over the past few years.

## Why didn't I just take notes as I was going?

No clue about that, however, time to rectify some of that. In the future I want to:

-   [ ] add some robustness to the tag system.
-   [ ] I want to add to the posts a notice that it is over a year old, with a link to post on social media that it needs to be updated.
-   [ ] I also want to include some pictures on the projects list, basically just redesign the way the cards are formatted.

Here I just want to simply group all of my blog posts by the month and year they were created. This snippet groups all of the posts into an object keyed by the month
and year.

```typescript
const byMonth = posts.reduce((acc: PostsByMonth, page: Post) => {
    if (!page.fields.date) return acc;

    const monthYear = format(new Date(page.fields.date), "MMMM yyyy");

    if (acc[monthYear]) {
        acc[monthYear].push(page);
    } else {
        acc[monthYear] = [page];
    }

    return acc;
}, {});
```

Then I just render those on the page below:

```typescript
{
    Object.keys(byMonth).map((month: string) => {
        return (
            <section key={month}>
                <h3>{month}</h3>
                {byMonth[month].map((page: Post) => (
                    <div key={page.fields.slug}>
                        <Link
                            key={page.fields.slug}
                            to={`/blog/${page.fields.slug}`}
                        >
                            <b>{page.frontmatter.title}</b>
                        </Link>

                        <p key={page.fields.slug}>
                            <i>{format(new Date(page.fields.date), "PPP")}</i> -
                            {page.excerpt}
                        </p>
                        <p>
                            Tags in this post:{" "}
                            <i>{page.frontmatter.tags.join(", ")}</i>
                        </p>
                    </div>
                ))}
            </section>
        );
    });
}
```

Check it out on the main page: [Blog posts organized by month](/blog) If you know a better way to accomplish this, let me know in the comments below! I am always trying to learn more effective ways to solve these kinds of problems. The only purpose of building this kind of thing is to learn!
