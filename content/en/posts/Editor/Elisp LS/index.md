---
weight: 4
title: "Elisp Language Server"
date: 2023-11-19
tags: ["Editor"]
categories: ["Editor"]
author: ["Jen-Chieh Shen"]
cover:
  image: cover.png
  hiddenInList: true
draft: false
---

> Repo link: https://github.com/jcs090218/ellsp

I’ve recently created a language server for Emacs Lisp. It’s interesting
since people don’t think a language server for Emacs Lisp will provide
any value. The statement is correct, and so do I. Emacs Lisp is only used
within the Emacs editor, and Emacs itself is an Emacs Lisp interpreter.
Therefore, a language server for Emacs Lisp would hardly bring any benefits
to Emacs users.

But imagine you can code elisp (short for Emacs Lisp) outside of Emacs.
That sounds interesting, huh? 🤔

## 🔰 Start from scratch

Okay, I didn't start entirely from scratch. I did use some libraries to help
me set up things faster. Here are the important one:

- [lsp-mode](https://github.com/emacs-lsp/lsp-mode)
- [elsa](https://github.com/emacs-elsa/Elsa) - I've used some of their code

What I've started from scratch is the `stdio` solution. It's incredible how
simple stdio can be within Emacs' `batch` mode.

### 💫 Issue 1: `read-from-minibuffer` and `\r`/`\n`

The function `read-from-minibuffer` is one way to receive standard input
within Emacs' `batch` mode. There is one issue with this method. It doesn't
receive input until there is a `\r` or `\n` character at the end. That's
annoying since the language server would never receive the complete packet.
Here is what I would receive from the language client:

```
Content-Length: 8203\r\n
\r\n
{json}
```

And, this is what I hope to see:

```
Content-Length: 8203\r\n
\r\n
{json}\r\n
```

I’ve spent a couple of hours searching for a solution. Unfortunately,
I’m not able to find one. Then, I decided to create a proxy stdio
application using node.js and JavaScript that forwards an extra
`\r\n` at the end of the packet.

```js
let proc = startEmacs();  // Create process Emacs

process.stdin.on('data', function(data) {
  let input = data.toString();
  proc.stdin.write(input + '\r\n');  // Forward with an extra `\r\n`!
});
```

Wola, now I am able to receive data from the language client! 🚀

```
method: initialize
<< {"jsonrpc":"2.0","id":0,"result":{"server-info":{"name":"ellsp","version":"0.1.0"},"capabilities":{"hoverProvider":true,"textDocumentSync":{"openClose":true,"save":true,"change":1},"completionProvider":{"resolveProvider":false},"signatureHelpProvider":{"triggerCharacters":[" "]}}}}
```

### 💫 Issue 2: Specification... error?

According to [LSP Specification][], we should send two `\r\n` between the `Content-Length` and
the content itself (JSON body). However, for some reason, the language client never gets initialized...

The solution here is to just use `\n` instead. (Don't ask me why; I have no idea.) 🤔

```
method: initialized
<< no response
```

## ⚜ Conclusion

I apologize; this post isn’t about the implementation details.
The implementation is quite simple. It only took me a couple of hours
to implement it. If you are interested in the implementation, please
check out the repository directly. The link is at the beginning of this page.


[LSP Specification]: https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/
