let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('*│‼️│ 🗝️𝚎𝚜𝚝𝚎 𝚌𝚑𝚊𝚝 𝚋𝚊𝚗𝚎𝚊𝚍𝚘 𝚎𝚡𝚒𝚝𝚘𝚜𝚊𝚖𝚎𝚗𝚝𝚎🗝️*\n\n\n*│‼️│THIS CHAT WAS SUCCESSFULLY BANNED🗝*')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.register = true
handler.rowner = true
export default handler
