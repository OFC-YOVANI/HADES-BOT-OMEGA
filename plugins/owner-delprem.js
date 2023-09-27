let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
let user = global.db.data.users[who]
if (!who) throw `[❗] tag a person to remove their premium `
if (!user) throw `[❗] The user is not registered in the database`
if (user.premiumTime = 0) throw '[❗] This user does not have a pass'
let txt = text.replace('@' + who.split`@`[0], '').trim()

user.premiumTime = 0
  
user.premium = false
  
let textdelprem = `[❗] @${who.split`@`[0]} now you are no longer part of premium users `
m.reply(textdelprem, null, { mentions: conn.parseMention(textdelprem) })  
    
}
handler.help = ['delprem <@user>']
handler.tags = ['owner']
handler.command = /^(remove|-|del)prem$/i
handler.group = true
handler.rowner = true
handler.register = true
export default handler
