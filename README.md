# A Batman JS Template using Angular

**This is very much a work in progress as I attempt to grok Batman, PR's welcome :)**

This is a project template for Batman JS applications using [Lineman](http://www.linemanjs.com).

It includes the following features:

1. Template Copying into './generated/app/views/*'(dev) and `./dist/app/views/*`(dist) via `grunt-contrib-copy`
2. The simple BatmanJS example that you get with `batman new`
3. Auto generated [sourcemaps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) with inlined sources via [grunt-concat-sourcemap](https://github.com/kozy4324/grunt-concat-sourcemap) (you'll need to [enable sourcemaps](http://cl.ly/image/1d0X2z2u1E3b) in Firefox/Chrome to see this) (only available in dev mode)
4. [Unit Tests](https://github.com/davemo/lineman-batman-template/tree/master/spec) via `lineman spec`

# Instructions

1. `git clone https://github.com/davemo/lineman-batman-template.git my-lineman-batman-app`
2. `cd my-lineman-batman-app`
3. `npm install`
4. `lineman run`
5. open your web browser to localhost:8000

# Running Tests

1. `lineman run` from 1 terminal window
2. `lineman spec` from another terminal window, this will launch Testem and execute specs in Chrome

# Future/Desired Features

1. True template precompilation that inject template strings into Batmans View Store object
2. A more robust example using auth, linemans fake server for API stubs, and complex view rendering

Hopefully this helps you get up and running with BatmanJS!
