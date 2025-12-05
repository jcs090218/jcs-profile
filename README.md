# jcs-profile

[![Build](https://github.com/jcs090218/jcs-profile/actions/workflows/build.yml/badge.svg)](https://github.com/jcs090218/jcs-profile/actions/workflows/build.yml)

My personal website.

See the latest version in https://jcs090218.github.io/jcs-profile/.

## 🔨 Development

To start the server:

```sh
# Clone the repo.
git clone https://github.com/jcs090218/jcs-profile --recursive

# Change directory to the project folder.
cd jcs-profile

# Start the server.
hugo server
```

Then open the url http://localhost:1313/ to your browser!

### 📁 The `public` folder

The static `public` folder (submodules) is under https://gitlab.com/jcs-profile/public.

```sh
git submodule add https://gitlab.com/jcs-profile/public/wnm249_midterm static/public/wnm249_midterm
git submodule add https://gitlab.com/jcs-profile/public/wnm249_final static/public/wnm249_final
git submodule add https://gitlab.com/jcs-profile/public/sherlock-web static/public/sherlock-web
git submodule add https://gitlab.com/jcs-profile/public/Links_PipelineOfEmperorYu static/public/Links_PipelineOfEmperorYu
```

## ❓ How to deploy?

**⚠️ This is a note for myself.**

The static files are under `gh-pages`; hence, you need to switch to that branch to deploy on your website.

```sh
# Navigate to the static sites folder!
cd /path/to/public

# Then pull all static files under public directory!
git clone https://github.com/jcs090218/jcs-profile . --branch gh-pages
```

Every time the files are updated, you need to wait for the workflow to complete before you pull it on your server.
