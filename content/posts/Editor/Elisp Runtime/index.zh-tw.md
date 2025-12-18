---
weight: 4
title: "使用 Eask 將 Emacs 視為 Elisp 執行環境"
date: 2025-12-18
tags: ["Editor"]
categories: ["Editor"]
author: ["Jen-Chieh Shen"]
cover:
  image: cover.png
  hiddenInList: true
draft: false
---

> 代碼庫連結: https://github.com/emacs-eask/cli

在 2023 年的時候, 我寫了一篇關於 [Elisp Language Server][] 的文章.
那是其中一個把 [Elisp][] 用作一個執行環境的一個實驗性質的專案.
在開發 [Eask][] 的開發過程中, 我無意間發現他是個可以輕鬆把 [Emacs][] 包裝成一個運行時的有趣程序.

為什麼這麼說? 我們接下來看看:

## 🔰 執行 Elisp 程序

一般執行 [Elisp][], 不能像是 [Python][] 或 [Node.js][] 那樣直接執行一個代碼文件.

```console
python hello.py
```

或者 [Node.js][] :

```console
node hello.js
```

就可以直接運行一段代碼.

這對 [Elisp][] 並不困難, 只是多了一些旗子:

```console
emacs -batch -l hello.el
```

### ❓ 問題

既然可以直接執行, 那為何需要 [Eask][] 呢?

實際上 [Eask][] 就如同 [Python][] 的 [pip][] 和 [Node.js][] 的 [npm][] 一樣,
它們都有著管理包的重大責任. 但唯一不同的是, [Emacs][] 的環境是共有的,
所以沒辦法像是 [npm][] 一樣擁有一個 `node_modules`.
也就是說, 任何獨立專案改變都會影響到你的 [Emacs][] 的使用.

這對如果不使用 [Emacs][] 的用戶可能不是個問題, 但這樣包管理上就會非常繁瑣.
於是 [Eask][] 的重要性就顯現出來了, 他負責解決這幾個痛點:

1. 沒有專案依賴, 只有共有依賴
2. 沒辦法下載和管理包
3. 依賴會互相污染的問題
4. [Emacs][] 的版本間的問題

## 📝 範例

接下來我們看如果在使用包的情況下, 需要寫的 [Elisp][] 就相當不輕鬆了.

```console
emacs --batch --quick --eval "
(require 'package)
(setq package-archives '((\"melpa\" . \"https://melpa.org/packages/\")
                          (\"gnu\"   . \"https://elpa.gnu.org/packages/\")))
(package-initialize)
(unless (package-installed-p 'async)
  (package-refresh-contents)
  (package-install 'async))
"
```

這看起來糟透了, 我們連程序都還沒開始寫呢!
而且每當運行這個程序就必須要檢查安裝包等等的問題, 非常繁瑣.
使用 [Eask][] 的話就會簡單許多:

```console
eask install -g async
```

這樣表示, 我們可以在任何一個專案使用 `async` 的包, 而且並不需要每次都需要檢查或重新安裝.

接著我們只需要專注寫我們要的代碼就好, 不需要擔心其他多餘的問題!

```console
eask load -g hello-async.el
```

`hello-async.el` 的文本:

```elisp
(require 'async)

(async-start
   (lambda ()
     (message "Hello!"))
   #'ignore)
```

## ⚜️ 結語

老實說, 這個文章並不是打算推廣 [Emacs][] 或者 [Eask][].
而是單純沒想到原來 [Elisp][] 也可以像一般程式語言的去執行日常任務.
像是我已經利用這樣的工作模式來幫助我完成一些日常 [CI/CD][] 的工作:

- [jcs090218/setup-emacs-windows][]
- [emacs-eask/packaging][]

通常這類專案都是由 [Python][] 去做 [CI/CD][] 的工作, 不過就我使用 [Elisp][] 去做, 真的蠻好笑的. 😅
不過像我這種已經寫習慣 [Elisp][] 的人來說, 簡直是夢想成真了! 🥳


<!-- Links -->

[Elisp Language Server]: ../elisp-ls/

[CI/CD]: https://en.wikipedia.org/wiki/CI/CD

[Elisp]: https://en.wikipedia.org/wiki/Emacs_Lisp
[Emacs Lisp]: https://en.wikipedia.org/wiki/Emacs_Lisp
[Emacs]: https://www.gnu.org/software/emacs/
[Eask]: https://github.com/emacs-eask/cli

[Python]: https://www.python.org/
[Node.js]: https://nodejs.org/en

[pip]: https://pypi.org/project/pip/
[npm]: https://www.npmjs.com/

[jcs090218/setup-emacs-windows]: https://github.com/jcs090218/setup-emacs-windows
[emacs-eask/packaging]: https://github.com/emacs-eask/packaging
