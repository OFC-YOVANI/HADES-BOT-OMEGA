let handler = async (m, { conn, isPrems}) => { //lastmiming
let minar2 = `${pickRandom(['ǫᴜᴇ ᴘʀᴏ 😎 ʜᴀs ᴍɪɴᴀᴅᴏ','🌟✨ ɢᴇɴɪᴀʟ!! ᴏʙᴛɪᴇɴᴇs','ᴡᴏᴡ!! ᴇʀᴇs ᴜɴ(ᴀ) ɢʀᴀɴ ᴍɪɴᴇʀᴏ(ᴀ) ⛏️ ᴏʙᴛɪᴇɴᴇs','ғᴇʟɪᴄɪᴅᴀᴅᴇs!! ᴀʜᴏʀᴀ ᴛɪᴇɴᴇs','⛏️⛏️⛏️ ᴏʙᴛɪᴇɴᴇs'])}\n`
let pp = './views/minar.mp4'

let d = Math.floor(Math.random() * 10)
global.db.data.users[m.sender].limit += d * 1  
let time = global.db.data.users[m.sender].lastdiamantes + 600000
if (new Date - global.db.data.users[m.sender].lastdiamantes < 600000) throw `ʏᴀ ʜᴀs ᴍɪʀᴀᴅᴏ ᴅɪᴀᴍᴀɴᴛᴇs ᴇsᴘᴇʀᴀ${msToTime(time - new Date())} ᴘᴀʀᴀ ᴠᴏʟᴠᴇʀ ᴀ ᴍɪɴᴀʀ ⛏️`

m.reply(`*[ 💎 ] 𝙶𝚎𝚗𝚒𝚊𝚕, 𝚖𝚒𝚗𝚊𝚜𝚝𝚎 ${minar2} ${d} 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂*`)
global.db.data.users[m.sender].lastdiamantes = new Date * 1  

}
handler.help = ['minar2']
handler.tags = ['diamantes']
handler.command = ['minar2', 'miming3', 'mine3', 'minardiamantes', 'minargemas', 'minardiamante'] 
handler.fail = null
handler.register = true
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 6) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
