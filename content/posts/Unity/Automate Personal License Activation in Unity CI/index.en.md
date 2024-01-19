---
weight: 4
title: "Automate Personal License Activation in Unity CI"
date: 2021-09-25
tags: ["Unity", "CI/CD"]
categories: ["Unity"]
author: ["Jen-Chieh Shen"]
cover:
  image: cover.png
  hiddenInList: true
draft: false
---

Following up the thread, [My disappointing experience using Unity in a CI pipeline](https://forum.unity.com/threads/my-disappointing-experience-using-unity-in-a-ci-pipeline.737678/)
is also the biggest obstacle for me as well. Personal license (free version) of
Unity will expire in a period of time depends on your region. The licensing system
from Unity is partially contradict to the CI/CD concept since it will force
the user to update their secret `UNITY_LICENSE` on their GitHub Actions. (Notice
this does not apply to Plus/Pro users because they use a different licensing system!)
😖

<!--more-->

Let's go straigt forward to the problem, what should we do about it? And what
can be improved by this situation? My approach is to automate the licesning
task, but how? Long story short, I came up with a node package [unity-license-activate](https://github.com/jcs090218/unity-license-activate)
that is originally created by [Mizo Take](https://github.com/MizoTake). The
package uses a package named [Puppeteer](https://github.com/puppeteer/puppeteer),
meaning we can control browser through normal JavaScript! That is awesome, the
biggest issue has been resolved! 😁

Next step, we just have to update our secret `UNITY_LICENSE` through GitHub's API!
The tasks are simple, we only need two following GitHub actions.

- [read-file-action](https://github.com/juliangruber/read-file-action), by [Julian Gruber](https://github.com/juliangruber)
- [actions-set-secret](https://github.com/hmanzur/actions-set-secret), by [Habid Enrique Manzur Restrepo](https://github.com/hmanzur)

We can use `read-file-action` to read the downloaded `.ulf` file into memory, then we
can use that as a value for our `actions-set-secrets`. Make sure you have added a secret
`ACCESS_TOKEN` to your repository environment. It’s needed for creating/updating your
GitHub secret from the workflow!

The full workflow file can be accessed through [here](https://github.com/jcs090218/JCSUnity/blob/master/.github/workflows/license.yml).

## 🔐 Two Factor Authentication (TFA)

[unity-license-activate](https://github.com/jcs090218/unity-license-activate)
may not work since Unity would require you to enter a 6 digit verification code
from your email. To get pass this, you would have to install [unity-verify-code](https://github.com/jcs090218/unity-verify-code)
in your workflow and follow the steps [here](https://github.com/jcs090218/unity-verify-code#-prerequisite).

## 🔗 Links

* [unity-license-activate](https://github.com/game-ci/unity-license-activate)
* [unity-verify-code](https://github.com/game-ci/unity-verify-code)
