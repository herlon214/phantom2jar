# Phantom2JAR

Export PhantomJS' cookies to [tough-cookie](https://www.npmjs.com/package/tough-cookie) easily.
The 

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
  let jar = phantom2jar(instance) // This will return a though-cookie jar

  // You can plug it with any other lib that use though-cookie :)
  
  // Do whatever you want...
})()
```