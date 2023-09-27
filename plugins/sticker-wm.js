import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!m.quoted) return conn.reply(m.chat, `[❗] Please label the sticker you want to steal and enter the name you want to give to the sticker.`, fkontak, m)
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) return conn.reply(m.chat, `[❗] Respond to a sticker you want to steal and enter a name`, fkontak, m)
let img = await m.quoted.download()
if (!img) return conn.reply(m.chat, `[❗]Respond to a sticker you want to steal and enter the name you want to give to the sticker`, fkontak, m)
stiker = await addExif(img, packname || global.igfg, author || global.author)
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else return conn.reply(m.chat, `[❗] sorry an error occurred`, fkontak, m)
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^take|robar|wm$/i
handler.register = true
handler.premium = true
export default handler
