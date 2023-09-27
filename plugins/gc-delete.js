let handler = async (m, { conn, usedPrefix, command }) => {	
if (!m.quoted) throw `[❗]REPLY TO THE MESSAGE YOU WANT TO BE DELETED`
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
handler.premium = true
export default handler
