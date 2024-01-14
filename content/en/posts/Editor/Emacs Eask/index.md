---
weight: 4
title: "Emacs Eask - Alternative to Emacs Cask"
date: 2022-05-29
tags: ["Editor", "Emacs"]
categories: ["Editor"]
author: ["Jen-Chieh Shen"]
cover:
  image: cover.png
  hiddenInList: true
draft: false
---

### 🔰 Introduction

The name `Eask` came from [Emacs Cask](https://github.com/cask/cask)
; if you already know what `Cask` is and what it does, please skip this and
forward to the next section.

(**NOTE:** `Cask` and `Eask` are interchangeable in this section)

`Eask` is the dependency management tool for Emacs Lisp. It's like `npm` to
`Node.js`; but it isn't exactly the same since `Eask` has fewer tools than `npm`,
plus their ecosystems are slightly different. Below is the link **Why Cask?** has
a better explanation.

* [Why Cask?](https://cask.readthedocs.io/en/latest/guide/introduction.html#introduction-why-cask)

### ❓ Then why Eask, and not Cask?

A simple comparison table below:

|          | Behind technology                 | Cross-Platform                                                   | Emacs Version | Size                |
|----------|-----------------------------------|------------------------------------------------------------------|---------------|---------------------|
| Cask     | Bash, Batch, and Python (Windows) | ❌ Good on Linux and macOS, but it's particularly bad on Windows | 24.5+         | 3,000+ lines        |
| makem.sh | Shellscript                       | ❌ Doesn't work on Windows by default                            | 26.1+         | 1 file, 1200+ lines |
| Eldev    | Bash, Batch, and Powershel, etc   | ✔ Good, but qutie slow on Windows                                | 24.4+         | 4,000+ lines        |
| Eask     | Node or Native Executables        | ✔ Good, and it can be compiled to native executables             | 26.1+         | 3,000+ lines        |

(Table is copy and paste, please visit the site [here](https://emacs-eask.github.io/#-comparisons))

`Eask`'s advantages came from the behind technology choice; it uses `Node.js` and
not `Shellscript`, `Bash`, `Batch`, etc. It would require us to use `Node runtime`,
but we can use [pkg](https://www.npmjs.com/package/pkg) (big thanks to `vercel`) for
packaging into native executable to avoid such a hassle.

I hope the needs to install `Node.js` and the extra step to call `npm install`
are the only defect from `Eask`. So what are the **GOODS** stuff?

1. `Eask` can be packaged into native executables; it should give you a better speed!
2. It uses `Cask`'s DSL; it became very easy to adapt from Cask to Eask
3. **Eask**-file is unlike **Cask**-file; it's an Elisp file and functions similar to
`init.el` (combined from `Cask` + `Eldev`)
4. Use high-level programming language `JavaScript`; `npm` has a huge ecosystem. We
can always fall back to the node layer if something doesn't work inside Emacs (e.g.
`exec`, `init`)
5. `Eask` uses [yargs](https://www.npmjs.com/package/yargs) as their CLI parsing
library, which makes us only have to focus on the development
6. `Eask` doesn't require to call `Emacs` all the time; this is particularly good
in Windows due to the `fork` operation is quite slow in the system (this is why
I don't recommend `Eldev` under Windows)
7. Cross-platform and consistency; other alternatives don't support Windows by
default except for `Eldev`
8. It's easy to expand, and clearer project architecture; `Cask`, `Eldev`, and
`makem.sh` have their files very huge, so it would be harder to maintain or add new
features
9. Global flag `-g` allows you to manage your Emacs configuration

Eask sounds good, but it isn't perfect. Here are the **BADS**:

1. Harder to get into the development; you will need to know `JavaScript` and `npm`
2. `Eask` project structure follows 1 command to 1 file; people hate having multiple
files everywhere
3. The project is much more complicated (same as no. 2)

### 🧙‍♂️ Conclusion

After seeing and comparing all the alternatives; I would eventually pick Eask as my
major management tool. Eask has more potential if we compare it to the others; on the
other hand, I think `JavaScript` and `npm` are very easy to learn.

I have been using Emacs on Windows for 7 years; it's quite painful. In general,
many packages are either broken or doesn't have a good user experience. I sometimes
do have a good user experience but rarely. For example, `magit`, `helm`, is slow
on Windows. Simple ping package `eping` doesn't support Windows' `ping.exe`. Last
time installing  `docker.el` doesn't work on Windows (1 week ago). I know the fact is
**Emacs is just too slow on Windows**, but that doesn't mean that we couldn't do
anything about it! The fact is user experience is still bad on Windows, though! 😅

Many people seem to use `Cask`, but the majority of them don't require tests on Windows.
It's simply hard and inconvenient. You would have to install `Python`, and `Python`
is particularly bad on Windows (UX wise). Here came the `Eask` to be the savior.
It's compatible with `Cask`'s DSL and ensures the workflow's consistency (no Python).
Hopefully, everyone can use `Eask` to develop their elisp packages. Maybe someday
Emacs can live better under the Windows... What do you think?

---

> I've also learned [Hugo](https://gohugo.io/); would love to share
it one day!

---

### 🔗 Links

* https://github.com/emacs-eask/eask
