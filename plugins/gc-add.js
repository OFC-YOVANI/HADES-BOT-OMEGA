let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = (await import('@whiskeysockets/baileys')).default
import fetch from 'node-fetch'
const { getBinaryNodeChild, getBinaryNodeChildren } = (await import('@whiskeysockets/baileys')).default
let handler = async (m, { conn, text, participants, args }) => {  
if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ ⚠️ ] The owner does not have the restrictions enabled (#Enable Restrict) Contact the so that it enables it.*'
if (!args[0]) throw '*[❗] Enter the user number you want to add*'    
try {    
let _participants = participants.map(user => user.id)
let users = (await Promise.all(
text.split(',')
.map(v => v.replace(/[^0-9]/g, ''))
.filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
.map(async v => [v, await conn.onWhatsApp(v + '@s.whatsapp.net')]))).filter(v => v[1][0]?.exists).map(v => v[0] + '@c.us')
const response = await conn.query({ tag: 'iq', attrs: { type: 'set', xmlns: 'w:g2', to: m.chat }, content: users.map(jid => ({ tag: 'add', attrs: {}, content: [{ tag: 'participant', attrs: { jid } }]}))})
const pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
const jpegThumbnail = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
const add = getBinaryNodeChild(response, 'add')
const participant = getBinaryNodeChildren(add, 'participant')
for (const user of participant.filter(item => item.attrs.error == 403)) {
const jid = user.attrs.jid
const content = getBinaryNodeChild(user, 'add_request')
const invite_code = content.attrs.code
const invite_code_exp = content.attrs.expiration
let teks = `[?] It was not possible to add @${jid.split('@')[0]}, This can happen because the number is incorrect, the person has recently left the group or the person has set his/her privacy in groups, the group invitation in his/her privacy has been sent to the user*`
m.reply(teks, null, { mentions: conn.parseMention(teks)})
let captionn = `Hey!! Hi, I introduce myself, I'm Hades-Bot-md, and I am a Bot for Whatsapp, a group of the group use the command to add to the group, but I could not add you, so I'll send you the invitation so that you add you, we wait you!!`    
var messaa = await prepareWAMessageMedia({ image: jpegThumbnail }, { upload: conn.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ groupInviteMessage: { groupJid: m.chat, inviteCode: invite_code, inviteExpiration: invite_code_exp, groupName: await conn.getName(m.chat), caption: captionn, jpegThumbnail: jpegThumbnail }}), { userJid: jid })
await conn.relayMessage(jid, groupInvite.message, { messageId: groupInvite.key.id })}
} catch {
throw '*[??] It was not possible to add to the number entered, this can happen because the number is incorrect, the person has recently left the group or has set the group privacy. We advise you to send the invitation manually!!*'
}}
handler.help = ['add', '+'].map(v => v + ' número')
handler.tags = ['group']
handler.command = /^(add|agregar|añadir|\+)$/i
handler.admin = handler.group = handler.botAdmin = true
handler.register = true
export default handler
