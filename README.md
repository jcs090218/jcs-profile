# jcs-profile

[![Build](https://github.com/jcs090218/jcs-profile/actions/workflows/build.yml/badge.svg)](https://github.com/jcs090218/jcs-profile/actions/workflows/build.yml)

My personal website.

See the latest version in https://jcs090218.github.io/jcs-profile/.

The static `public` folder (submodules) is under https://gitlab.com/jcs-profile/public.

## 🔨 Development

To start the server:

```
$ hugo server
```

Then open the url http://localhost:1313/ to your browser!

## ❓ How to deploy?

**⚠️ This is a note for myself.**

The static files are under `gh-pages`; hence, you need to switch to that branch to deploy on your website.

```sh
# Navigate to the static sites folder!
$ cd /path/to/public

# Then pull all static files under public directory!
$ git clone https://github.com/jcs090218/jcs-profile . --branch gh-pages
```

Every time the files are updated, you need to wait for the workflow to complete before you pull it on your server.
