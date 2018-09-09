# Article
### 渲染文章的概述(vuepress@0.9.0 支持)
```md
## 标题一

我是第一段落
<!-- more -->
我是第二段落
```
如上面的形式, 在 md 文件中添加 <!-- more --> 标签, 那么这个标签之前的内容就会被渲染到文章列表中作为文章的内容概述
在 **markdown** 文件头部加上以下内容
### 文章信息
```md
title: 文章标题
# 用于文章列表页的排序
date: 2017-08-15 10:27:26
tag: # 页面的标签
  - react
  - js
# 一些 meta 标签, 可以用于被搜索引擎爬取
meta:
  - name: description
    content: 一些描述
  - name: keywords # keywords 标签, 在页内搜索时会被查询
    content: theme vuepress
```
也可以这样
```bash
yubisaki post -p <path> --page <file>

# example
yubisaki post -p docs/hello --page index.md

```
