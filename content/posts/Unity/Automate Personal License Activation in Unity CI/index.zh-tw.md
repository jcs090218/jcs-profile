---
weight: 4
title: "Unity CI自動化個人版授權"
date: 2021-09-25
tags: ["Unity", "CI/CD"]
categories: ["Unity"]
author: ["Jen-Chieh Shen"]
cover:
  image: cover.png
  hiddenInList: true
draft: false
---

追蹤了這篇 [My disappointing experience using Unity in a CI pipeline](https://forum.unity.com/threads/my-disappointing-experience-using-unity-in-a-ci-pipeline.737678/),
我也認為這是我目前遇到的最大問題. 個人版本(免費)的授權系統是部分衝突到CI/CD的概念的, 原因是,
我們還是得手動更新授權至 `UNITY_LICENSE` 這個 GitHub secret (環境變數)裡面. 也導致了
我們全部的CI/CD並不是全部自動化的流程, 非常麻煩! 至於Plus/Pro使用者則沒有影響, 因為他們分
別使用了不同的授權系統! 😖

<!-- more -->

我們直接切至問題點, 我們應該要怎麼做? 要怎麼讓這流程更順暢? 我的方法就是自動化整個授權的驗證過程!
長話短說, 我開發了一個 node 包 [unity-license-activate](https://github.com/jcs090218/unity-license-activate),
原開發者是 [Mizo Take](https://github.com/MizoTake). 這個包使用了 [Puppeteer](https://github.com/puppeteer/puppeteer)
來完成整個驗證步驟, 讓我可以使用JavaScript操控瀏覽器, 非常方便且正是我們需要的解決方法! 😁

下一步, 我們只剩下要更新我們的 secret 至 `UNITY_LICENSE` 這個環境變數就好! 這些任務非常簡單, 我
們只需要下列的 GitHub actions 即可辦到.

- [read-file-action](https://github.com/juliangruber/read-file-action), by [Julian Gruber](https://github.com/juliangruber)
- [actions-set-secret](https://github.com/hmanzur/actions-set-secret), by [Habid Enrique Manzur Restrepo](https://github.com/hmanzur)

我們可以使用 `read-file-action` 來讀取下載好的 `.ulf` 檔案, 然後使用這個檔案的值給 `actions-set-secrets`.
記得要設置 `ACCESS_TOKEN` 到你的GitHub secret裡面. 這是用來從你的 workflow 更新和製造 GitHub secret 的.

完整的 workflow 檔案請看[這裡](https://github.com/jcs090218/JCSUnity/blob/master/.github/workflows/license.yml).

## 🔐 多重要素驗證

[unity-license-activate](https://github.com/jcs090218/unity-license-activate)
有可能會無法使用, 原因在於Unity驗證系統可能會要求6位的驗證碼到你的信箱. 如果要越過此步驟, 你必須
安裝 [unity-verify-code](https://github.com/jcs090218/unity-verify-code) 到你的
workflow 之中. 並且遵循這些步驟, 請看[這裡](https://github.com/jcs090218/unity-verify-code#-prerequisite).

## 🔗 Links

* [unity-license-activate](https://github.com/game-ci/unity-license-activate)
* [unity-verify-code](https://github.com/game-ci/unity-verify-code)
