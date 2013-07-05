# A Lineman JS Template using Angular

** Supporting Lineman Version : 0.11.1 **

This provides the basic configuration needed to get an Angular app up and running with lineman. It includes the following features:

1. Template Precompilation into Angulars $templateCache using `grunt-angular-templates`
2. A basic login, logout service bound to sample routes inside `config/server.js`
3. A router, and 2 views `home` and `login`
4. A directive that shows a message on mouseover
5. 2 Controllers, for `home` and `login`, with $scope variables set and bound
6. A working, bound login form (username/password don't matter, but are required)
7. Configured [grunt-ngmin](https://github.com/btford/grunt-ngmin) so you don't have to fully qualify angular dependencies.

![The Login Page](https://raw.github.com/davemo/lineman-angular-template/master/doc/login.png)
![The Home Page](https://raw.github.com/davemo/lineman-angular-template/master/doc/home.png)

# Instructions

1. git clone this repo
2. npm install -g lineman (if you don't already have lineman installed)
3. cd in to cloned repo
4. npm install
5. lineman run
6. open your web browser to localhost:8000

Hopefully this helps you get up and running with AngularJS!
