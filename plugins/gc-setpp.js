let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/.test(mime)) {
let img = await q.download()
if (!img) throw '⚠️️ Respond to an image.'
await conn.updateProfilePicture(m.chat, img).then(_ => m.reply('⚘ *_Imagen actualizada con éxito._*\n\n⚘ *_Image updated successfully._*'))
} else throw '⚠️️ Respond to an image.'}
handler.command = /^setpp(group|grup|gc)?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.register = true
export default handler
