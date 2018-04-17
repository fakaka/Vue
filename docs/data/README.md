---
sidebar: auto
---

# Hairpin Data

## 音乐
### 通用

`/music/search`

``` js
const s = ctx.query.keywords;
const type = ctx.query.type || 1;
const limit = ctx.query.limit || 30;
const offset = ctx.query.offset || 0;
```


### 歌曲相关
### 歌单
### 排行榜

## B 站

### 用户相关

## 新闻

Prev and next links are automatically inferred based on the sidebar order of the active page. You can also explicitly overwrite or disable them using `YAML front matter`:

``` yaml
---
prev: ./some-other-page
next: false
---
```

## 笑话

Providing `themeConfig.repo` auto generates a GitHub link in the navbar and "Edit this page" links at the bottom of each page.

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'vuejs/vuepress',
    // if your docs are not at the root of the repo
    docsDir: 'docs',
    // optional, defaults to master
    docsBranch: 'master',
    // defaults to true, set to false to disable
    editLinks: true
  }
}
```

## 社交

### ins

### weibo
