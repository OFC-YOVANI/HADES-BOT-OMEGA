export async function all(m, conn) {
let texto
let user = global.db.data.users[m.sender]  
if (!m.message)
return
if (!user.antispam)
return !0
if (+new Date() > user.antispam) {
let tiempo = 60000 * 1
setTimeout(() => {
user.banned = false
texto = `[❗] @${m.sender.split("@")[0]} ᴇsᴛᴀʙᴀ ʙᴀɴᴇᴀᴅᴏ ᴛᴇᴍᴘᴏʀᴀʟᴍᴇɴᴛᴇ\nᴇsᴘᴇʀᴀ ᴛᴜ ᴅᴇsʙᴀɴᴇᴏ ᴅᴜʀᴀɴᴛᴇ ${tiempo / 1000 - 59} ᴍɪɴᴜᴛᴏs, ʏᴀ ɴᴏ ʜᴀɢᴀs sᴘᴀᴍ ᴘᴀʀᴀ ᴇᴠɪᴛᴀʀ ɴᴜᴇᴠᴀᴍᴇɴᴛᴇ sᴇʀ ʙᴀɴᴇᴀᴅᴏ`
conn.reply(m.chat, texto, m, { mentions: this.parseMention(texto) })}, 
tiempo) 
//this.sendButton(m.chat, texto, wm, null, [['☘️ᴍᴇɴᴜ📌', '/menu']], m, { mentions: this.parseMention(texto) })}, tiempo)       
user.antispam = null
}}
 
