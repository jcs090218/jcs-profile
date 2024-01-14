---
weight: 4
title: "Elisp 語言服務器"
date: 2023-11-19
tags: ["Editor"]
categories: ["Editor"]
author: ["Jen-Chieh Shen"]
cover:
  image: cover.png
  hiddenInList: true
draft: false
---

> 代碼庫連結: https://github.com/jcs090218/ellsp

我最近為 Emacs Lisp 創建了一個語言伺服器。這很有趣，因為人們認為 Emacs Lisp
的語言伺服器不會提供任何價值。這個說法是正確的，我也是如此。Emacs Lisp 僅在
Emacs 編輯器內使用，Emacs 本身是一個 Emacs Lisp 解釋器。因此，Emacs Lisp
的語言伺服器很難為 Emacs 用戶帶來任何好處。

但想像一下您可以在 Emacs 之外編寫 elisp（Emacs Lisp 的縮寫）。聽起來很有趣，對吧？ 🤔

## 🔰 重頭開始建立

好吧，我並不是完全從頭開始。我確實使用了一些庫來幫助我更快地設定東西。以下是重要的一點：

- [lsp-mode](https://github.com/emacs-lsp/lsp-mode)
- [elsa](https://github.com/emacs-elsa/Elsa) - 我用過他們的一些程式碼

我從頭開始的是 stdio 解決方案。令人難以置信的是，stdio 在 Emacs 的 `batch` 模式中是如此簡單。

### 💫 問題 1: `read-from-minibuffer` 和 `\r`/`\n`

`read-from-minibuffer` 函數是在 Emacs `batch` 模式下接收標準輸入的一種方法。
這種方法有一個問題。它不會接收輸入，直到末尾有 `\r` 或 `\n` 字元。
這很煩人，因為語言伺服器永遠不會收到完整的資料包。這是我從語言客戶端收到的內容：

```
Content-Length: 8203\r\n
\r\n
{json}
```

而，這是我希望看到的：

```
Content-Length: 8203\r\n
\r\n
{json}\r\n
```

我花了幾個小時尋找解決方案。不幸的是，我找不到一個。然後，我決定使用 node.js 和 JavaScript 創建一個代理 stdio 應用程序，在資料包末尾轉發額外的 `\r\n` 。

```js
let proc = startEmacs();  // Create process Emacs

process.stdin.on('data', function(data) {
  let input = data.toString();
  proc.stdin.write(input + '\r\n');  // Forward with an extra `\r\n`!
});
```

現在我可以從語言客戶端接收資料了！ 🚀

```
method: initialize
<< {"jsonrpc":"2.0","id":0,"result":{"server-info":{"name":"ellsp","version":"0.1.0"},"capabilities":{"hoverProvider":true,"textDocumentSync":{"openClose":true,"save":true,"change":1},"completionProvider":{"resolveProvider":false},"signatureHelpProvider":{"triggerCharacters":[" "]}}}}
```

### 💫 問題 2: 規格... 錯誤?

根據 [LSP規範][]，我們應該在Content-Length和內容本身（JSON主體）之間發送兩個\r\n。然而，由於某種原因，語言客戶端永遠不會被初始化......

這裡的解決方案是只使用`\n`。 （別問我為什麼，我也不知道。）🤔

```
method: initialized
<< no response
```

## ⚜ Conclusion

我道歉;這篇文章不是關於實作細節的。實作非常簡單。我只花了幾個小時就實現了它。如果您對實作感興趣，請直接查看儲存庫。該連結位於本頁的開頭。


[LSP規範]: https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/

