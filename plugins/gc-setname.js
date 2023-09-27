import Presence from '@whiskeysockets/baileys'
let handler  = async (m, { conn, args, text }) => {
if (!text) throw `[❗𝐈𝐍𝐅𝐎❗]ENTER THE NAME THAT IS THE NEW NAME OF THE GROUP`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '[❗𝐈𝐍𝐅𝐎❗]SORRY THERE WAS AN ERROR THE NAME CANNOT BE MORE THAN 25 CHARACTERISTICS'
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(setname)$/i
handler.group = true
handler.admin = true
handler.register = true
export default handler
