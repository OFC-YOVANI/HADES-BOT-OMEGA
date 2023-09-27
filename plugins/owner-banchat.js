let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('│‼️│THIS CHAT WAS SUCCESSFULLY BANNED🗝')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.register = true
handler.rowner = true
export default handler
