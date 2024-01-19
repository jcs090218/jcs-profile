---
weight: 4
title: "My first VSCode plugin"
date: 2023-08-24
tags: ["LSP"]
categories: ["LSP"]
author: ["Jen-Chieh Shen"]
cover:
  image: cover.png
  hiddenInList: true
draft: false
---

> Repo Link: https://github.com/shader-ls/vscode-shader

Aug 23rd, 2023. I've created my first VSCode plugin -- [vscode-shader][].
My intention was simple: to create a language server's client in VSCode
for my [shader-language-server][] that I created a couple of months ago. 🤔

<!-- more -->

## 🔰 Simple and good UX

First of all, it is very simple to develop a VSCode plugin.
Especially developing a language server's client for VSCode.
There are many examples and good documentation on their site,
making it very easy for developers. I am using [uniteai][] and
[grammarly-language-server][] as the references.

## 📦 Publish to VSCode Marketplace

Publishing to VSCode is probably the most challenging step since you need
to navigate to [Azure DevOps][], which seems utterly irrelevant
to VSCode Marketplace! 🤔 Then get the **Personal Access Token**
in order to publish your packages to the marketplace. It's still
straightforward but quite confusing on the [Azure DevOps][] part.

Then you just need to `npm install -g @vscode/vsce`, `vsce package` and `vsce publish`.
While publishing, you will be asked to enter your PAT!

You can see VSCode's [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
website for more information!

## 🎖️ Achievement

- Created a language server client, [vscode-shader][].
- My first published VSCode plugin, see https://marketplace.visualstudio.com/items?itemName=shader-ls.vscode-shader.


[shader-language-server]: https://github.com/shader-ls/shader-language-server
[vscode-shader]: https://github.com/shader-ls/vscode-shader

[uniteai]: https://github.com/freckletonj/uniteai
[grammarly-language-server]: https://github.com/emacs-grammarly/grammarly-language-server

[Azure DevOps]: https://aex.dev.azure.com/
