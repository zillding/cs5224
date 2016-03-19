# NUS SoC CS5224 Assignment 2

Waiting time on different hospitals in Singapore

### Get Started

```bash
$ git clone https://github.com/zillding/cs5224.git
$ cd cs5224
$ npm install
$ npm start
```

Open `http://localhost:3000` to see the results.

### Development

All server related code is in `lib` which is based on [koa](http://koajs.com/)

All frontend app code is in `src`. The app is written in [react](https://facebook.github.io/react/)
and during development time, simply run

`$ npm run dev`

to start a dev server with [react transform](https://github.com/gaearon/react-transform-boilerplate)
(hot reloading) enabled.

### Build frontend app

Make sure to build the frontend app before deployment.

`$ npm run build`

### Deploy

This project is deployed on bluemix cloud platform

A bluemix account need to be set up and `manifest.yml` file need to be properly
modified.

If use [cloudfoundry](https://github.com/cloudfoundry/cli/releases), simply run

```bash
$ cf push
```
