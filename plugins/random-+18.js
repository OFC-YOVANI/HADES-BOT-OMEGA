import axios from "axios"
import fetch from 'node-fetch'
let handler = async (m, {command, conn}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny*'

if (command == 'nsfwloli') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/nsfwloli.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
conn.sendMessage(m.chat, { image: { url: haha }, caption: `_${command}_`.trim() }, { quoted: m })}

if (command == 'nsfwfoot') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/nsfwfoot.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
conn.sendMessage(m.chat, { image: { url: haha }, caption: `_${command}_`.trim() }, { quoted: m })}

if (command == 'nsfwass') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/nsfwass.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]      
conn.sendMessage(m.chat, { image: { url: haha }, caption: `_${command}_`.trim() }, { quoted: m })}

if (command == 'nsfwbdsm') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/nsfwbdsm.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
conn.sendMessage(m.chat, { image: { url: haha }, caption: `_${command}_`.trim() }, { quoted: m })}

if (command == 'nsfwcum') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/nsfwcum.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
conn.sendMessage(m.chat, { image: { url: haha }, caption: `_${command}_`.trim() }, { quoted: m })}

if (command == 'nsfwero') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/nsfwero.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]     
conn.sendMessage(m.chat, { image: { url: haha }, caption: `_${command}_`.trim() }, { quoted: m })}

if (command == 'nsfwfemdom') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/nsfwfemdom.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
conn.sendMessage(m.chat, { image: { url: haha }, caption: `_${command}_`.trim() }, { quoted: m })} 

if (command == 'nsfwglass') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/nsfwglass.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
conn.sendMessage(m.chat, { image: { url: haha }, caption: `_${command}_`.trim() }, { quoted: m })}

if (command == 'hentai') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/hentai.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
conn.sendMessage(m.chat, { image: { url: haha }, caption: `_${command}_`.trim() }, { quoted: m })}

if (command == 'nsfworgy') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/nsfworgy.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
conn.sendMessage(m.chat, { image: { url: haha }, caption: `_${command}_`.trim() }, { quoted: m })}

if (command == 'tetas') {
let resError = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/tetas.json`)).data   
let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/boobs?apikey=fg-dylux`).data
if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())]  
conn.sendMessage(m.chat, { image: { url: res }, caption: `_${command}_`.trim() }, { quoted: m })}

if (command == 'booty') {
let resError = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/booty.json`)).data   
let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/ass?apikey=fg-dylux`).data
if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())]  
conn.sendMessage(m.chat, { image: { url: res }, caption: `_${command}_`.trim() }, { quoted: m })}

if (command == 'ecchi') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/ecchi.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendMessage(m.chat, { image: { url: url }, caption: `_${command}_`.trim() }, { quoted: m })}

if (command == 'furro') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/furro.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendMessage(m.chat, { image: { url: url }, caption: `_${command}_`.trim() }, { quoted: m })}

if (command == 'trapito') {
let res = await fetch(`https://api.waifu.pics/nsfw/trap`)
let json = await res.json()
let url = json.url
conn.sendMessage(m.chat, { image: { url: url }, caption: `_${command}_`.trim() }, { quoted: m })}

if (command == 'imagenlesbians') {
let resError = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/imagenlesbians.json`)).data   
let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/lesbian?apikey=fg-dylux`).data
if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())]  
conn.sendMessage(m.chat, { image: { url: res }, caption: `_${command}_`.trim() }, { quoted: m })}  

if (command == 'panties') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/panties.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendMessage(m.chat, { image: { url: url }, caption: `_${command}_`.trim() }, { quoted: m })}

if (command == 'pene') {
let resError = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/pene.json`)).data   
let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/penis?apikey=fg-dylux`).data
if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())]  
conn.sendMessage(m.chat, { image: { url: res }, caption: `_${command}_`.trim() }, { quoted: m })}
  
if (command == 'porno') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/porno.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendMessage(m.chat, { image: { url: url }, caption: `_${command}_`.trim() }, { quoted: m })}

if (command == 'randomxxx') {
let rawjsonn = ['https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/tetas.json', 'https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/booty.json', 'https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/imagenlesbians.json', 'https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/panties.json', 'https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/porno.json'] 
let rawjson = await rawjsonn[Math.floor(rawjsonn.length * Math.random())]  
let res = (await axios.get(rawjson)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendMessage(m.chat, { image: { url: url }, caption: `_${command}_`.trim() }, { quoted: m })}

if (command == 'pechos') {
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/pechos.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendMessage(m.chat, { image: { url: url }, caption: `_${command}_`.trim() }, { quoted: m })}

if (command == 'yaoi') {
let res = await fetch(`https://nekobot.xyz/api/image?type=yaoi`)
let json = await res.json()
let url = json.message
conn.sendMessage(m.chat, { image: { url: url }, caption: `_${command}_`.trim() }, { quoted: m })}

if (command == 'yaoi2') {
let res = await fetch(`https://purrbot.site/api/img/nsfw/yaoi/gif`)
let json = await res.json()
let url = json.link
conn.sendMessage(m.chat, { image: { url: url }, caption: `_${command}_`.trim() }, { quoted: m })}

if (command == 'yuri') { 
let res = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/yuri.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]  
conn.sendMessage(m.chat, { image: { url: url }, caption: `_${command}_`.trim() }, { quoted: m })}

if (command == 'yuri2') {
let resError = (await axios.get(`https://raw.githubusercontent.com/OFC-YOVANI/HADES-BOT-MD/master/src/hades/yuri.json`)).data   
let res = await fetch(`https://purrbot.site/api/img/nsfw/yuri/gif`)
let json = await res.json()
let url = json.link
if (url == '' || !url || url == null) url = await resError[Math.floor(resError.length * Math.random())]
conn.sendMessage(m.chat, { image: { url: url }, caption: `_${command}_`.trim() }, { quoted: m })}  
  
}
handler.help = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglss', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos']
handler.command = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglss', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos']
handler.tags = ['nsfw']
handler.register = true
handler.limit = 2
export default handler
