---
weight: 4
title: "Emacs Eask - Emacs Cask替代方案"
date: 2022-05-29
tags: ["Editor", "Emacs"]
categories: ["Editor"]
author: ["Jen-Chieh Shen"]
cover:
  image: cover.png
  hiddenInList: true
draft: false
---

### 🔰 介紹

`Eask`的名字源自於[Emacs Cask](https://github.com/cask/cask); 如果你已經有使
用過`Cask`的經驗, 那基本上你可以跳過這階段. 對於不了解或沒使用過的人, 在此我還是加減
介紹一下:

(**NOTE:** 原則上這裡的`Eask`和`Cask`是可以互相替換的)

`Eask`是個`Emacs Lisp`的套件管理工具, 有點類似於`Node.js`的`npm`, 但不全然是.
畢竟工具還不夠齊全, 而且`Emacs`生態也不適合`npm`那樣的模式. 所以簡單來說, `Eask`
可以是個劣化版的`npm`. 下面連結的 **Why Cask?** 有著更好的解釋

* [Why Cask?](https://cask.readthedocs.io/en/latest/guide/introduction.html#introduction-why-cask)

### ❓ 那為什麼用要Eask, 而不是Cask?

以下是簡單的優劣展示表格:

|          | Behind technology                 | Cross-Platform                                                   | Emacs Version | Size                |
|----------|-----------------------------------|------------------------------------------------------------------|---------------|---------------------|
| Cask     | Bash, Batch, and Python (Windows) | ❌ Good on Linux and macOS, but it's particularly bad on Windows | 24.5+         | 3,000+ lines        |
| makem.sh | Shellscript                       | ❌ Doesn't work on Windows by default                            | 26.1+         | 1 file, 1200+ lines |
| Eldev    | Bash, Batch, and Powershel, etc   | ✔ Good, but qutie slow on Windows                                | 24.4+         | 4,000+ lines        |
| Eask     | Node or Native Executables        | ✔ Good, and it can be compiled to native executables             | 26.1+         | 3,000+ lines        |

(這是我直接複製貼上的, 原文可以參考[這](https://emacs-eask.github.io/#-comparisons).)

`Eask`的優點來自於它背後的技術選擇是使用`Node.js`; 而不是基礎的`Shellscript`, `Bash`,
`Batch`, 等等. 雖然必須使用`Node runtime`, 但我們可以透過[pkg](https://www.npmjs.com/package/pkg)
(感謝`vercel`)打包來解決這問題! (這樣我們就可以跳過安裝`Node.js`)

使用`Node.js`並且還多了一步`npm install`確實比較麻煩, 但這大概是Eask唯一的缺點. 好在
pkg解決了這問題! 我們接著看優點:

1. `Eask` 可以包成原生程序, 這算是一個優點! 速度上相比可能會稍微快一些!
2. 繼承了`Cask`的`DSL`設計; 基本上可以無痛轉移!
3. `Eask`不像是`Cask`; 本身就是個`Elisp`檔案, 有點類似於`init.el`的功用 (這結合了Cask
+Eldev的優點)
4. 使用了高階語言`JavaScript`; `npm`有很龐大的生態, 如果有`Emacs`不方便做的, 我們可以
交由這層來做 (例: `exec`, `init`)
5. `Eask`使用 [yargs](https://www.npmjs.com/package/yargs) 來當作CLI解析器; 這促使我們
只需要專注在開發上即可!
6. `Eask`不用每次都呼叫`Emacs`; 這在 `Windows` 很吃香; 因為Windows開進程非常慢 (這就是
為什麼`Eldev`在`Windows`系統下體驗不佳的原因)
7. 跨平台; 目前除了Eldev其他都不支援Windows
8. 非常容易擴充, 結構明確; 目前`Cask`, `Eldev`, 和 `makem.sh`每個單獨檔案都很大,
維護成本高且不易, 未來面對新功能也是比較吃力
9. 全域`-g`旗標讓你可以更好管理你的Emacs配置

那Eask沒有缺點嗎?當然有!

1. 開發比較困難, 你需要知道`JavaScript`和`npm`生態
2. `Eask`是採取一個指令一個檔案制; 所以有非常多的檔案散佈在各區
3. 專案結構相比其他都複雜許多; 對於不習慣這種分類法的人會很痛苦

### 🧙‍♂️ 結語

比較這麼多優缺點, 我還是會選擇Eask. 畢竟這專案未來的發展性會比其他的都高出許多.我認為
`JavaScript`和`npm`也非常好上手, 問題並不大!

我個人長期在`Windows`上使用`Emacs`; 其實是蠻折騰人的. 因為大部分的插件在`Windows`
下都是壞掉的, 好一點就是體驗不佳. 我很少會遇到體驗好的插件. 例如 `magit`, `helm`很慢.
`eping`不支持`Windows`. `docker.el`上次安裝掛了, 等等. 多倒數不清.

以前大家都用Cask, 但都往往不在 Windows 上做測試; 因為難用, 測試起來也不方便.
還需要特別安裝`Python`, `Python`在`Windows`上的體驗也不好. 因此`Eask`誕生了,
兼容`Cask`的`DSL`並保持了工作流程的一致性. 希望大家多多使用`Eask`來執行跨平台的測試!
或許哪天`Emacs`在`Windows`下有更好的使用者體驗... 聽了這麼多, 你們怎麼看呢?

---

> 話說我因此學到了[Hugo](https://gohugo.io/); 有空再來分享一下!

---

### 🔗 連結

* https://github.com/emacs-eask/eask
