let handler = async (m, { conn, usedPrefix, text, command }) => {
let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙾𝙻𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝙴𝙽 𝙰𝚂𝙸𝙶𝙽𝙰𝚁 𝚃𝙴𝚇𝚃𝙾𝚂 𝙾 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙰𝚂𝙸𝙶𝙽𝙰𝙳𝙾𝚂 𝙰 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂 𝙾 𝙸𝙼𝙰𝙶𝙴𝙽𝙴𝚂, 𝙿𝙰𝚁𝙰 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝙴𝙻 𝙲𝙾𝙳𝙸𝙶𝙾 𝙰𝚂𝙸𝙶𝙽𝙰𝙳𝙾 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix}listcmd*\n\n\n*[❗𝐈𝐍𝐅𝐎❗] ONLY TEXTS OR COMMANDS ASSIGNED TO STICKERS OR IMAGES CAN BE ASSIGNED, TO OBTAIN THE ASSIGNED CODE USE THE ${usedPrefix}listcmd*`
let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙾𝙻𝙾 𝙴𝙻 𝙾𝚆𝙽𝙴𝚁 𝙿𝚄𝙴𝙳𝙴 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝚁 𝙻𝙰 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙲𝙸𝙾𝙽*\n\n\n*[❗𝐈𝐍𝐅𝐎❗]*ONLY THE OWNER CAN MAKE THE MODIFICATION*'
delete sticker[hash]
m.reply(`*[ ✔ ] 𝙴𝙻 𝚃𝙴𝚇𝚃𝙾/𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝚂𝙸𝙶𝙽𝙰𝙳𝙾 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁/𝙸𝙼𝙰𝙶𝙴𝙽 𝙵𝚄𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾 𝙳𝙴 𝙻𝙰 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰𝚃𝙾𝚂 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴*\n\n\n*[ ✔ ] THE TEXT/COMMAND ASSIGNED TO THE STICKER/IMAGE WAS ADDED TO THE DATABASE CORRECTLY*`)}
handler.command = ['delcmd']
handler.rowner = true
export default handler
