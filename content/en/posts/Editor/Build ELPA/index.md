---
weight: 4
title: "How to build your own ELPA with Eask?"
date: 2023-09-15
tags: ["Editor", "Emacs", "ELPA"]
categories: ["Editor"]
author: ["Jen-Chieh Shen"]
cover:
  image: cover.png
  hiddenInList: true
draft: false
---

[ELPA][] stands for Emacs Lisp Package Archive. It's used for Emacs users
to download packages from, and it's also the place where Emacs Lisp developers
will host their packages. Here is a list of famous [ELPA][]; see their site
for more information!

- [GNU Elpa][] (official)
- [NonGNU Elpa][] (official)
- [MELPA][]

## ❓ Why?

So why do we want to host our own ELPA? Aren’t those ELPAs enough?

Yes, in general, you don't need to host ELPA yourself since most packages
you need will be available in one of those ELPA (packages can co-exist
between ELPA). Here are several reasons why you might want to build
your own ELPA:

1. The package you like isn’t (yet) on any ELPA
2. ELPA's package review takes a couple of days or months to review ([MELPA][] is probably the fastest)
3. For packages that are no longer maintained, you can link to the newly maintained fork
4. Similar to Pt. 3, if there are bugs in the package you like, you can create a new fork to replace it!
5. For elisp package development purposes. Sometimes, more than the build tools are needed.

<!-- more -->

## 📝 Prerequisite

- Some knowledge about Emacs Lisp
- Install [Eask][] CLI

## 🔍 Step 1. Create ELPA project

It's easy to build your own [ELPA][] with [Eask][]. You only need a few commands,
and it will run.

First, we need to create the ELPA project:

```sh
$ eask create elpa <project_name>
```

In the example, I'm going to use `my-elpa` as my project name:

```sh
$ eask create elpa my-elpa
```

Then you will be prompted to create the Eask file; enter the required
information like this:

```sh
✓ Done cloning the ELPA template

Initialize the Eask-file for your project...
package name: (my-elpa)
version: (1.0.0)
description: Test ELPA
entry point: (my-elpa.el)
emacs version: (26.1)
website:
keywords: elpa
About to write to /home/jenchieh/my-elpa/Eask:

(package "my-elpa"
         "1.0.0"
         "Test ELPA")

(website-url "")
(keywords "elpa")

(package-file "my-elpa.el")

(script "test" "echo \"Error: no test specified\" && exit 1")

(source "gnu")

(depends-on "emacs" "26.1")


Is this OK? (yes) yes
```

And here is the output:

```sh
Package-file seems to be missing `my-elpa.el'
Preparing your new ELPA project... done v

Congratulations! Your new ELPA project is created in /home/jenchieh/my-elpa/

  [1] Navigate to /home/jenchieh/my-elpa/
  [2] Try out the command `eask info`
  [3] See the README.md file to learn to use this project

Visit https://emacs-eask.github.io/ for quickstart guide and full documentation.
```

Now, you will see the project `my-elpa` has been created! Use the `ls` command to see
what's in the project folder:

```
root@6a52f76aff2d:/home/jenchieh/my-elpa# ls
Eask  README.md  docs  recipes
```

## 🔍 Step 2. Add recipes!

Now, you can add recipes to the `recipes` folder.

If you don't know what's the recipe, see [melpa#recipe-format](https://github.com/melpa/melpa#recipe-format)
for more information!

In this example, I'm going to add the [jcs-modeline][] to this ELPA. But you can add
whatever package you like!

This is the recipe file, and place it as `my-elpa/recipes/jcs-modeline` (no file extension).

```elisp
(jcs-modeline :repo "jcs-emacs/jcs-modeline" :fetcher github)
```

## 🔍 Step 3. Build it!

Nice! Now, we have one package in our ELPA.

Next, build our ELPA to host it with GitHub pages (or your own server).

First, we need to install dependencies for our project.

```sh
$ eask install-deps
```

The output:

```sh
root@6a52f76aff2d:/home/jenchieh/my-elpa# eask install-deps
Package-file seems to be missing `my-elpa.el'
Loading package information... done v
Installing 1 package dependency...

  - [1/1] Installing github-elpa (20200129.417)... done v

(Total of 1 dependency installed, 0 skipped)
```

Once all dependencies have been installed, we can build our ELPA with the
following command:

```sh
$ eask run build
```

The output:

```sh
:: github-elpa: packaging recipe jcs-modeline
Package: jcs-modeline
Fetcher: github
Source:  https://github.com/jcs-emacs/jcs-modeline.git

Cloning https://github.com/jcs-emacs/jcs-modeline.git to /home/jenchieh/my-elpa/.github-elpa-working/jcs-modeline/
Checking out afff69f4ef4a126902abe271f1e3fd22b9f91021
Copying files (->) and directories (=>)
  from /home/jenchieh/my-elpa/.github-elpa-working/jcs-modeline/
  to /tmp/jcs-modelinengILfd/jcs-modeline-20230901.330
    jcs-modeline.el -> jcs-modeline.el
Created jcs-modeline-20230901.330.tar containing:
  jcs-modeline-20230901.330/
  jcs-modeline-20230901.330/jcs-modeline-pkg.el
  jcs-modeline-20230901.330/jcs-modeline.el
 ✓ Success:
  2023-09-16T03:29:36+0000  jcs-modeline-20230901.330.entry
  2023-09-16T03:29:36+0000  jcs-modeline-20230901.330.tar
Built jcs-modeline in 0.655s, finished at 2023-09-16T03:29:36+0000
```

Congratulations! 🎉 Now you have your own ELPA!

Next, you would just need to push to a GitHub repo and enable GitHub Pages
for that repo. See [github-elpa#3-change-repository-setting](https://github.com/10sr/github-elpa#3-change-repository-setting)
for more information!


[ELPA]: https://www.emacswiki.org/emacs/ELPA

[GNU Elpa]: https://elpa.gnu.org/
[NonGNU Elpa]: https://elpa.nongnu.org/
[MELPA]: https://melpa.org/#/

[Eask]: https://emacs-eask.github.io/

[jcs-modeline]: https://github.com/jcs-emacs/jcs-modeline
