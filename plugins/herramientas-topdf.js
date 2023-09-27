import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*[❗] 𝙰𝚗𝚜𝚠𝚎𝚛 / 𝚕𝚊𝚋𝚎𝚕 𝚊𝚗 𝚒𝚖𝚊𝚐𝚎*'    
let img = await q.download?.()
let url = await uploadImage(img)    
let docname = text ? text : m.pushName || 'documento'
conn.sendFile(m.chat, `http://api.lolhuman.xyz/api/convert/imgtopdf?apikey=${lolkeysapi}&img=${url}`, docname + '.pdf', '', m, false, { asDocument: true })
}
handler.command = /^topdf$/i
handler.register = true
export default handler
