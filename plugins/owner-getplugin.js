import cp, { exec as _exec } from 'child_process'
import { promisify } from 'util'
import fs from 'fs'
let exec = promisify(_exec).bind(cp)
let handler = async (m, { conn, isROwner, usedPrefix, command, text }) => {
let ar = Object.keys(plugins)
let ar1 = ar.map(v => v.replace('.js', ''))
if (!text) throw `*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝙿𝙻𝚄𝙶𝙸𝙽 (𝙰𝚁𝙲𝙷𝙸𝚅𝙾) 𝙴𝚇𝙸𝚂𝚃𝙴𝙽𝚃𝙴*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾*\n*◉ ${usedPrefix + command}* info-infobot\n\n*—◉ 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙿𝙻𝚄𝙶𝙸𝙽𝚂 (𝙰𝚁𝙲𝙷𝙸𝚅𝙾𝚂) 𝙴𝚇𝙸𝚂𝚃𝙴𝙽𝚃𝙴𝚂:*\n*◉* ${ar1.map(v => ' ' + v).join`\n*◉*`}`
if (!ar1.includes(text)) return m.reply(`*[❗] 𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙾 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝙻𝚄𝙶𝙸𝙽 (𝙰𝚁𝙲𝙷𝙸𝚅𝙾) 𝙻𝙻𝙰𝙼𝙰𝙳𝙾 "${text}", 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙰𝙻𝙶𝚄𝙽𝙾 𝙴𝚇𝙸𝚂𝚃𝙴𝙽𝚃𝙴*\n\n*==================================*\n\n*—◉ 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙿𝙻𝚄𝙶𝙸𝙽𝚂 (𝙰𝚁𝙲𝙷𝙸𝚅𝙾𝚂) 𝙴𝚇𝙸𝚂𝚃𝙴𝙽𝚃𝙴𝚂:*\n*◉* ${ar1.map(v => ' ' + v).join`\n*◉*`}`)
let o
try {
o = await exec('cat plugins/' + text + '.js')
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
if (stdout.trim()) { 
let aa = await conn.sendMessage(m.chat, { text: stdout }, { quoted: m })
await conn.sendMessage(m.chat, { document: fs.readFileSync(`./plugins/${text}.js`), mimetype: 'application/javascript', fileName: `${text}.js`}, { quoted: aa })} 
if (stderr.trim()) { 
let aa2 = await conn.sendMessage(m.chat, { text: stderr }, { quoted: m })
await conn.sendMessage(m.chat, { document: fs.readFileSync(`./plugins/${text}.js`), mimetype: 'application/javascript', fileName: `${text}.js`}, { quoted: aa2 })}}
}
handler.help = ['getplugin'].map(v => v + ' *<nombre>*')
handler.tags = ['owner']
handler.command = /^(getplugin|gp)$/i
handler.rowner = true
handler.register = true
export default handler
