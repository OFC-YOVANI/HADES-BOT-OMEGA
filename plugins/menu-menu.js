import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen2
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
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
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
╭─「➻❥*Grupos*➻❥」
│➯ *.welcome @tag*
│➯ *bye @tag*
│➯ *.promote @tag*
│➯ *.demote @tag*
│➯ *.reac <reaccion del bot>*
│➯ *.infogp <info del grupo>*
│➯ *.infobot <estado del bot>*
│➯ *.grupo abrir/cerrar*
│➯ *.hidetag*
│➯ *.kick*
│➯ *.banchat banea el chat*
│➯ *.unbanchat desbanea el chat*
│➯ *.delete elimina mensajes del bot*
│➯ *.link link de tu grupo*
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「➻❥ *menus* ➻❥」
│➯ *.menu2*
│➯ *.animes*
│➯ *.grupos*
│➯ *.owner*
│➯ *.Menuhetai*
│➯ *.enable*
│➯ *.instalarbot*
│➯ *.comangrupos*
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「➻❥ *Stickers* ➻❥」
│➯ *.cryy*
│➯ *.hugg*
│➯ *.gura*
│➯ *.cat <gatito>*
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「➻❥ *Acciones* ➻❥」
│➯ *.besar <tag>*
│➯ *.abrazar <tag>*
│➯ *.patear <tag>*
│➯ *.follar <tag>*
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭──「➻❥ *Descargas* ➻❥」
│➯ *.wikipedia <busqueda>*
│➯ *.animeinfo <nombre>*
│➯ *.play nombre de tu canción*
│➯ *.play2 nombre de tu video*
│➯ *.play3 nombre de tu canción,doc*
│➯ *.play4 nombre de tu video,doc*
│➯ *.facebook tu link de fb*
│➯ *.tiktok link de video tiktok*
│➯ *.mediafire link de mediafire*
│➯ *.twitter tu link de twt*
│➯ *.ig link de tu video en ig*
│➯ *.google resultados de google*
│➯ *.ytbuscar busqueda en Youtube*
│➯ *.gdrive link de drive*
│➯ *.whatmusic responde a una audio*
│➯ *.calculadora Ejemplo : .calc 2+2*
│➯ *.ia chatgpt*
│➯ *.iaimagen imagenes creadas*
│➯ *.fondo nombre de tu fondo*
│➯ *.ssweb link de tu img*
│➯ *.tts audio google*
│➯ *.queanime resultado*
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「➻❥ *Juegos* ➻❥」
│➯ *.casino <apuesta>*
│➯ *.meme <meme>*
│➯ *.charlie <pregunta>*
│➯ *.love medidor de amor*
│➯ *.gay2 porcentaje*
│➯ *.puta porcentaje*
│➯ *.puto porcentaje*
│➯ *.pajero porcentaje*
│➯ *.pajera porcentaje*
│➯ *.lesbiana porcentaje*
│➯ *.juego piedra/papel/tijera*
│➯ *.simi pregunta simi*
│➯ *.mates dificultades matemáticas*
│➯ *.levelup subir de nivel*
│➯ *.reto reto del bot*
│➯ *.verdad verdad del bot*
│➯ *.formarpareja parejas ramdon*
│➯ *.hornycard licencia horny*
│➯ *.slot ruleta*
│➯ *.minar gana xp*
│➯ *.trabajar trabaja para ganar xp*
│➯ *.piropo piropo del bot*
│➯ *.claim reclama xp*
│➯ *.darxp regala xp*
︎╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「➻❥*Efectos de audio*➻❥」
│➯ *.rapido*
│➯ *.lento*
│➯ *.nightcore*
│➯ *.fuerte*
│➯ *.revertir*
│➯ *.saturar*
│➯ *.robot*
︎╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「➻❥*Otros Comandos*➻❥」
│➯ *.hd <imagen>*
│➯ *.crearmeme*
│➯ *.cuaderno*
│➯ *.topdf*
│➯ *.pubtrump*
│➯ *.emojimix*
│➯ *.ytcomment*
│➯ *.logonavidad*
│➯ *.logocorazon*
│➯ *.filtroanime*
│➯ *.filtrodibujo*
│➯ *.pixelar*
│➯ *.Itssostupid*
│➯ *.difuminar2*
│➯ *.sticker*
│➯ *.wm paquete | nombre*
│➯ *.removebg*
│➯ *.toimg*
│➯ *.tovn*
│➯ *.tomp3*
│➯ *.afk*
│➯ *.tomp4* 
│➯ *.togifaud*
│➯ *.tovideo*
│➯ *.attp3*
│➯ *.ttp*
│➯ *.ttp2*
│➯ *.wpmontaña*
│➯ *.wpgaming*
│➯ *.doraemon*
│➯ *.wpaesthetic*
│➯ *.planeta*
│➯ *.technology*
│➯ *.ciberespacio*
│➯ *.caricatura*
│➯ *.pubg*
│➯ *.wprandom*
│➯ *.ttp3*
│➯ *.ttp5*
│➯ *.styletext* 
︎╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「➻❥ *Logos* ➻❥」
│➯ *.blackpink <texto>*
│➯ *.bloodfrosted <texto>*
│➯ *.bokelog <texto>*
│➯ *.box3d <texto>*
│➯ *.breakwall  <texto>*
│➯ *.cloud <texto>*
│➯ *.deluxesilver <texto>*
│➯ *.futureneon <texto>*
│➯ *.halloween <texto>*
│➯ *.icecold <texto>*
│➯ *.impressiveglitch <texto>*
│➯ *.jokerlogo <texto>*
│➯ *.logolol <texto>*
│➯ *.luxurylog <texto>*
│➯ *.holographic <texto>*
│➯ *.magma <texto>*
│➯ *.metaldark <texto>*
│➯ *.minion <texto>*
│➯ *.natureleaves <texto>*
│➯ *.neon <texto>*
│➯ *.neonlight <texto>*
│➯ *.newyearcard <texto>*
│➯ *.roadwarning <texto>*
│➯ *.sandengraved <texto>*
│➯ *.sandsummer <texto>*
│➯ *.sparkle <texto>*
│➯ *.strawberry <texto>*
│➯ *.text1917 <texto>*
│➯ *.thunder <texto>*
│➯ *.toxic <texto>*
│➯ *.watercolor <texto>*
│➯ *.wonderfulgraffiti <texto>*
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「➻❥ *Jadibot* ➻❥」
│➯ *.serbot*
│➯ *.stop borra tu sesión antigua*
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「➻❥ *Creadores* ➻❥」
│➯ *.boost*
│➯ *.block*
│➯ *.spamgp*
│➯ *.ip*
│➯ *.limpiarbot*
│➯ *.hesoyam*
│➯ *.unblock*
│➯ *.join*
│➯ *.salir*
│➯ *.blocklist*
│➯ *.unblocklist*
│➯ *.setppbot*
│➯ *.robargp*
│➯ *.banuser*
│➯ *.setprefix*
│➯ *.resetprefix*
│➯ *.unbanuser*
│➯ *.del*
╰───────────────╯`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'Darling.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'Darling.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
handler.register = true
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}