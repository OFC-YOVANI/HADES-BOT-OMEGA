import fs from 'fs'
import acrcloud from 'acrcloud'
let acr = new acrcloud({
host: 'identify-eu-west-1.acrcloud.com',
access_key: 'c33c767d683f78bd17d4bd4991955d81',
access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
})

let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (/audio|video/.test(mime)) {
let media = await q.download()
let ext = mime.split('/')[1]
fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media)
let res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`))
let { code, msg } = res.status
if (code !== 0) throw msg
let { title, artists, album, genres, release_date } = res.metadata.music[0]
let txt = `----------------------------------------------------------------------------------------------------------
𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰
𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 𝙳𝙴 𝙻𝙰 𝙱𝚄𝚂𝚀𝚄𝙴𝙳𝙰
➯•📌 𝚃𝙸𝚃𝚄𝙻𝙾: ${title}
➯•👨‍🎤 𝙰𝚁𝚃𝙸𝚂𝚃𝙰: ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'No encontrado'}
➯•💾 𝙰𝙻𝙱𝚄𝙼: ${album.name || 'No encontrado'}
➯•🌐 𝙶𝙴𝙽𝙴𝚁𝙾: ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'No encontrado'}
➯•📆 𝙵𝙴𝙲𝙷𝙰 𝙳𝙴 𝙻𝙰𝙽𝚉𝙰𝙼𝙸𝙴𝙽𝚃𝙾: ${release_date || 'No encontrado'}

----------------------------------------------------------------------------------------------------------

𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰
*RESULT FOUND*
➯•📌 *QUALIFICATION*: ${title}
➯•👨‍🎤 *ARTIST*: ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'No encontrado'}
➯•💾 *ALBUM*: ${album.name || 'No encontrado'}
➯•🌐 *GENDER*: ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'No encontrado'}
➯•📆 *RELEASE DATE*: ${release_date || 'No encontrado'}
----------------------------------------------------------------------------------------------------------`.trim()
fs.unlinkSync(`./tmp/${m.sender}.${ext}`)
m.reply(txt)
} else throw '*[❗𝐈𝐍𝐅𝐎❗] RESPONDA A UN AUDIO EJEMPLO MANDE EL AUDIO Y ETIQUÉTALO CON EL COMANDO\N /quemusica*\n\n\n*[❗𝐈𝐍𝐅𝐎❗]RESPOND TO AN AUDIO EXAMPLE SEND THE AUDIO AND LABEL IT WITH THE COMMAND*\n */quemusica*'
}
handler.command = /^quemusica|quemusicaes|whatmusic$/i
handler.register = true
export default handler

 