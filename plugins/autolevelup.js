import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m, { conn }) {

let user = global.db.data.users[m.sender]
if (!user.autolevelup) 
  return !0
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }	
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
 if (before !== user.level) {
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
m.reply(`╭「➻❥𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰➻❥」\n│➯ *𝗛ᴏʟᴀ,➟${taguser} \n│➯ 🥳 ғᴇʟɪᴄɪᴅᴀᴅᴇs ʜᴀ sᴜʙɪᴅᴏ ᴅᴇ ɴɪᴠᴇʟ\n│➯🔸ɴɪᴠᴇʟ ᴀɴᴛᴇʀɪᴏʀ: ${before} \n│➯ ⬆️ɴɪᴠᴇʟ ᴀᴄᴛᴜᴀʟ: ${user.level} \n│➯ ⚔️ʀᴀɴɢᴏ: ${user.role} \n│➯ 📅ғᴇᴄʜᴀ: ${new Date().toLocaleString('id-ID')} \n╰───────────────╯`.trim()) 
}}

 
