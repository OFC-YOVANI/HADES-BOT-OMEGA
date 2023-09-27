import MessageType from '@whiskeysockets/baileys'

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*ÉXITO!!*`, m)
        global.db.data.users[m.sender].money = Infinity
        global.db.data.users[m.sender].limit = Infinity
        global.db.data.users[m.sender].level = Infinity
        global.db.data.users[m.sender].joincount = Infinity
        
}
handler.help = ['cheat']
handler.tags = ['owner']
handler.command = /^(ilimitado|infiniy|infinito)$/i
handler.rowner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler
