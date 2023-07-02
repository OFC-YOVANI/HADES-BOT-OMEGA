import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m, { conn }) {

let user = global.db.data.users[m.sender]
if (!user.autolevelup) 
  return !0
	
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
 if (before !== user.level) {
m.reply(`╭「➻❥𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰➻❥」\n│➯ 🥳 ғᴇʟɪᴄɪᴅᴀᴅᴇs ʜᴀ sᴜʙɪᴅᴏ ᴅᴇ ɴɪᴠᴇʟ\n│➯🔸ɴɪᴠᴇʟ ᴀɴᴛᴇʀɪᴏʀ: ${before} \n│➯ ⬆️ɴɪᴠᴇʟ ᴀᴄᴛᴜᴀʟ: ${user.level} \n│➯ ⚔️ʀᴀɴɢᴏ: ${user.role} \n│➯ 📅ғᴇᴄʜᴀ: ${new Date().toLocaleString('id-ID')} \n╰───────────────╯`.trim()) 
}}

 
