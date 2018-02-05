---
title: Development
layout: default
navigation_order: 3
---

# Dependencies

  * GoLang [golang.org/dl](https://golang.org/dl/)
  * NodeJS/NPM [nodejs.org/en/download](https://nodejs.org/en/download/package-manager)

After downloading and installing both dependencies do not forget to setup your go-environment:

{% highlight bash linenos %}
    export GOROOT=/opt/golang
    export GOPATH=$HOME/.golang
    export PATH=$PATH:$GOPATH/bin
{% endhighlight %}

This will ensure that all source files and binaries will be placed in `$GOPATH` and will be available in your shell via your `$PATH`-variable.

Finally we can execute `make` to fetch the rest of the npm/GoLang dependencies:

{% highlight bash linenos %}
    VERSION=v0 make install
{% endhighlight %}

Depending on your internet connection, that could take a while.

# Workspace

Assuming we want to work on the API, Federation and application server we should
create a workspace first:

{% highlight bash linenos %}
    mkdir -p ~/workspace/ganggo
    cd ~/workspace/ganggo
    git clone --depth=1 https://github.com/ganggo/ganggo
    git clone --depth=1 https://github.com/ganggo/api
    git clone --depth=1 https://github.com/ganggo/federation
{% endhighlight %}

Since `go build` will only build within `$GOPATH` we remove the previouse downloaded libs and create three symlinks to our workspace:

{% highlight bash linenos %}
    rm -r $GOPATH/src/gopkg.in/ganggo/ganggo.v0 $GOPATH/src/gopkg.in/ganggo/api.v0 $GOPATH/src/gopkg.in/ganggo/federation.v0
    ln -s $GOPATH/src/gopkg.in/ganggo/ganggo.v0 ~/workspace/ganggo/ganggo
    ln -s $GOPATH/src/gopkg.in/ganggo/api.v0 ~/workspace/ganggo/api
    ln -s $GOPATH/src/gopkg.in/ganggo/federation.v0 ~/workspace/ganggo/federation
{% endhighlight %}

That's it! You can switch into `~/workspace/ganggo/ganggo` now and start the web-server by running:

{% highlight bash linenos %}
    revel run gopkg.in/ganggo/ganggo.v0
{% endhighlight %}

## Updater

Assuming you already installed all dependencies and followed the above examples you can build a new release with:

{% highlight bash linenos %}
    VERSION=v0 make release
{% endhighlight %}

The `VERSION` flag is used to identify different software versions via [gopkg.in](http://gopkg.in).
