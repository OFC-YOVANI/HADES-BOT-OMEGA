let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
m.reply('[❗]GOODBYE MESSAGE CONFIGURED CORRECTLY FOR THIS GROUP ')
} else throw `[❗]ENTER THE FAREWELL MESSAGE YOU WANT TO ADD USE: \n- @user (mención)`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['setbye'] 
handler.admin = true
handler.register = true
export default handler
