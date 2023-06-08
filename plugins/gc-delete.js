let handler = async (m, { conn, usedPrefix, command }) => {	
if (!m.quoted) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝚀𝚄𝙴 𝚂𝙴𝙰 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾*\n\n\n*[❗𝐈𝐍𝐅𝐎❗]REPLY TO THE MESSAGE YOU WANT TO BE DELETED*`
try {
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
} catch {
return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
}}
handler.help = ['del', 'delete']
handler.tags = ['group']
handler.command = /^del(ete)?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.register = true
export default handler
