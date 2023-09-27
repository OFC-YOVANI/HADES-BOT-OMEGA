import axios from 'axios'
let handler = async(m, { conn, args, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/navidad.json`)).data  
let mystic = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, mystic, 'error.jpg', `_${command}_`, m)}
handler.help = ['navidad']
handler.tags = ['internet']
handler.command = /^(navidad)$/i
handler.register = true
handler.premium = true
export default handler
