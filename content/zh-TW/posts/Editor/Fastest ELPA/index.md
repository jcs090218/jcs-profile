---
weight: 4
title: "最快的 ELPA"
date: 2023-04-10
tags: ["Editor", "Emacs", "ELPA"]
categories: ["Editor"]
author: ["Jen-Chieh Shen"]
cover:
  image: cover.png
  hiddenInList: true
draft: false
---

所以什麼是最快的 ELPA? 讓我們來定義一下! ELPA 最能跑? 不對, 這一點都不合邏
輯. ELPA 最快服務你? 或許, 但我不知道!

在這裡我們定義"最快的 ELPA"為建構插件的速度. 也就是多久以後我們的插件會
被更新在服務器上. 就算更新了我們的插件, 也不用等上一段時間. 你可能會想說
"怎麼可能?" 還有 "怎麼做到的?", 讓我一一解釋!

<!-- more -->

一般的 ELPA, 像是 MELPA, 他們會從 `recipes` 資料夾裡取得需要建構的插件目標.
這裡的時間為 O(n), 越多插件則會花越多時間. 通常簡單的解決方法就是直接提升
硬體硬件, 來促使減少建構時間.

這裡 [JCS-ELPA][] 使用了不同的策略. 這個 ELPA 使用了一個插件 [github-elpa][]
來使其建構我們的插件然後上傳到 [GitHub Pages][]. 所以到底為什麼會是最快?
主要有兩個因素:

1. 微軟擁有 GitHub. 技術上來說, 我們的 ELPA 是直接跑在微軟的服務器上
2. 我們使用 [GitHub Actions][] 建構插件, 定且使用了多個 jobs (如果你不熟悉
GHA, 就想說有很多台電腦在幫你做事即可)

JCS-ELPA 使用這技術來達成很多 worker 幫你同時建構插件. 公式如下:

```
新的建構總時長 = 原本建構總時長 / 工作者
```

如果工作者為 1, 建構時長則保持不變 (建構時長沒有任何改善).
舉例, 如果`原本建構總時長`是 10 分鐘, 開 5 個工作者 則會減少為 2 分鐘.

```
2 min = 10 min / 5 jobs
```

當然這是理論上的計算, 實際上還要扣掉排程時間, 開啟和關閉工作者的時間, 等等
的相關因素. 不過原理上, 當你要建構的插件越多效果就越拔群!

## 👷 如果實踐的?

> 💡 因為 JCS-ELPA 沒有足夠多的插件來實行這個理論. 所以我們這裡只解釋這個
> 是怎麼運作的!

現今, JCS-ELPA 擁有 136 的插件. 我把他分為更小的區塊. 比如一個工作者負責
50 個插件! 公式如下:

```
jobs = (total recipes / recipes per section) + 1
```

因此:

```
3 = (136 / 50) + 1
```

現在你有 3 個工作者幫你分擔建構任務! 原本的時長是大約 3 ~ 4 分鐘, 現在
直接變成 1 分鐘! 這是很大的進步! 😄

![](jobs.png)

其中一個最棒的是, 你可以直接看 GHA 的日誌來觀察其中的過程!

[JCS-ELPA]: https://jcs-emacs.github.io/jcs-elpa/
[github-elpa]: https://github.com/10sr/github-elpa
[GitHub Pages]: https://pages.github.com/
[GitHub Actions]: https://github.com/features/actions
