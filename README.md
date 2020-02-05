# goto

A link shortener/redirect tool for my personal productivity, using Netlify functions.

## Why?

In any given day, I might visit the same URL 15 times. For example, the [artsy/reaction](https://github.com/artsy/reaction) repo is one I spend a lot of time in.

A minor annoyance is that when I type `reaction` into my browser search bar, it takes me a little bit of time to figure out which of my recent URLs or bookmarks are the one I actually want. Like this:

![Me searching for `reaction` without `goto`](docs/search-for-reaction-before.gif)

`goto` is a link shortener (kind of) that I can [set as a custom search engine in Chrome](https://support.google.com/chrome/answer/95426?co=GENIE.Platform%3DDesktop&hl=en). When I want to visit the reaction repo on GitHub, I now type `goto gh reaction` and hit enter, like this:

![Me searching for `reaction` with `goto`](docs/search-for-reaction-after.gif)

It's kind of like I'm building a CLI in my browser search bar. Chrome recognizes `goto` as my custom search engine, and sends the query text to my Netlify function. My Netlify function reads the text and if it understands what I'm requesting, redirects me to a specific URL. If it doesn't understand, it sends me to Google.

## Why didn't you just **\_**?

There are probably a million other ways to solve this problem, but this is the one that fit best with my habits. It was also a fun opportunity to play with Netlify functions, so ¯\\\_(ツ)\_/¯
