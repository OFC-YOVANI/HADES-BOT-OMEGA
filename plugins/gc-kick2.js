let handler = async (m, { conn, participants, usedPrefix, command }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ ⚠️ ] The owner does not have the restrictions enabled (#Enable Restrict) Contact the so that it enables it.*'
let kicktext = `*[❗] Tag a person or respond to a group message to delete the user*\n\n*—◉ Example:*\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, { mentions: conn.parseMention(kicktext)}) 
if (m.mentionedJid.includes(conn.user.jid)) return  
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')}
handler.command = /^(kick2|echar2|hechar2|sacar2)$/i
handler.admin = true
handler.group = true
handler.register = true
handler.botAdmin = true
export default handler
