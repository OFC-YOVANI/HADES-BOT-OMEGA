import Presence from '@adiwajshing/baileys'
let handler  = async (m, { conn, args, text }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝚀𝚄𝙴 𝚂𝙴𝙰 𝙴𝙻 𝙽𝚄𝙴𝚅𝙾 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾*\n\n\n*[❗𝐈𝐍𝐅𝐎❗]ENTER THE NAME THAT IS THE NEW NAME OF THE GROUP*`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾 𝙷𝚄𝙱𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁, 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝙼𝙰𝚂 𝙳𝙴 𝟸𝟻 𝙲𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝙴𝚂*\n\n\n*[❗𝐈𝐍𝐅𝐎❗]SORRY THERE WAS AN ERROR THE NAME CANNOT BE MORE THAN 25 CHARACTERISTICS*'
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(setname)$/i
handler.group = true
handler.admin = true
handler.register = true
export default handler
