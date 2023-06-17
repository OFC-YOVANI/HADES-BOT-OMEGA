import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙳𝙴 𝚄𝚂𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix + command} Minecraft*\n\n\n*[❗𝐈𝐍𝐅𝐎❗]EXAMPLE USE THE COMMAND  ${usedPrefix + command} Minecraft*`
const json = await pinterest(text)
conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
*𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 𝙳𝙴 𝙻𝙰 𝙱𝚄𝚂𝚀𝚄𝙴𝙳𝙰*
${text}


*SEARCH RESULT*
${text}`.trim(), m)
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest)$/i
handler.register = true
handler.limit = 2
export default handler
