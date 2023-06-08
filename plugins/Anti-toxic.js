const toxicRegex = /puto|puta|rata|estupido|imbecil|rctmre|mrd|verga|vrga|maricon|puto|whore|rat|stupid|idiot|rctmre|mrd|dick|vrga|faggot/i

export async function before(m, { isAdmin, isBotAdmin, isOwner }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup)
        return !1
    let user = global.db.data.users[m.sender]
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isToxic = toxicRegex.exec(m.text)
    
    if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
       user.warn += 1
       if (!(user.warn >= 5)) await m.reply(`${user.warn == 1 ? `Hola *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, decir la palabra (${isToxic}) está prohibido en este bot *${user.warn}/5* advertencia`, false, { mentions: [m.sender] })
       if (!(user.warn >= 5)) await m.reply(`${user.warn == 1 ? `Hello *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, say the word (${isToxic}) is prohibited in this bot *${user.warn}/5* warning`, false, { mentions: [m.sender] })
     }
    
    if (user.warn >= 5) {
       user.warn = 0
       await m.reply(`*ʜᴏʟᴀ*@${m.sender.split`@`[0]},* sᴜᴘᴇʀᴀsᴛᴇ ʟᴀs 5 ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀs sᴇʀᴀs ʙʟᴏǫᴜᴇᴀᴅᴏ ʏ ᴇʟɪᴍɪɴᴀᴅᴏ ᴅᴇ ᴇsᴛᴇ ɢʀᴜᴘᴏ*\n\n\n*HELLO*@${m.sender.split`@`[0]},*YOU EXCEEDED THE 5 WARNINGS YOU WILL BE BLOCKED AND REMOVED FROM THIS GROUP*`, false, { mentions: [m.sender] })
       user.banned = true
       await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
       //await this.updateBlockStatus(m.sender, 'block')
    }
    return !1
}
