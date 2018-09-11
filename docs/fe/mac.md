---
title: 前端mac开发环境搭建
date: '2018/09/10 10:45:09'
tag:
  - 环境
  - mac
  - 搭建
meta:
  -
    name: description
    content: 前端mac开发环境搭建
  -
    name: keywords
    content: 环境 mac 搭建
---
[[toc]]
​	最近，刚入手mbp15，陪伴我7年的2011款mbp（带光驱😅）可以光荣退休了，边安装环境边写的文档记录一下，我知道。。有人会用到。

## iTerm

这个就是个app自行下载吧~

接下来就是美化我们的 **iTerm**

## 安装brew

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### 配置item

```bash
brew install zsh
# 安装完之后
chsh -s /usr/local/bin/zsh
```

接下来便是安装 `oh-my-zsh`

```bash
curl -L http://install.ohmyz.sh | sh
```

`主题`我选择的是 **arrow** 以前是使用 **agnoster** 不过有点审美疲劳变换了一个,更换主题的方法是

```bash
open ~/.zshrc
```

将`ZSH_THEME`的值改为你选择的主题 比如

`ZSH_THEME = "arrow"`

```bash
source ~/.zshrc  //每次修改配置后需要重启配置才能生效
```

配色就按个人喜好吧，我这里用的自己的配色，还有透明度

### zsh插件autojump

**autojump**是一个非常方便的路径跳转插件,摆脱了各种`cd ../**/`等麻烦的路径切换,**autojump**会记录终端进入的目录, 通过 命令 **j** + 一部分的文件夹名字 就可以跳转到对应的目录

安装也很方便也是通过**brew**

```
brew install autojump
```

不过有需要配置

```
open ~/.zshrc
```

找到

`plugins=(git)` 在括号里加上 **autojump**, 插件以空格隔开 `plugins=(git autojump)`

```
source ~/.zshrc
```

