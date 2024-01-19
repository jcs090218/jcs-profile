---
weight: 4
title: "我的第一個 VSCode 插件"
date: 2023-08-24
tags: ["LSP"]
categories: ["LSP"]
author: ["Jen-Chieh Shen"]
cover:
  image: cover.png
  hiddenInList: true
draft: false
---

> 代碼庫連結: https://github.com/shader-ls/vscode-shader

2023 年 8 月 23 日。我創建了我的第一個 VSCode 插件 – [vscode-shader][]。
我的意圖很簡單：在 VSCode 中為我幾個月前創建的 [shader-language-server][]
創建一個語言服務器客戶端。🤔

<!-- more -->

## 🔰 簡單且良好的用戶體驗

首先，開發一個 VSCode 插件非常簡單。特別是為 VSCode 開發語言服務器的客戶端。
他們的網站上有許多示例和良好的文檔，使開發人員非常容易。我使用 [uniteai][]
和 [grammarly-language-server][] 作為參考。

## 📦 發布到 VSCode Marketplace

發佈到 VSCode 可能是最具挑戰性的步驟，因為您需要導航到 [Azure DevOps][]，
這似乎與 VSCode Marketplace 完全無關！ 🤔 然後獲取 **Personal Access Token**，
以便將您的包發佈到市場。它仍然很簡單，但在 [Azure DevOps][] 部分卻相當令人困惑。

然後你只需要 `npm install -g @vscode/vsce`、`vsce package` 和 `vsce publish`。
發佈時，系統會要求您輸入 PAT！

您可以訪問 VSCode 的 [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
網站了解更多信息！

## 🎖️ 成就

- 創建了語言服務器的客戶端, [vscode-shader][]。
- 我的第一個發布的 VSCode 插件包，請參閱 https://marketplace.visualstudio.com/items?itemName=shader-ls.vscode-shader.


[shader-language-server]: https://github.com/shader-ls/shader-language-server
[vscode-shader]: https://github.com/shader-ls/vscode-shader

[uniteai]: https://github.com/freckletonj/uniteai
[grammarly-language-server]: https://github.com/emacs-grammarly/grammarly-language-server

[Azure DevOps]: https://aex.dev.azure.com/
