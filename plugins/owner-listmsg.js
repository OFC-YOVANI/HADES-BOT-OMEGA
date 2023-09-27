let handler = m => {
let msgs = global.db.data.msgs
m.reply(`🔰 keyword text list 🔰

message
${Object.keys(msgs).map(v => '*👉🏻 ' + v).join('*\n*')}*
`.trim())
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'list' + v)
handler.tags = ['database']
handler.command = /^lista(vn|msg|video|audio|img|sticker)$/
handler.register = true
export default handler