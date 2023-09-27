import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
const delay = time => new Promise(res => setTimeout(res, time))
let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
if(!text) throw '[❗] enter the text you want to communicate '
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let i of chats) {
await delay(500)
conn.relayMessage(i, 
{ liveLocationMessage: {
  degreesLatitude: 35.685506276233525,
  degreesLongitude: 139.75270667105852,
  accuracyInMeters: 0,
degreesClockwiseFromMagneticNorth: 2,
caption: '[❗communicator❗]\n\n' + teks + '\n\n This is an official statement',
sequenceNumber: 2,
timeOffset: 3,
contextInfo: m,
}}, {}).catch(_ => _)
    }
m.reply(`[❗] messages sent to ${chats.length} private chat\n\n Note, it may not be sent to all chats. If it is not sent, it may be because it has an error.`)
}
handler.help = ['broadcastchats', 'bcchats'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastchats?|bcc(hats?)?)$/i
handler.rowner = true
handler.register = true
export default handler