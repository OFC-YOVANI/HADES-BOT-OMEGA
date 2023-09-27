let handler = async (m, { command, usedPrefix, text }) => {
let which = command.replace(/eliminar/i, '')
if (!text) throw `[❗] uses ${usedPrefix}list${which} to see the list`
let msgs = global.db.data.msgs
if (!text in msgs) throw `[❗] '${text}' is not registered in the message list`
delete msgs[text]
m.reply(`[❗] successfully deleted the list of messages with the name${text}'*`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'del' + v + ' <text>')
handler.tags = ['database']
handler.command = /^eliminar(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
handler.register = true
export default handler