let ru = 40
let handler = async (m, { conn, usedPrefix, command}) => {
let time = global.db.data.users[m.sender].lastrobar + 7200000
if (new Date - global.db.data.users[m.sender].lastrobar < 7200000) throw `*⏱️¡Hey! Espera ${msToTime(time - new Date())} para volver a robar*`
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
if (!who) throw `*[❗] Etiqueta a alguien para robar.*`
if (!(who in global.db.data.users)) throw `*[❗] El usuario no se encuentra en mi base de datos.*`
let users = global.db.data.users[who]
let robar = Math.floor(Math.random() * ru)
if (users.limit < robar) return m.reply(`😔 @${who.split`@`[0]} tiene menos de *${ru} *💎DIAMANTES*\nNo robes a un pobre v":`, null, { mentions: [who] })    
global.db.data.users[m.sender].limit += robar
global.db.data.users[who].limit -= robar
m.reply(`*‣ Robaste ${robar} *💎DIAMANTES* a @${who.split`@`[0]}*`, null, { mentions: [who] })
global.db.data.users[m.sender].lastrob = new Date * 1
}
handler.help = ['robar']
handler.tags = ['econ']
handler.command = ['robardiamantes', 'robdiaman']
handler.register = true
export default handler  
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}
