---
weight: 4
title: "TDD in different view"
date: 2025-12-15
tags: ["Tech"]
categories: ["Tech"]
author: ["Jen-Chieh Shen"]
cover:
  image: cover.png
draft: false
---

Here I'd like to document my thoughts on [TDD]. This article isn't intended to explain [TDD] in detail—it's not a tutorial.

<!-- more -->

## 🌐 Online Explanation

Let's first look at the online explanation:

{{< youtube yfP_v6qCdcs >}}

[TDD][] Simply put, it means writing tests first, then implementing the code. This is actually quite challenging for many programmers. The main reason is that it feels overly tedious, making the development process less smooth.

I actually agree with this. When I first encountered it, I thought, “This is ridiculous!” Then I looked at others' perspectives on [TDD][]:

{{< youtube kJWsFWY25GA >}}

---

{{< youtube TzOaXepgEtQ >}}

It seems quite a few people genuinely find [TDD][] inherently unfriendly. 🤔

## ⚖️ Proper TDD

Let me first reiterate the explanation of [TDD][]:

> Test-driven development (TDD) is a way of writing code that involves writing
> an automated unit-level test case that fails, then writing just enough code
> to make the test pass, then refactoring both the test code and the production
> code, then repeating with another new test case.

I believe proper [TDD][] is beneficial. What does that mean? Modern (2025) practices have become overly formulaic,
distorting the original intent of [TDD][]. The original purpose of [TDD][] should be simpler:

> Test your code before writing production code.

I believe [TDD][] should be broadly defined—writing tests before code constitutes [TDD][], without mandating you write test code! Why do I say this? Because after writing tons of code, I've found this broad approach to [TDD][] to be incredibly, incredibly effective! 😲

## ❓ Why Does TDD Work?

Alright. [TDD][] doesn't work all the time. But I believe it's highly effective when
programmers are unfamiliar with their environment and programming language.Ultimately,
all programming languages are just [syntactic sugar][] over [assembly language][assembly].
If the authors choose, they can alter those semantics at any time (setting aside compatibility, politics, ethics, etc.).
So memorizing their syntax is pointless. The best approach is to test based on the current
environment and then develop based on the existing situation—that's the right way to go!

## 💬 Conclusion

I'd venture to guess that modern [TDD][] differs from past [TDD][] in both broad and narrow terms,
leading many to perceive it as overly tedious. In reality, TDD is a highly effective development process.
However, as people have overly embraced modern [TDD][], the original correct application and philosophy of [TDD][] have become distorted. 😵
The conclusion is: don't blindly follow formulaic [TDD][]. Validating it through your own hands-on experience is the better approach. 🤔


<!-- Links -->

[TDD]: https://en.wikipedia.org/wiki/Test-driven_development
[syntactic sugar]: https://en.wikipedia.org/wiki/Syntactic_sugar

[assembly]: https://en.wikipedia.org/wiki/Assembly_language
