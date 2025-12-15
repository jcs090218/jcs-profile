---
weight: 4
title: "不同視角下的 TDD"
date: 2025-12-15
tags: ["Tech"]
categories: ["Tech"]
author: ["Jen-Chieh Shen"]
cover:
  image: cover.png
draft: false
---

這裡我想記錄下我對 [TDD][] 的看法. 這個文章並不打算對 [TDD][] 多做解釋, 這並不是個教學文章.

<!-- more -->

## 🌐 網路解釋

我們先看看網路解釋:

{{< youtube yfP_v6qCdcs >}}

[TDD][] 簡單來說是要先寫測試, 然後在實作. 其實這對於很多程序員來說是非常不容易的.
主要原因是因為過於瑣碎, 導致開發過程不順暢.

這點我其實是認同的, 我剛開始看的時候只覺得這也太蠢了吧? 接著看其他人對 [TDD][] 的看法:

{{< youtube kJWsFWY25GA >}}

---

{{< youtube TzOaXepgEtQ >}}

看來很相當多人的認為 [TDD][] 本身真的很不友好. 🤔

## ⚖️ 正確的 TDD

我想先重複一下 [TDD][] 的解釋:

> Test-driven development (TDD) is a way of writing code that involves writing
> an automated unit-level test case that fails, then writing just enough code
> to make the test pass, then refactoring both the test code and the production
> code, then repeating with another new test case.

我認為正確的 [TDD][] 是好的, 什麼意思? 現代的 (2025) 已經過於公式化, 已經曲解了本來 [TDD][] 的目的.
[TDD][] 本來的目的應該是更簡單的:

> Test your code before writing production code.

我認為 [TDD][] 應該是廣義的, 先測試在寫代碼就是 [TDD][], 不一定強制你要寫 test code!
為什麼這麼說? 因為我寫了大量的代碼, 我發現這樣廣義的 [TDD][] 是非常非常有效的! 😲

## ❓ TDD 為什麼有效?

好吧. [TDD][] 並不是什麼時候都有效. 但我認為在程序員對環境和程式語言不熟的時候, 是非常有效的.
所有的程式語言, 說到底都是[彙編語言][assembly]的 [syntactic sugar][] 而已.
只要作者想, 他們可以隨時改變那些語意 (這裡不討論兼容, 政治, 和道德, 等等關係).
所以去死記它們的語法並無任何意義, 最好的做法就是根據當下的環境去做測試, 然後再根據現有的情況去做開發, 才是最正確的作法!

## 💬 結語

我大膽猜測, 現代的 [TDD][] 和過去的 [TDD][] 有著廣義和狹義的不同, 導致很多人認為這太瑣碎.
實際上的 TDD 是非常有效的開發過程, 而隨著人們過度的追從現代的 [TDD][], 已經曲解了本來 [TDD][]
正確的用法和觀念. 😵 結論是, 不要盲目地跟從公式化的 [TDD][], 用自己的親身體驗去驗證才是更好的做法. 🤔


<!-- Links -->

[TDD]: https://en.wikipedia.org/wiki/Test-driven_development
[syntactic sugar]: https://en.wikipedia.org/wiki/Syntactic_sugar

[assembly]: https://en.wikipedia.org/wiki/Assembly_language
