---
title: Development
layout: default
documentation: true
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

# Workspace

Building a development environment requires fetching the sources first:

{% highlight bash linenos %}
    go get -d github.com/ganggo/ganggo
{% endhighlight %}

Finally we can execute `make` to fetch the rest of the npm/GoLang dependencies:

{% highlight bash linenos %}
    cd $GOPATH/src/github.com/ganggo/ganggo && make install
{% endhighlight %}

Depending on your internet connection, that could take a while.

That's it! You can switch into `$GOPATH/src/github.com/ganggo/ganggo` apply your changes and start the web-server by running:

{% highlight bash linenos %}
    revel run github.com/ganggo/ganggo
{% endhighlight %}

## Unit tests

Running unit tests can be achieved by simply executing `make`

{% highlight bash linenos %}
    make test
{% endhighlight %}

or alternatively `revel`:

{% highlight bash linenos %}
    revel test github.com/ganggo/ganggo
{% endhighlight %}

## Updater

Assuming you already installed all dependencies and followed the above examples you can build a new release with:

{% highlight bash linenos %}
    VERSION=v0 make release
{% endhighlight %}
