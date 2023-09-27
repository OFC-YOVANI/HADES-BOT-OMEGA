let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('[❗] WELCOME MESSAGE SUCCESSFULLY CONFIGURED FOR THIS GROUP')
} else throw `[❗] ENTER THE WELCOME MESSAGE YOU WANT TO ADD TO THIS:*\n*- @user (mention)*\n*- @group (group name)*\n*- @desc (group description)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
handler.register = true
export default handler
