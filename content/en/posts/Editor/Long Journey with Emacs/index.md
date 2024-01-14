---
weight: 4
title: "Long Journey with Emacs"
date: 2023-07-08
tags: ["Editor", "Emacs"]
categories: ["Editor"]
author: ["Jen-Chieh Shen"]
cover:
  image: cover.png
  hiddenInList: true
draft: false
---

**⚠️ The intention of this post is to remind myself why Emacs isn't worth my time anymore.**

I've been using Emacs since 2015. I have developed more than 150 elisp packages,
and maintained over 200 packages (including my packages). It's been a long
journey staying in the Emacs community, I think it's a good for me to slow
myself down and step back a little and think what I've accomplished through
out these years.

<!-- more -->

## 💫 How I got into Emacs?

Many people asked me this question, so I decided to reply it here.

I first saw Emacs is at 2015, seeing Casey Muratori's [Handmade Hero][] series.
I was blown away by how fast he can code in Emacs. How he can jump to other
window and never leave the keyboard are all new to me.

But if I look at his configuration now, it's actually not so great.
He doesn't use any third-party packages, so he has every defined in his own configuration
file (`~/.emacs` file). The configuration can still be great without using
those third-party packages, but it will only limit you and remake the wheel
that maybe others have already done for you.

Besides all of that, Casey is still a top-tier programmer I have known in my whole life. ❤️

## 💫 How much I've put my time to Emacs?

Like I've mentioned above, trust me. I put in a lot of time to accomplish what
I've done for the Emacs community. If you search all my packages, I hold the most
packages in [MELPA][]. The time I have put kinda proof how much I love Emacs, but
also how much I get disappointed with Emacs. 😥

## 💫 Why Emacs isn't the worth my time anymore?

First of all, there is nothing wrong with the Emacs' devel. They did a great job
keeping Emacs alive, and I like their mentality and most of their technical decisions.

For me, the problem is the Elisp dev ecosystem (not the Emacs community itself; consider
the Elisp dev ecosystem is the subset of the Emacs community). I appreciate people
willing to contribute to Emacs, but I hate when they don't consider their packages'
cross-platform capability. Yes, I'm a Windows user; actually, I use all the most used
systems (Linux, macOS, and Windows). I hate that when I try a package, it only
works on a specific system (excluding packages that only rely on certain systems),
but it is supposed to work on all systems. I feel terrible and frustrated because most of
the Elisp dev does not care or does not care enough about the minority users (Windows users).
Even some famous packages don't work well on Windows, magit is slow, straight.el is slow,
helm is slow, ivy is slow, projectile is broken, eping is broken, EAF is constatly broken, etc.
I use over 500 packages in my configuration. I can list a ton of packages that have terrible
cross-platform capability.

But are they all bad? Of course not. Most of the authors show patience and are willing to
help you with the issue you have encountered. At least they have tried to solve these
issues and provide a workaround, etc. Like magit has a GitHub issue ([magit/#2982](https://github.com/magit/magit/issues/2982))
that explicitly talking about the Windows performance. EAF authors and maintainers constantly
respond to the users they have trouble with. These projects are amazing, and I appreciate
them so much! But most of them aren't like that... Unfortunately, they either don't care
or don't care enough.

In the 2020 Emacs survey, Windows users are only 8%! I've heard a lot of people claim I'm
wrong. First of all, I'm in the minority; only God knows what we think. Second of all, I wish
more than anyone I am wrong. I don't care if I'm wrong or not. I want the UX to be improved!

Many people complain about the OS (Windows), suggest using the WSL, etc. But that's not the
issue. Ignoring the issue is the issue! If you can't solve the issue from another platform, don't
blame the platform. Blame yourself! There are no bad systems, only bad programmers (in this case).

To answer my own question, I am tired of being in the minority. It's laborious and tedious. I'm
tired of complaining to other Elisp dev. For people that know me, you know I hate to say all
this. It's sad and hopeless. Why bother? You might have known why I put so much time into Emacs.
I'm only filling the gap between Unix-like systems and Windows. And yes, all my packages work
across all platforms.

## 💫 Will I leave Emacs community?

The short answer is no. I will most likely not going to develop more Emacs packages anymore;
unless I really want to. But I will continue to maintain all the packages I'm currently
maintaining since I will continue to use Emacs for my future work!

## ⚜️ Conclusion

I didn't know the article would be this long. It's been a very long journey for me. I have
learned a lot from this community and know many great people. I appreciate people who use
my packages and those who do care the minority users like me. ❤️🙏


[Handmade Hero]: https://handmadehero.org/
[MELPA]: https://melpa.org/#/
