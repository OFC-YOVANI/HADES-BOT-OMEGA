let { downloadContentFromMessage } = (await import('@whiskeysockets/baileys'));
let handler = async (m, { conn }) => {
if (!m.quoted) throw '*[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝚃𝙾 𝙰 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝚃𝙷𝙰𝚃 𝚆𝙰𝚂 𝚂𝙴𝙽𝚃 𝙸𝙽 𝚅𝙸𝙴𝚆𝙾𝙽𝙲𝙴*'
if (m.quoted.mtype !== 'viewOnceMessageV2') throw '*[❗] 𝚃𝙷𝙴 𝚂𝙴𝙻𝙴𝙲𝚃𝙴𝙳 𝙼𝙴𝚂𝚂𝙰𝙶𝙴 𝙸𝚂 𝙽𝙾𝚃 𝚅𝙸𝙴𝚆𝙾𝙽𝙲𝙴*'
let msg = m.quoted.message
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])}
if (/video/.test(type)) {
return conn.sendFile(m.chat, buffer, 'error.mp4', msg[type].caption || '', m)
} else if (/image/.test(type)) {
return conn.sendFile(m.chat, buffer, 'error.jpg', msg[type].caption || '', m)
}}
handler.help = ['readvo']
handler.tags = ['tools']
handler.command = /^(readviewonce|read|revelar|readvo)$/i
handler.register = true
export default handler
