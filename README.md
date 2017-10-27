# Phantom2JAR

[![NPM](https://nodei.co/npm/phantom2jar.png)](https://nodei.co/npm/phantom2jar/)

Export PhantomJS' cookies to [tough-cookie](https://www.npmjs.com/package/tough-cookie) easily.

You can use the tough-cookie's JAR with others request library. 

## Install

`npm install phantom2jar --save`

## Usage

Here's a basic example opening a webpage and extracting the created cookies from them.

```javascript
const phantom2jar = require('phantom2jar')
const phantom = require('phantom')

(async function() {
  // Initialize phantomjs
  const instance = await phantom.create()
  const page = await instance.createPage()

  // Do your requests with the page
  const stackoverflow = await page.open('https://stackoverflow.com/')
  let jar = await phantom2jar(instance) // This will return a though-cookie jar

  // You can plug it with any other lib that use though-cookie :)
  
  // Do whatever you want...
})()
```