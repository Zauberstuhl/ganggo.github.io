---
title: Configuration
layout: default
navigation_order: 2
---

# Configuration

## Database

### Postgres

To setup Postgres, run the following commands:

{% highlight bash linenos %}
    su - postgres
    psql postgres

    CREATE USER ganggo WITH PASSWORD 'ganggo';
    CREATE DATABASE ganggo OWNER ganggo;
    GRANT ALL PRIVILEGES ON DATABASE ganggo to ganggo;
    \q
{% endhighlight %}

The schema will be applied while booting!

### MSSQL

TODO: Contributions are welcome!

### MySQL

TODO: Contributions are welcome!

### SQLite

TODO: Contributions are welcome!
