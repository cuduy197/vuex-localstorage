// ---------------------------------------
// Test Environment Setup
// ---------------------------------------
import chai from 'chai'
import sinonChai from 'sinon-chai'

localStorage.clear()

chai.use(sinonChai)

global.assert = chai.assert
global.expect = chai.expect

// ---------------------------------------
// Require Tests
// ---------------------------------------
// for use with karma-webpack-with-fast-source-maps
const __karmaWebpackManifest__ = [] // eslint-disable-line
const inManifest = path => ~__karmaWebpackManifest__.indexOf(path)

// require all `**/*.spec.js`
const testsContext = require.context('./', true, /\.spec\.js$/)

// only run tests that have changed after the first pass.
const testsToRun = testsContext.keys().filter(inManifest)
;(testsToRun.length ? testsToRun : testsContext.keys()).forEach(testsContext)

// require all `src/**/*.js` (for isparta coverage reporting)
const componentsContext = require.context('../../src/', true, /\.js$/)

componentsContext.keys().forEach(componentsContext)