![img](https://upload-images.jianshu.io/upload_images/874664-d191ee65824d65f4.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/480)

## 代理

​	在翻墙中最常用的便是shandowsocks, 当然不缺钱的话也可以购买surge使用。
不过这些软件软件在终端环境下是无法代理网络连接的。需要在终端配置才行。

127.0.0.1:1086 便是我代理软件的端口号。 使用shandowsocks话自己看一下“高级设置”就好。

```bash
brew install proxychains-ng
vim /usr/local/etc/proxychains.conf
```

末尾修改 socket4 x.x.x.x 为

```bash
socks5 127.0.0.1 1086
```

在 OS X EI Capitan 以上版本, 需要关闭SIP才能正常使用 具体流程 -> 重启电脑  按住option键 出现了启动盘选择后 ⌘ ＋ R 进入恢复模式 在菜单栏选择终端 输入

```bash
csrutil enable --without debug
```

重启电脑,输入

```bash
proxychains4 curl google.com
```

如果显示html文档则安装成功 使用方式就是开头加个 `proxychains4` 就好

是不是还是觉得用起来不方便呢？别急。。我们还能折腾。。

### 优化

#### alias

```bash
alias pc="proxychains4"
```

是不是短了很多 ？🙃，有

朋友就说了

你输了很长一段命令，然后你突然想使用代理功能，怎么办？

我想你应该会复制一下，然后重写

其实我们可以试试这样

### iTerm中前缀补全

在 `iTerm -> Preferences -> Profiles -> Keys` 中，新建一个快捷键，例如 ⌥ + p ，Action 选择 Send Hex Code，键值为 0x1 0x70 0x63 0x20 0xd，保存生效。

以后命令要代理就直接敲命令，然后 ⌥ + p 即可，这样命令补全也能保留了。

## 开始配置node环境

首先我们当然的安装node了,不过我选择的不是通过去官方网址下载,或者通过brew安装,而是通过**n**安装。

**n**是node版本管理器,类似的还有**nvm** 这里我选择使用**n**

首先在github找到n的仓库[地址](https://link.jianshu.com?t=https://github.com/tj/n) 下载或者**clone**下来之后,在终端里进入n的目录执行

```
make install
```

这样**n**就安装成功了, 可以使用 n 你指的的node版本号安装了,  **例如**

```
n 6.7.0
```

执行后便开始安装node6.7.0版本

如果没有使用终端代理的话这安装过程可能会很缓慢。

如果 提示 `Error: sudo required` 那么有两种解决办法

第一种 前面加个**sudo** 不过一旦使用了**sudo** 很容易产生各种权限问题

推荐第二种

```
open /usr
```

右键**local** 显示简介 在最下面的共享与权限 -> ➕ 将你当前账号加入 并且权限设置成读与写,并选择成为所有者和应用到包含的项目中。在执行一次安装命令应该没有问题了

另外你可以通过 `n 版本号`快速的切换或者安装node,非常方便,尤其对于多个项目使用的node环境不一样的时候

其他常用操作 `n ls 查看所有node版本号 n rm 版本号 删掉对应node`

安装完node后会自动安装好npm, 前段都应该知道npm是干嘛的包, 不知道的得好好补补了。

因为npm的源在国外所以下载速度非常慢, 还有国内有镜像

我使用淘宝的镜像 使用 **cnpm** 安装方式

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

现在就可以使用cnpm 快速的安装依赖包了 不过通过cnpm安装可能会出现一些莫名的问题

另外最近**Facebook** 也推出了包管理器 yarn 个人感是比npm稳定而且快多了。

## 编辑器

前端的编辑器的很多 **Atom** , **sublime** , **webstorm** , **Visual Studio Code**

在这里我推荐**Atom** 为什么因为 **好看! 好看! 好看**!  重要的事情写三次

虽然**Atom** 启动的时候确实会有点卡, 但是在接受范围内, 而且**sublime**插件装多了也会有点卡

**webstorm** 虽然很强大,但是并不需要那么多功能,而且会很卡

**Visual Studio Code** 是微软推出,总体来说功能强大,性能也很好的编辑器, 写**node**也很方便,但是就是**太丑**

**sublime** 可配置性很高的编辑器, 配置起来可以很好看并且方便,虽然有时候也会使用,比如atom卡得实在受不了的时候,但是**sublime**有些插件确实是没**Atom**那么好用,

在这里列出一些我推荐的插件和主题

**主题选择**

```
atom-material-syntax-dark
atom-material-ui //很好看的主题
```

**插件**

```js
language-babel //es6 jsx 高亮提示
emmet // 都知道吧
atom-ternjs //非常强大的代码提示插件, 而且可配置性也很高
color-picker //颜色选择器
pigments //颜色高亮
linter // 代码检查工具
linter-eslint //JavaScript代码检查工具 规范你的代码 依赖于linter 推荐 airbnb 的eslint规则
hyperclick //跳转变量或者import/require模块
js-hyperclick //配合hyperclick使用
regex-railroad-diagram //正则表达式以图形方式显示,很直观!
atom-beautify //代码格式化,还行,如果对代码格式要求不高的话
file-icons //文件图标
Docblockr //代码注释
```

`ctrl + e` 光标移动到行尾是比较长使用的快捷键, 但是使用**emmet**之后,键位会冲突所以需要修改键位

打开 **Atom -> keymap ** 在底部输入

```json
'atom-text-editor:not([mini])':
  'ctrl-e': 'editor:move-to-end-of-line'
  'ctrl-r': 'emmet:expand-abbreviation'
```

我把`ctrl-r` 改成 `emmet`的生成html元素的快捷键,  另外`emmet`对jsx语法支持也非常好

个人常用的配置

```json
{
  "ecmaVersion": 7,
  "libs": [
    "browser",
    "jquery"
  ],
  "dontLoad": [
    "node_modules/**/*.js"
  ],
  "plugins": {
    "node": {
      "dontLoad": "",
      "load": "",
      "modules": ""
    },
    "modules": {
      "dontLoad": "",
      "load": "",
      "modules": ""
    },
    "es_modules": {},
    "commonjs": {}
  }
}
```

#### END

至此,前端开发环境已经搭好了
