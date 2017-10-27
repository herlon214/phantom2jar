const expect = require('expect.js')
const phantom2jar = require('../src')
const phantom = require('phantom')

describe('Extract cookies from PhantomJS', async () => {
  let instance, page, jar

  before(async function () {
    this.timeout(60000)
    instance = await phantom.create()
    page = await instance.createPage()
    await page.open('https://stackoverflow.com/')
    jar = await phantom2jar(instance)
  })

  it('should return a tough-cookie', async () => {
    expect(jar.getCookies).to.be.a('function')
    expect(jar.setCookie).to.be.a('function')
    expect(jar.getCookieString).to.be.a('function')
    expect(jar.getSetCookieStrings).to.be.a('function')
    expect(jar.serialize).to.be.a('function')
    expect(jar.toJSON).to.be.a('function')
  })

  it('should have at least one cookie', async () => {
    expect(jar.toJSON().cookies.length).to.have.greaterThan(0)
  })

  after(async () => {
    await instance.exit()
  })
})
