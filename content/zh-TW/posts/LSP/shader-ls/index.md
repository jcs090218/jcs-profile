---
weight: 4
title: "Shader 语言服务器"
date: 2023-08-23
tags: ["LSP"]
categories: ["LSP"]
author: ["Jen-Chieh Shen"]
cover:
  image: cover.png
  hiddenInList: true
draft: false
---

> 代碼庫連結: https://github.com/shader-ls/shader-language-server

2023 年 4 月 30 日。我創建了我的第一個語言服務器，它對某人確實有用。
我不久前嘗試過一個語言服務器，但它只是一個示例服務器，所以它不是很有用，
而且僅用於教育目的。

我選擇編寫的目標語言是 [ShaderLab][] 語言。 ShaderLab 用於 Unity 引擎，
因此您可以編寫自定義著色器來風格化您的遊戲。與常規編程語言不同，[ShaderLab][] 
分析起來要簡單得多，因此語言服務器可以響應客戶端。

<!-- more -->

## ❓ 為什麼選擇C#作為實現語言？

由於 Unity Engine 最受歡迎的腳本語言是 C#，因此我認為選擇 C# 是最佳選擇。

## 💀 C# Language Server Protocal 地獄

在開始用 C# 編寫語言服務器之前，我就已經有一種不好的預感，因為我對作者 [Omnisharp][]
的插件一直沒有好印象。我在 VSCode Marketplace 上嘗試過他們的官方 C# 插件，但說實話，
我不會說我喜歡它。以下是一些原因：

1. 很慢
2. 不斷的突破性變化。下次更新就沒啥作用了！
3. 維護者不是很活躍（但社區很友好）

儘管如此，我還是堅持嘗試一下 [csharp-language-server-protocol][]，因為沒有其他合理的選擇。
經過幾天的挖掘，我面臨以下問題：

1. 官方存儲庫中的示例要么**損壞**，要么**不完整**（有點無用）
2. 過時或缺乏文檔
3. 他們並不真正關心其他編輯。 （許多編輯器兼容問題和 PR 尚未解決）

幸運的是，我找到了 **@gulbanana** 創建的 [thousand][] 語言服務器和 **@tgjones** 創建的
[HlslTools][]。因此，我能夠通過看到他們的實現來完成這個項目！ 😅😇

*附註: 我花了很長時間才弄清楚事情！！！*💀

## ⚙️ 插入 ShaderlabVS

另一個挑戰是語言服務器的引擎。什麼解析文本文檔並向客戶提供合理的響應？然後我找到了一個已
經為我做到這一點的項目—— [ShaderlabVS][]。這是一個理想的解決方案，因為也是用 C# 實現的。
感謝作者 **@wudixiaop** 這個令人驚嘆的項目！ ❤️

## 💥 創建語言服務器的客戶端

好的，現在我們已經有了一個語言服務器並正在運行，但是無法測試它！我是一名 Emacs 用戶，
所以我決定創建一個 Emacs 包 – [lsp-shader][]，它以 [lsp-mode][] 為基礎，並將其用
作我的語言服務器的客戶端。我已經在 Emacs Lisp 中創建了幾個語言服務器的客戶端，
因此創建另一個並不太困難。 😁

## 📦 發布到 NuGet

我沒有將包發佈到 [NuGet][] 的經驗，但在 YouTube 上觀看了一些教程後，這並不難。我參考了
**@razzmatazz** 創建的 [csharp-language-server][]，因為這是我所知道的唯一具有我想
要的類似結構的項目。

最後說明一下，您只需要兩步即可在 [NuGet][] 上發布包。 😋

1. 從 Visual Studio 打包包
2. 上傳到 NuGet 站點

## 🎖️ 成就

- 創建了語言服務器。
- 為 shader-ls 創建 Emacs 語言服務器的客戶端，[lsp-shader][]。
- 我的第一個發布的 NuGet 包，請參閱 https://www.nuget.org/packages/shader-ls/.


[ShaderLab]: https://docs.unity3d.com/Manual/SL-Reference.html
[Omnisharp]: https://github.com/OmniSharp

[csharp-language-server-protocol]: https://github.com/OmniSharp/csharp-language-server-protocol
[ShaderlabVS]: https://github.com/wudixiaop/ShaderlabVS
[thousand]: https://github.com/gulbanana/thousand
[HlslTools]: https://github.com/tgjones/HlslTools

[lsp-mode]: https://github.com/emacs-lsp/lsp-mode

[NuGet]: https://www.nuget.org/
[csharp-language-server]: https://github.com/razzmatazz/csharp-language-server

[lsp-shader]: https://github.com/shader-ls/lsp-shader
