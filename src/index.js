const tough = require('tough-cookie')
const each = require('aigle/each')

module.exports = async (instance) => {
  let cookies = await instance.cookies()
  let cookiejar = new tough.CookieJar()

  await each(cookies, async (cookie) => {
    let parsed = tough.fromJSON({
      key: cookie.name,
      value: cookie.value,
      expires: cookie.expires,
      path: cookie.path,
      httpOnly: cookie.httponly,
      domain: cookie.domain
    })

    let path = `${tough.canonicalDomain(cookie.domain)}${cookie.path}`
    await cookiejar.setCookie(parsed, 'http://' + path, {}, (err) => { if (err) throw err })
    if (!cookie.httpOnly) await cookiejar.setCookie(parsed, 'https://' + path, {}, (err) => { if (err) throw err })
  })

  return cookiejar
}
