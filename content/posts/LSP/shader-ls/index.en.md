---
weight: 4
title: "Shader Language Server (LS)"
date: 2023-08-23
tags: ["LSP"]
categories: ["LSP"]
author: ["Jen-Chieh Shen"]
cover:
  image: cover.png
  hiddenInList: true
draft: false
---

> Repo Link: https://github.com/shader-ls/shader-language-server

April 30th, 2023. I have created my first language server that is actually
useful to someone. I tried a language server a while back, but it was just
an example server, so it’s not very useful, and it’s only for educational
purposes.

The target language I chose to write is the [ShaderLab][] language.
ShaderLab is used in Unity Engine, so you can write custom shaders
to stylize your game. Unlike regular programming languages, [ShaderLab][]
is much simpler to analyze, so the language server can respond to the
client side.

<!-- more -->

## ❓ Why chose C# as the implementaion language?

Since Unity Engine's most popular scripting language is C#, I reckon
choosing C# is the perfect match.

## 💀 C# Language Server Protocal Hell

I already had a bad feeling when writing a language server in C#
before starting it since I never had a good impression of the
author [Omnisharp][]'s plugins. I've tried their official C# plugins
on the VSCode Marketplace, but to be honest, I wouldn't say I like it.
Here are a few reasons why:

1. It's slow
2. Constant breaking changes. Next update nothing works!
3. Maintainers are not very active (but the community is friendly though)

Nevertheless, I insist on giving [csharp-language-server-protocol][] a shot
since there are no other **reasonable alternatives**. After digging it for
a few days, here are issues I am facing:

1. Example from the official repository is either **broken** or **incomplete** (kinda useless)
2. Obsolete or lack of documentation
3. They don't really care about other editors. (Many editor compatible issues and PRs are left opened)

Fortunately, I found the [thousand][] language server created by **@gulbanana** and [HlslTools][]
created by **@tgjones**. Therefore, I am able to accomplish this project by seeing their
implementations! 😅😇

*P.S. It took me very long to figure things out!!!* 💀

## ⚙️ Plug-in ShaderlabVS

Another challenge is the engine of the language server. What parses the text
document and gives reasonable responses to the client? Then I found a project
that already does that for me -- [ShaderlabVS][]. It's an ideal solution since
the implementation are also in C#. Thanks to the author **@wudixiaop** for this
amazing project! ❤️

## 💥 Create a language server client

Okay, now we have a language server up and running, but there is no way to test it!
I'm an Emacs user, so I've decided to create an Emacs package -- [lsp-shader][] that
uses [lsp-mode][] as the base and use it as my language server's client. I've already
created several language server's clients in Emacs Lisp, so creating another isn't too
difficult. 😁

## 📦 Publish on NuGet

I have no experience publishing packages to [NuGet][], but it wasn't hard after
watching a couple of tutorials on YouTube. I use the [csharp-language-server][]
created by **@razzmatazz** as my reference since this is the only project I know
with a similar structure I want.

In closing, you only need two step to publish package on NuGet. 😋

1. Pack the package from Visual Studio
2. Upload to NuGet site

## 🎖️ Achievement

- Created a language server.
- Created Emacs language server's client for shader-ls, [lsp-shader][].
- My first published NuGet package, see https://www.nuget.org/packages/shader-ls/.


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
