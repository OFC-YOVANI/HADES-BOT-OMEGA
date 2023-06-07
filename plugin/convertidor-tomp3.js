import { toAudio } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰𝙻 𝚅𝙸𝙳𝙴𝙾 𝙾 𝙰𝚄𝙳𝙸𝙾 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙴 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁 𝙰 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉/mp3*\n\n\n*[❗𝐈𝐍𝐅𝐎❗]REPLY TO THE VIDEO OR AUDIO THAT HAS BEEN TURNED INTO A VOICE NOTE/mp3*`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾 𝙻𝙰𝙼𝙴𝙽𝚃𝙾, 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*\n\n\n*[❗𝐈𝐍𝐅𝐎❗]SORRY, AN ERROR OCCURRED DOWNLOADING YOUR VIDEO PLEASE TRY AGAIN*'
if (!media && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾 𝙻𝙰𝙼𝙴𝙽𝚃𝙾, 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝚂𝚄 𝙰𝚄𝙳𝙸𝙾, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*\n\n\n*[❗𝐈𝐍𝐅𝐎❗] IM SORRY AN ERROR OCCURRED DOWNLOADING YOUR AUDIO PLEASE TRY AGAIN*'
let audio = await toAudio(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾 𝙻𝙰𝙼𝙴𝙽𝚃𝙾, 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁 𝚂𝚄 𝙰𝚄𝙳𝙸𝙾 𝙰 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉,/mp3 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*\n\n\n*[❗𝐈𝐍𝐅𝐎❗]SORRY, AN ERROR OCCURRED WHEN CONVERTING YOUR AUDIO/mp3 INTO VOICE NOTE PLEASE TRY AGAIN*'
if (!audio.data && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾 𝙻𝙰𝙼𝙴𝙽𝚃𝙾, 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾 𝙰 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉,/mp3 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*\n\n\n*[❗𝐈𝐍𝐅𝐎❗]ONLY AN ERROR OCCURRED TO CONVERT YOUR AUDIO/mp3 INTO VOICE NOTE TRY AGAIN*'
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3 (reply)']
handler.tags = ['audio']
handler.command = ['tomp3', 'toaudio', 'mp3']
export default handler
