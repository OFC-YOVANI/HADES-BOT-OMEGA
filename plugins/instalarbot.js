import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
//await m.reply(`╭「➻❥𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰➻❥」\n│➯ *(♦️)*PON EL TEXTO DEL AUDIO QUE QUIERES REPRODUCIR*\n︎╰───────────────╯\n\n\n╭「➻❥𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰➻❥」\n│➯ *(♦️)*PUT THE TEXT OF THE AUDIO YOU WANT TO PLAY*\n︎╰───────────────╯`)
let pp = imagen6
//let vn = './Plugins/Audios/menu.mp3'
let img = await(await fetch('https://i.imgur.com/JP52fdP.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `╭「➻❥𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰➻❥」
│➯ *𝗛ᴏʟᴀ,➟${taguser}
│➯ *ᴏᴡɴᴇʀ:ᴏғᴄ➟ʏᴏᴠᴀɴɪ
│➯ **Número*➟5212412377467
│➯ **canal-YouTube*
│➯ *https://youtube.com/@hades_bot2391
│➯ *ғᴇᴄʜᴀ:➟${date}
│➯ *ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ:➟${uptime}
│➯ *ᴜsᴜᴀʀɪᴏs:➟${rtotalreg}
︎╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭「➻❥ *INFO*➻❥」
│➯ *INSTALACIÓN*
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭「➻❥ *APK-TERMUX* ➻❥」
│➯ https://www.mediafire.com/file/190g4b86nhyof7b/com.termux_118.apk/file?dkey=wfddtbi5jtj98
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭「➻❥Número para ayuda➻❥」
│➯Wa.me/5212412377467
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭「➻❥ *📽️tutorial* ➻❥」
│➯https://youtu.be/AtI8nyBWrZk
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭「➻❥𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇➻❥」
│➯opción 1 estos comandos son para los que no pudieron hacer con los comandos normales estos comandos lo van a instalar solito 
│➯termux-setup-storage
│➯pkg update -y && pkg upgrade -y && pkg install -y bash && pkg install -y wget && pkg install yarn
│➯wget -O - https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-OMEGA/master/install.sh | bash
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭「➻❥𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇➻❥」
│➯*opción 2 de instalación"
│➯cd && termux-setup-storage
│➯apt-get update -y && apt-get upgrade -y
│➯pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn 
│➯git clone https://github.com/OFC-YOVANI/HADES-BOT-OMEGA.git && cd HADES-BOT-OMEGA
│➯yarn 
│➯npm install
│➯npm update
│➯npm start
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭「➻❥ *ACTIVAR* ➻❥」
│➯cd HADES-BOT-OMEGA
│➯npm start
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭「➻❥ *pide otro código* ➻❥」
│➯cd HADES-BOT-OMEGA
│➯rm -rf Session-activa
│➯npm start
╰───────────────╯`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(instalarbot|Lnstalarbot)$/i
handler.exp = 50
handler.register = true
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}