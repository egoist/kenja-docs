# Data

## Overview

You can connect your bot to external data. It can be a web page, a document or an entire website.

:::warning
You need to set an OpenAI API key in account settings in order to analyze data. Kenja uses the text-embedding-3-small model to create sematic index for the data.
:::

## Website

<div class="border rounded-lg">

![preview](https://cdn.jsdelivr.net/gh/egoist-bot/images@main/uPic/8pU2K5.png)

</div>

Kenja will automatically crawl the website and extract the contents as markdown for you. By default it fetches every page on the website starting from the URL you entered, but you can specify what pages you want to include:

```
/
/about
/blog/**
```

Notice that you can use `*` to match any characters, and `**` to match any characters including `/`. This syntax is powered by [micromatch](https://github.com/micromatch/micromatch).

## File

You can upload `.txt`, `.md`, `.pdf` files.

## Notion

Planned.
