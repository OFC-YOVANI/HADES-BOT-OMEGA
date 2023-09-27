let handler = async(m, { conn }) => {
let revoke = await conn.groupRevokeInvite(m.chat)
await conn.reply(m.chat, `🔹️ _The group link was successfully restored._\n♾ • New Link: ${'https://chat.whatsapp.com/' + revoke}`, m)}
handler.command = ['resetlink', 'revoke']
handler.botAdmin = true
handler.admin = true
handler.group = true
handler.register = true
export default handler
