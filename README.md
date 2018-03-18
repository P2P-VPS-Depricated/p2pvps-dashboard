# P2P VPS - Dashboard
The
[p2pvps-server](https://github.com/P2PVPS/p2pvps-server)
repository was forked into two separate repositories.
This one focuses on the Vue.js single page app (SPA) that generates a web-browser
based dashboard for interacting with a P2P VPS server.
This SPA is designed to work with the
[p2pvps-server2](https://github.com/P2PVPS/p2pvps-server2) repository, which is
the back-end server-side application.

### File Layout
* The `site-template-connextcms/` directory contains the ConnextCMS site template
files needed to create database models and REST APIs required
to coordinate Clients and persist data. For more information, see the
Readme for [ConnextCMS Site Templates](https://github.com/skagitpublishing/site-template-connextcms).

* The user interfaces used to add devices and rent them are designed from
Vue.js applications bundled through Webpack. The code for these applications
live in the `src` directory. For additional details on Vue.js template used, see the [vue-connextcms-site-template](https://github.com/skagitpublishing/vue-connextcms-site-template)
repository.

## Build Setup
For detailed explanation on how the build commands work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# build as a site template for ConnextCMS
npm run connextcms

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Installation
Direction are being developed.


## License
(The MIT License)

Copyright (c) 2018 [Chris Troutner](http://christroutner.com) and [P2P VPS Inc](http://p2pvps.org)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
