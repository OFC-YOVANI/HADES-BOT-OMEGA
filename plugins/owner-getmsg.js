let handler = async (m, { conn, command, usedPrefix, text }) => {
let which = command.replace(/ver/i, '')
if (!text) throw `[❗] or ${usedPrefix}list${which} to see the list`
let msgs = global.db.data.msgs
if (!text in msgs) throw `[❗] '${text}' not registered in message list`
let _m = await conn.serializeM(msgs[text])
await _m.copyNForward(m.chat, true)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'get' + v + ' <text>')
handler.tags = ['database']
handler.command = /^ver(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
handler.register = true
export default handler