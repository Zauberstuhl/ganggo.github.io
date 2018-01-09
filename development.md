---
title: Development
layout: default
navigation_order: 3
---

# Dependencies

  * GoLang [golang.org/dl](https://golang.org/dl/)
  * NodeJS/NPM [nodejs.org/en/download](https://nodejs.org/en/download/package-manager)

After downloading and installing both dependencies do not forget to setup your go-environment:

    export GOROOT=/opt/golang
    export GOPATH=$HOME/.golang
    export PATH=$PATH:$GOPATH/bin

This will ensure that all source files and binaries will be placed in `$GOPATH` and will be available in your shell via your `$PATH`-variable.

Finally we can execute `make` to fetch the rest of the npm/GoLang dependencies:

    VERSION=v0 make install-deps

Depending on your internet connection, that could take a while.

# Workspace

Assuming we want to work on the API, Federation and application server we should
create a workspace first:

    mkdir -p ~/workspace/ganggo
    cd ~/workspace/ganggo
    git clone --depth=1 https://github.com/ganggo/ganggo
    git clone --depth=1 https://github.com/ganggo/api
    git clone --depth=1 https://github.com/ganggo/federation

Since `go build` will only build within `$GOPATH` we remove the previouse downloaded libs and create three symlinks to our workspace:

    rm -r $GOPATH/src/gopkg.in/ganggo/ganggo.v0 $GOPATH/src/gopkg.in/ganggo/api.v0 $GOPATH/src/gopkg.in/ganggo/federation.v0
    ln -s $GOPATH/src/gopkg.in/ganggo/ganggo.v0 ~/workspace/ganggo/ganggo
    ln -s $GOPATH/src/gopkg.in/ganggo/api.v0 ~/workspace/ganggo/api
    ln -s $GOPATH/src/gopkg.in/ganggo/federation.v0 ~/workspace/ganggo/federation

That's it! You can switch into `~/workspace/ganggo/ganggo` now and start the web-server by running:

    revel run gopkg.in/ganggo/ganggo.v0

## Updater

If you want to build the update-wrapper as well switch into your workspace and fetch the repository:

    cd ~/workspace/ganggo
    git clone --depth=1 https://github.com/ganggo/updater

Assuming you already installed all dependencies and followed the above examples you can build a new release with:

    VERSION=v0 make release

The `VERSION` flag is used to identify different software versions via [gopkg.in](http://gopkg.in).
