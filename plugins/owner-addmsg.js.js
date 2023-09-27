let handler = async (m, { command, usedPrefix, text }) => {
    let M = m.constructor
    let which = command.replace(/agregar/i, '')
    if (!m.quoted) throw '*[❗𝐈𝐍𝐅𝐎❗] Respond to a text, message, image, etc. And add a text as a keyword.*'
    if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] Use *${usedPrefix}list${which}* To view the message list`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `*[❗𝐈𝐍𝐅𝐎❗] '${text}' Registered in the message list`
    msgs[text] = M.toObject(await m.getQuotedObj())
    m.reply(`*[❗𝐈𝐍𝐅𝐎❗] Message added successfully to the message list as '${text}'*\n*Access with ${usedPrefix}look${which} ${text}*`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <text>')
handler.tags = ['database']
handler.command = /^agregar(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
handler.register = true
export default handler