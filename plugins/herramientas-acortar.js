import fetch from 'node-fetch'
let handler = async(m, { conn, args, text }) => {
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] Enter a link / URL which you want to shorten*'
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()  
if (!shortUrl1) throw `*[❗] Error, check that the text entrusted is a text and try it again*`
let done = `*Link correctly shortened!!*\n\n*Link above:*\n${text}\n*Shortening link:*\n${shortUrl1}`.trim()   
m.reply(done)}
handler.help = ['tinyurl','acortar'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short|acortar|corto)$/i
handler.fail = null
handler.register = true
export default handler
