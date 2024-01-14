---
weight: 4
title: "視差網站"
date: 2018-08-14
tags: ["Web", "parallax"]
categories: ["Web"]
author: ["Jen-Chieh Shen"]
cover:
  image: cover.png
  hiddenInList: true
draft: false
---

**Link:** [MapleStory Survival Kit](http://www.jcs-profile.com/public/AAU/wnm249/m15/wnm249_final/)

這是我學校第一堂網頁設計課所做的網頁. 因為之前是做遊戲的, 所以想挑戰看看
網頁設計能夠做到什麼地步來做到近乎渲染遊戲的方式. 這個網站有以下幾個亮點,

<!-- more -->

1. 視差
2. 聲音
3. 轉蛋機

## 👁️ 視差

我看大多範例的視差效果都是一張圖在後面, 身為一個遊戲工程師不經覺得這
樣的設計有些粗糙. 也想要設計看看CSS能夠做到什麼地步. 很幸運地在自己多
方琢磨之後,了解到CSS的動畫機制. 可以有機會的展示CSS的強大動畫效果. 視
差的動畫效果可以由左上方小小的控制板來操作.

## 🔊 聲音

這是我第一次使用JavaScript裡面的聲效引擎. 在完全不了解的情況下,我選擇
使用第一個出現在我面前的一個函式庫
[ion.sound](https://github.com/IonDen/ion.sound).
這個函式庫非常簡單且強大, 看一下範例就可以清楚知道要怎麼使用.

## 🎟️ 轉蛋機

如果你有拜訪我的這個作品網站,你會在最左邊的網站看到三台轉蛋機.
當你用鼠標指著他的時候, 他就會開始掉落物品! 這是一個簡單的展示
使用JavaScript, 以每秒30偵的速度去渲染掉落動畫.

