import fetch from 'node-fetch'
import translate from '@vitalets/google-translate-api'
let handler = async (m, { conn, usedPrefix, command, text }) => {
if (m.isGroup) return
let aki = global.db.data.users[m.sender].akinator
if (text == 'end') {
if (!aki.sesi) return m.reply('*[❗] 𝙲𝚞𝚛𝚛𝚎𝚗𝚝𝚕𝚢 𝚢ou 𝚊𝚛𝚎 𝚗𝚘𝚝 𝚒𝚗 𝚊𝚗 𝙰𝙺𝙸𝙽𝙰𝚃𝙾𝚁 (𝚍𝚎𝚙𝚊𝚛𝚝ure) 𝚜𝚎𝚜𝚜𝚒𝚘𝚗.*')
aki.sesi = false
aki.soal = null
m.reply('*[❗] 𝙰𝚔𝙸𝙽𝙰𝚃𝙾𝚁 𝚜𝚎𝚜𝚜𝚒𝚘𝚗 (𝚍𝚎𝚙𝚊𝚛𝚝𝚞𝚛𝚎) 𝚠𝚊𝚜 𝚜𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢 𝚛𝚎𝚖𝚘𝚟𝚎𝚍.*')
} else {
if (aki.sesi) return conn.reply(m.chat, '*[❗] 𝚈𝚘𝚞 𝚊𝚛𝚎 𝚜𝚝𝚒𝚕𝚕 𝚒𝚗 𝚊𝚗 𝙰𝙺𝙸𝙽𝙰𝚃𝙾𝚁 𝚜𝚎𝚜𝚜𝚒𝚘𝚗 (𝚍𝚎𝚙𝚊𝚛𝚝𝚞𝚛𝚎).*', aki.soal)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/akinator/start?apikey=${lolkeysapi}`)
let anu = await res.json()
if (anu.status !== 200) throw '*[❗] 𝙴𝚛𝚛𝚘𝚛, 𝚝𝚛𝚢 𝚕𝚊𝚝𝚎𝚛*'
let { server, frontaddr, session, signature, question, progression, step } = anu.result
aki.sesi = true
aki.server = server
aki.frontaddr = frontaddr
aki.session = session
aki.signature = signature
aki.question = question
aki.progression = progression
aki.step = step
let resultes2 = await translate(question, { to: 'es', autoCorrect: false })
let txt = `🎮 *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑* 🎮\n\n*𝙿𝚕𝚊𝚢𝚎𝚛: @${m.sender.split('@')[0]}*\n*𝚀𝚞𝚎𝚜𝚝𝚒𝚘𝚗: ${resultes2.text}*\n\n`
txt += '*0 - 𝚈𝚎𝚜*\n'
txt += '*1 - No*\n'
txt += `*2 - 𝙸 𝚍𝚘𝚗'𝚝 𝚔𝚗𝚘𝚠*\n`
txt += '*3 - 𝙿𝚛𝚘𝚋𝚊𝚋𝚕𝚢 𝚢𝚎𝚜*\n'
txt += '*4 - 𝙿𝚛𝚘𝚋𝚊𝚋𝚕𝚢 𝚗𝚘*\n\n'
txt += `*𝚄𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 ${usedPrefix + command} 𝚎𝚗𝚍 𝚃𝚘 𝚎𝚡𝚒𝚝 𝚝𝚑𝚎 𝙰𝙺𝙸𝙽𝙰𝚃𝙾𝚁 𝚜𝚎𝚜𝚜𝚒𝚘𝚗 (𝚍𝚎𝚙𝚊𝚛𝚝𝚞𝚛𝚎)*`
let soal = await conn.sendMessage(m.chat, { text: txt, mentions: [m.sender] }, { quoted: m })
aki.soal = soal
} catch {
m.reply('*[❗] 𝙴𝚛𝚛𝚘𝚛, 𝚝𝚛𝚢 𝚕𝚊𝚝𝚎𝚛*')
}}}
handler.menu = ['akinator']
handler.tags  = ['game']
handler.command = /^(akinator)$/i
handler.register = true
export default handler
