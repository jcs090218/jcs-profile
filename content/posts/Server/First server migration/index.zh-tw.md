---
weight: 4
title: "第一次遷移服務器"
date: 2022-09-10
tags: ["Server", "migration"]
categories: ["Server"]
author: ["Jen-Chieh Shen"]
cover:
  image: cover.png
  hiddenInList: true
draft: false
---

我一直以來的的 web hosting, 一直是使用aws. 但最近總覺得價錢太貴, 而且很多資金的使用
並不是這麼貼心. 總是莫名其妙多了一些費用. 當然, 這些並不是說aws有問題. 不過它們這方
面的機制, 我本身並不是很喜歡. 所以我決定在這個月, 換一個web hosting的公司. 更換的
理由如下:

<!-- more -->

1. AWS收費機制不討人喜歡
2. 價格對於小型用戶太過昂貴, 而且不是這麼需要
3. UI介面有夠醜, UX很糟糕
4. 它們大量的制定他們aws服務的**專有名詞**, 這部分技能是無法轉移的 (EC2? Route 53? 等等)

接著, 進入細節.

### 📋 遷移網域名

這次遷移的目標是 [jcs-profile.com](https://who.is/whois/jcs-profile.com)
這個網域. 查一下 who.is, 註冊商是 `amazon.com`. 我之前是使用 AWS 裡面的網域
註冊服務 [Route 53](https://aws.amazon.com/route53/) 來註冊這個網域. 不過
我想把它移置到 [Namecheap](https://www.namecheap.com/). 這家並不是最便宜的,
不過他的優點大概是老牌, 介面也算乾淨好整理. 不會有些雜七雜八的東西. 不過我自己
也沒有用過很多家, 所以我也不班門弄斧了. 等我有足夠的經驗再來補充.

選擇網域註冊商, 我是參考了下面這支影片. 我原本是想選 [Google Domains](https://domains.google/)
的, 不過當我選擇國家的時候, 竟然沒有支援`台灣`!? (還在拓展中) 所以後來索性選擇了
Namecheap. 不過依然是個很棒著選擇! 😁

{{< youtube G5KpAflMOng >}}

[Craylor Made](https://www.youtube.com/c/CraylorMade) 講解得非常棒! 給個讚! 👍

不過這次的網域名的遷移, 因為更改了註冊商, 所以花了五天的時間更改註冊商. 我那時候是
禮拜四申請轉移網域名, 禮拜一才轉移完成. 😅

### 📂 資料轉移

這部分就非常簡單了, 我一樣使用 [FileZilla](https://filezilla-project.org/)
來透過 `FTP` 連線把我舊的 (在aws) 資料全部拉下來做備份. 由於我沒有使用什麼特別的
服務, 像是 `Node`, `PHP`, `MySQL` (除了 [Nginx](https://www.nginx.com/)),
所以我也不用過多的考慮. 先直接拉下來就好. 不過這部分的遷移也是挺簡單的, 只要記得,
**在確定把所有東西遷移到新的服務器之前, 千萬不要把舊的關閉!**

這邊感覺蠻可惜的是, 我並沒有使用 [Docker](https://www.docker.com/) 部屬的習慣.
有機會的話, 我是蠻想有用 Docker 遷移服務器的機會! 🙂

### 🩹 重新啟動

新的 web hosting 我選擇 [DigitalOcean](https://www.digitalocean.com/).
選擇 DO 的原因如下,

1. 便宜 (相對於aws)
2. 透明資金流向
3. 好看且清新的介面
4. 文件很多, 社群友善

唯一的缺點大概是, 目前提供的服務器位置都在歐美地區. 相比於其他家算是比較少的.

資料轉移完成後, 第一件最重要的是把位址轉移到新的服務器IP. 因為我沒有使用過 Namecheap
所以我是參考了下面的影片解說, 非常值觀好了解!

{{< youtube zOPH54ltGLQ >}}

我原本舊的網域服務器位址 (aws的`NAMESERVERS`)

```
ns-1375.awsdns-43.org
ns-1685.awsdns-18.co.uk
ns-804.awsdns-36.net
ns-93.awsdns-11.com
```

新的要改成, (DO的`NAMESERVERS``)

```
ns1.digitalocean.com.
ns2.digitalocean.com.
ns3.digitalocean.com.
```

接著到DO 的 DNS Records 那邊新增 `HOSTNAME` 就完成了!

| Type | Hostname | Value  | TTL(seconds)  |
|:-----|:---------|:-------|:--------------|
| A    | @        | IP位址 | 3600 (預設的) |
| A    | www      | IP位址 | 3600 (預設的) |

結束! 萬歲!~ 🥳🎉🎊
