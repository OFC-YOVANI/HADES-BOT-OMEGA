let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `╭「➻❥𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰➻❥」
│➯➻❥ *✳️TIENDA-SHOP✨* ➻❥
│➯ *.busyall te cobra Hades-Coins* 💰
│➯ *.bus <cantidad>* 💎
│➯ *.buyall te cobra experiencia* 🧿
│➯ *.buy <cantidad>* 🧿
│➯ *.dolares te cobra diamantes*
︎╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭「➻❥𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰➻❥」
│➯➻❥ *✳️TIENDA-ᴘʀᴇᴍɪᴜᴍ✨* ➻❥
│➯ ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓵ᴘᴀss»⓵» /prem1 15 *dolares💵* 
│➯ 🌀ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓶ᴘᴀss»⓶» /prem2 25 *dolares💵*
│➯ ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓷ᴘᴀss»⓷» /prem3 35 *dolares💵* *
│➯ ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓸ᴘᴀss»⓸» /prem4 50 *dolares💵*
│➯ ᴘʀᴇᴍɪᴜᴍ️»ᴄʟᴀsᴇ»⓹ᴘᴀss»⓹» /prem5 60 *dolares💵*
│➯ ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓺ᴘᴀss»⓺» /prem6 70 *dolares💵* 
│➯ ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓻ᴘᴀss»⓻» /prem7 80 *dolares💵*
│➯ ᴘʀᴇᴍɪᴜᴍ»ᴄʟᴀsᴇ»⓼ᴘᴀss»⓼» /prem8 100 *dolares💵*
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭「➻❥ *🪙DINERO🪙* ➻❥」
│➯ *para ver todo tu dinero usa el comando*
│➯ *.bal*
│➯ *.dinero*
│➯ *Para ver tu tiempo de premium*
│➯ *.listprem*
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
