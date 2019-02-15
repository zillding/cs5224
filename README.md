# NUS SoC CS5224 Assignment 2

[![Greenkeeper badge](https://badges.greenkeeper.io/zillding/cs5224.svg)](https://greenkeeper.io/)

Trends in Education Courses Enrollment and Market Opportunities

[Source Code](https://github.com/zillding/cs5224) on Github

[Demo](http://zillding.mybluemix.net/) on IBM Bluemix

### Get Started

```bash
$ git clone https://github.com/zillding/cs5224.git
$ cd cs5224
$ npm install
$ npm start
```

Open `http://localhost:3000` to see the results. (Make sure to see 'webpack built ...'
which indicates it finished building)

### Development

All server side code is in `lib`

All frontend app code is in `lib/src`. The app is written in [react](https://facebook.github.io/react/)
and during development time, simply run

`$ npm start`

to start a dev server with [react transform](https://github.com/gaearon/react-transform-boilerplate)
(hot reloading) enabled.

All server api can be accessed at `localhost:3000/api/${endpoint-name}`

Currently supported endpoint names:

+ `data`
+ `jv`
+ `enrolment/hd`
+ `enrolment/pad`
+ `enrolment/pd`
+ `enrolment/ufd`
+ `graduates/hd`
+ `graduates/pad`
+ `graduates/pd`
+ `graduates/ufd`

### Build frontend app

Make sure to build the frontend app static assets before deployment.

`$ npm run build`

The static assests will be generated at `/lib/public/static`.

### Test for Production

Just run `$ npm run prod` which is equivalent to `$ node lib/index.js`

note: this depends on the static assets built in previous step. Make sure to build
the static assets with `$ npm run build` first.

### Deploy

This project is deployed on bluemix cloud platform

A bluemix account need to be set up and `manifest.yml` file need to be properly
modified.

[cloudfoundry](https://github.com/cloudfoundry/cli/releases) need to be set up

`$ npm run deploy`

### Generate json data

`$ npm run data`

The default csv data file is `/scripts/`.

The output json file is in `/lib/data/`

note: this should/could be replaced by db connection in the future
