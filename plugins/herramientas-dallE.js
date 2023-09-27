let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗] Enter a text to create an image and thus use the Dall-E function*\n\n*—◉ Examples of requests*\n*◉ ${usedPrefix + command} Kittens crying*\n*◉ ${usedPrefix + command} hatsune miku kiss*`
try {
m.reply('*[❗] Wait for a moment in what the order commanding*')
let tiores = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`)
await conn.sendFile(m.chat, tiores.data, null, null, m)
} catch {
throw `*[❗] Error, please try again*`
}}
handler.command = ['dall-e', 'dalle', 'ia2', 'cimg', 'openai3']
handler.register = true
export default handler
