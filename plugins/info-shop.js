let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `╭「➻❥𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰➻❥」
│➯➻❥ *✳️TIENDA-SHOP✨* ➻❥
│➯ *.minar gana xp* 🧿
│➯ *.minar2 gana Diamantes* 💎
│➯ *.minar3 gana Hades-Coins* 💰
│➯ *.claim reclama tu recompensa diaria exp* 🧿
│➯ *.darxp recompensa diaria exp* 🧿
│➯ *.coffer un cofre de recompensas diarias* ✨
│➯ *puedes comprar diamantes usando los comandos* 💥
│➯ *.bus <cantidad>* 💎
│➯ *.busyall te cobra Hades-Coins* 💰
│➯ *.bur <cantidad>* 🪙
│➯ *.buryall te cobra Tokens* 🪙
│➯ *.buy <cantidad>* 🧿
│➯ *.buyall te cobra experiencia* 🧿
︎╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭「➻❥ *🪙DINERO🪙* ➻❥」
│➯ *para ver todo tu dinero usa el comando*
│➯ *.bal*
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
handler.command = /^(shop|Shop)$/i
handler.register = true
export default handler
