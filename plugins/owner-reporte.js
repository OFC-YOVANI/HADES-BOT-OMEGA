let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝚁𝙴𝙿𝙾𝚁𝚃𝙴*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} el comando ${usedPrefix}play no manda nada*\n\n\n*[❗𝐈𝐍𝐅𝐎❗]ENTER A REPORT\n\n EXAMPLE:\n{usedPrefix + command} the ${usedPrefix}play command does not send anything*`
if (text.length < 10) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙳𝙴𝙱𝙴 𝚂𝙴𝚁 𝙳𝙴 𝙼𝙸𝙽𝙸𝙼𝙾 𝟷0 𝙲𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝙴𝚂!*\n\n\n*[❗𝐈𝐍𝐅𝐎❗] THE REPORT MUST BE A MINIMUM OF 10 CHARACTERISTICS*`
if (text.length > 1000) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙳𝙴𝙱𝙴 𝚂𝙴𝚁 𝙳𝙴 𝙼𝙰𝚇𝙸𝙼𝙾 𝟷000 𝙲𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝙴𝚂!*\n\n\n*[❗𝐈𝐍𝐅𝐎❗] THE REPORT MUST BE MAXIMUM CHARACTERS!*`
let teks = `*❒═════[𝐑𝐄𝐏𝐎𝐑𝐓𝐄]═════❒*\n*┬*\n*├❧ 𝙽𝚄𝙼𝙴𝚁𝙾:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ 𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${text}\n*┴*`
conn.reply('5212412377467@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
m.reply(`*[ ✔️ ] 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙰𝙻 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙳𝙴𝙻 𝙱𝙾𝚃, 𝚂𝚄 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝚂𝙴𝚁𝙰́ 𝙰𝚃𝙴𝙽𝙳𝙸𝙳𝙾 𝙻𝙾 𝙰𝙽𝚃𝙴𝚂 𝙿𝙾𝚂𝙸𝙱𝙻𝙴, 𝚂𝙸 𝙴𝚂 𝙵𝙰𝙻𝚂𝙾 𝙾 𝙱𝚁𝙾𝙼𝙰 𝚂𝙾𝙻𝙾 𝚂𝙴 𝙸𝙶𝙽𝙾𝚁𝙰𝚁𝙰*\n\n\n*[ ✔️ ]  REPORT SENT SUCCESSFULLY BY THE CREATOR OF THE BOT, YOUR REPORT WILL BE ATTENDED AS SOON AS POSSIBLE, IF IT IS A FAILURE OR JOKE, YOU SHOULD JUST IGNORE*`)
}
handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes)$/i
handler.register = true
export default handler
