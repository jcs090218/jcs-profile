---
weight: 4
title: "Treat Emacs as an Elisp Runtime using Eask"
date: 2025-12-18
tags: ["Editor"]
categories: ["Editor"]
author: ["Jen-Chieh Shen"]
cover:
  image: cover.png
  hiddenInList: true
draft: false
---

> Repo link: https://github.com/emacs-eask/cli

In 2023, I wrote an article about the [Elisp Language Server]. It was one of several experimental projects exploring [Elisp] as an execution environment. While developing [Eask], I serendipitously discovered it was an intriguing program that could effortlessly wrap [Emacs] into a runtime.

Why do I say that? Let's take a look:

## 🔰 Running Elisp Programs

Typically, executing [Elisp][] doesn't allow you to run a code file directly like you can with [Python][] or [Node.js][]:

```console
python hello.py
```

Or [Node.js][]:

```console
node hello.js
```

to run a code snippet directly.

This isn't difficult for [Elisp][], it just requires a few extra flags:

```console
emacs -batch -l hello.el
```

### ❓ The Question

If direct execution is possible, why do we need [Eask][]?

In reality, [Eask][] functions similarly to [Python][]'s [pip][] and [Node.js][]'s [npm][], all bearing the critical responsibility of package management. The key difference lies in [Emacs][]'s shared environment, which prevents it from having a dedicated `node_modules` directory like [npm][]. This means any changes to an individual project will affect your entire Emacs setup.

This might not be an issue for users who don't use Emacs, but it makes package management extremely cumbersome. This is where Emacs' importance comes into play, addressing these pain points:

1. No project dependencies, only shared dependencies
2. Inability to download and manage packages
3. Dependency pollution issues
4. Version compatibility problems within [Emacs][]

## 📝 Example

Next, let's see how cumbersome [Elisp][] becomes when managing packages.

```console
emacs --batch --quick --eval "
(require 'package)
(setq package-archives '((\“melpa\” . \“https://melpa.org/packages/\”)
                          (\“gnu\”   . \“https://elpa.gnu.org/packages/\”)))
(package-initialize)
(unless (package-installed-p 'async)
  (package-refresh-contents)
  (package-install 'async))
"
```

This looks terrible—and we haven't even started writing our program yet!
Plus, every time we run this program, we have to check package installations and such, which is incredibly tedious.
Using [Eask][] makes things much simpler:

```console
eask install -g async
```

This means we can use the `async` package in any project without needing to check or reinstall it each time.

Then we can just focus on writing the code we need, without worrying about other unnecessary issues!

```console
eask load -g hello-async.el
```

The text of `hello-async.el`:

```elisp
(require 'async)

(async-start
   (lambda ()
     (message “Hello!”))
   #'ignore)
```

## ⚜️ Closing Thoughts

Honestly, this article isn't meant to promote [Emacs][] or [Eask][].
It simply highlights how [Elisp][] can handle everyday tasks like a regular programming language.
I've already leveraged this workflow to automate routine [CI/CD][] tasks:

- [jcs090218/setup-emacs-windows][]
- [emacs-eask/packaging][]

Typically, [Python][] handles CI/CD tasks for these kinds of projects, but doing it with Elisp is genuinely amusing. 😅
For someone like me who's already accustomed to writing [Elisp][], it's practically a dream come true! 🥳


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
