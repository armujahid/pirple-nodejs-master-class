# A simple "Hello World" API


`GET /hello` will return a simple hello world message

`POST /hello` will return hello world message with posted data

**How to start**

* Staging environment
```shell
$ node index.js

Starting staging environment...
The HTTP server is running on port 3000
The HTTPS server is running on port 3001
```

* Production environment
```shell
$ NODE_ENV=production node index.js

Starting production environment...
The HTTP server is running on port 5000
The HTTPS server is running on port 5001
```


