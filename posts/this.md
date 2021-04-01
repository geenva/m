---
title: "How I Made This Site"
date: "2021-03-31"
---

Hello! Thanks for taking your time to visit this blog. This is my first website with Next.js.

In this article, I will talk about:

- The technologies I used
- Why I made this
- Why I chose Next.js over Create React App
- Comparison with legacy website

## Technologies

As I mentioned before, this website is built with **[Next.js](https://nextjs.org)**, which is a framework built **on top** of React, which is meant gor one page applications (mostly). For blog posts rendering, I used remark and several different libraries to render Markdown. Lastly, this site is deployed with Vercel, which is the parent company of Next.js.

## Why I chose this stack

After learning React, I immediately built a website with it and noticed 2 flaws immediately. Those were the lack of server-side rendering and page-routing without the need of an external library/framework. After researching on the topic, I found out that react-router was a popular choice, along with Next.js which was a framework built on top of React. I immediately realised the potential of building my site with Next.js without the hassle of configuring react-router.

### Next.js

Next.js is a advertises itself as a production-optimised framework. It offers built in TypeScript support, automatic code-splitting, no-hassle page routing, server-side rendering, built in styles and a lot more. I could definitely create a TypeScript project from create-react-app of course, but that would not cover server-side rendering and page routing. Next.js is a smart framework which is chosen by 30% of React developers according to their website, and is built by Vercel (ex. ZEIT/Now.sh). This framework's code-splitting makes it production-optimised and fast. It was noted by my friends that it didn't require a refresh to change "pages" (eg. /blog, /about). It also provides API routes and [paths].

React itself is an amazing library, but combined with Next.js, it is extremely powerful. That's why top companies such as Apple and Hulu uses it.

## Now vs. Legacy

My legacy website was a single page website created with plain HTML and JavaScript. I find it very slow and bloated. It only contained basic information about me.

![Legacy Website](https://mcs.is-inside.me/KqgjqRXt.png)

> The legacy website

The current website has a cleaner design containing updated and useful information about me, and it also contains a blog, which was only possible with [routes] with Next.js! It also has auto code-splitting, and it's also deployed with Vercel, so I get analytics as well. Currently, it loads under 1.5 seconds for mobile and 0.6 seconds for desktop. That's really fast compared to the desktop speed of loading for legacy, which was an average of 7 seconds because it needed to fetch external content.

Thanks for reading my blog! Please come back soon for more content!
