# NUS SoC CS5224 Assignment 2

Waiting time on different hospitals in Singapore

### Get Started

```bash
$ git clone https://github.com/zillding/cs5224.git
$ cd cs5224
$ npm install
$ npm run build
$ npm start
```

Open `http://localhost:3000` to see the results.

### Development

All server related code is in `lib` which is based on [koa](http://koajs.com/)

All frontend app code is in `lib/src`. The app is written in [react](https://facebook.github.io/react/)
and during development time, simply run

`$ npm start` which is equivalent to `$ node devServer.js`

to start a dev server with [react transform](https://github.com/gaearon/react-transform-boilerplate)
(hot reloading) enabled.

### Build frontend app

Make sure to build the frontend app static assets before deployment.

`$ npm run build`

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

`$ npm run data [optional/path/to/csv/file]`

The default csv data file is `/scripts/data.csv`.

The output json file is in `/lib/data.json`

note: this should be replaced by db connection in the future
