let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `╭「➻❥𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰➻❥」
│➯➻❥ *✳️TIENDA-SHOP✨* ➻❥
│➯ *.bus <cantidad>* 💎
│➯ *.busyall te cobra Hades-Coins* 💰
│➯ *.bur <cantidad>* 🪙
│➯ *.buryall te cobra Tokens* 🪙
│➯ *.buy <cantidad>* 🧿
│➯ *.buyall te cobra experiencia* 🧿
│➯ *.dolares te cobra diamantes*
︎╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭「➻❥𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰➻❥」
│➯➻❥ *✳️TIENDA-ᴘʀᴇᴍɪᴜᴍ✨* ➻❥
│➯ ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓵ᴘᴀss»⓵» /prem1 1✪»ᴘᴀsᴇ»ʙásɪᴄᴏ»ᴘᴀss»✪
15  *dolares💵* ➟*5>Horas* ᴘʀᴇᴍɪᴜᴍ
│➯ 🌀ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓶ᴘᴀss»⓶» /prem2 
  1✪»ᴘᴀsᴇ»ᴛᴏʀʀᴇ ᴅᴇ ᴇɴᴄᴜᴇɴᴛʀᴏ»ᴘᴀss»✪
25 *dolares💵* ➟*15Horas* ᴘʀᴇᴍɪᴜᴍ
│➯ ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓷ᴘᴀss»⓷» /prem3 
  1 ✪»ᴘᴀsᴇ»ᴠᴇʀᴅᴜᴢᴄᴏ»ᴘᴀss»✪
35 *dolares💵* *➟Días1➟6Horas* ᴘʀᴇᴍɪᴜᴍ
│➯ ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓸ᴘᴀss»⓸» /prem4 
  1✪»ᴘᴀsᴇ»ʀᴇsɪᴅᴜᴏs ᴄᴀᴢᴀ»ᴘᴀss»✪
50 *dolares💵* *➟Días2➟1Horas* ᴘʀᴇᴍɪᴜᴍ
│➯ ᴘʀᴇᴍɪᴜᴍ️»ᴄʟᴀsᴇ»⓹ᴘᴀss»⓹» /prem5 
  1✪»ᴘᴀsᴇ»ʙʀɪʟʟᴀɴᴛᴇ»ᴘᴀss»✪
60 *dolares💵* *➟Días3➟18Horas* ᴘʀᴇᴍɪᴜᴍ\n
│➯ ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓺ᴘᴀss»⓺» /prem6 
  1✪»ᴘᴀsᴇ»ᴀᴍᴏ ᴅᴇʟ ᴄʀɪᴘᴛᴏ»ᴘᴀss»✪
70 *dolares💵* *➟Días5➟10Horas* ᴘʀᴇᴍɪᴜᴍ\n
│➯ +ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓻ᴘᴀss»⓻» /prem7 
  1✪»ᴘᴀsᴇ»ɢᴀᴍᴀ ᴘʟᴜs»ᴘᴀss»✪
80 *dolares💵* *➟Díasd7➟12Horas* ᴘʀᴇᴍɪᴜᴍ
│➯ ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓼ᴘᴀss»⓼» /prem8 
 1✪»ᴘᴀsᴇ»ᴛɪᴇᴍᴘᴏ ᴅᴇ ᴏʀᴏ»ᴘᴀss»✪
100 *dolares💵* *➟Días10➟10Horas* ᴘʀᴇᴍɪᴜᴍ
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭「➻❥ *🪙DINERO🪙* ➻❥」
│➯ *para ver todo tu dinero usa el comando*
│➯ *.bal*
│➯ *.dinero*
︎╰───────────────╯`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/OFC-YOVANI/HADES-BOT-OMEGA` },
'mimetype': `application/${document}`,
'fileName': `⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/OFC-YOVANI/HADES-BOT-OMEGA',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtu.be/4eA5nDxPjOA' }},
'caption': text,
'footer': wm,
//'buttons':[
//{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
//{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(shop|Shop|sell|Sell)$/i
handler.register = true
export default handler
