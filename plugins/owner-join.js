let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw '*[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] ERROR VUELVA A INTENTARLO VERIFIQUES QUE SU ENLACE NO ESTÉ VENCIDO UN EJEMPLO\n/join https://chat.whatsapp.com/BgyxmpSY2VYE3MT0UbLAgf*\n\n\n*[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] ERROR TRY AGAIN CHECK THAT YOUR LINK IS NOT EXPIRED AN EXAMPLE\n/join https://chat.whatsapp.com/BgyxmpSY2VYE3MT0UbLAgf'

if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
await m.reply(`*𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝚄𝙽𝙸𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾, 𝙳𝙸𝚂𝙵𝚁𝚄𝚃𝙴 𝙳𝙴𝙻 𝙱𝙾𝚃! ✔️*\n\n\n THE BOT HAS JOINED SUCCESSFULLY ENJOY THE BOT✔️`)
} else {
const data = global.owner.filter(([id]) => id)

for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) await m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝚄𝙴𝚅𝙰 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝚄𝙳 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙿𝙰𝚁𝙰 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾 [❗𝐈𝐍𝐅𝐎❗]*\n\n*—◉ 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝙻 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝙰𝙽𝚃𝙴:* ' + 'wa.me/' + m.sender.split('@')[0] + '\n*—◉ 𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙳𝙾𝙽𝙳𝙴 𝚂𝙴 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝙰 𝙴𝙻 𝙱𝙾𝚃:*\n\n\n*[❗𝐈𝐍𝐅𝐎❗] BOT REQUEST FOR A GROUP [❗𝐈𝐍𝐅O❗]*\n\n*—◉ REQUEST NUMBER:* ' + 'wa.me/' + m.sender.split('@')[ 0] + '\n*—◉ LINK WHERE THE BOT IS REQUESTED*' + link, jid)
await m.reply('*[[❗𝐈𝐍𝐅𝐎❗] SE HA MANDADO LA SOLICITUD AL PROPIETARIO DEL BOT TAMBIÉN PUEDES CONTACTAR A LOS SUBBOTS Y PUEDES PEDIRLES DE LA MANERA MÁS AMABLE QUE SE UNAN A TU GRUPO\n LO ÚNICO QUE LES PEDIMOS ES QUE NO LE HAGAN SPAM Y NO LE HAGAN UN MAL USO AL BOT\n Y NO LO AGREGUEN SIN CONSENTIMIENTO DEL PROPIETARIO PARA NO TENER PROBLEMAS\n GRACIAS POR SU PREFERENCIA😉*\n\n\n*[❗𝐈𝐍𝐅𝐎❗] THE REQUEST HAS BEEN SENT TO THE BOT OWNER YOU CAN ALSO CONTACT THE SUBBOTS AND YOU CAN ASK THEM IN THE KINDEST WAY TO JOIN YOUR GROUP\n THE ONLY THING WE ASK OF THEM IS THAT😉*')}}
handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.command = /^join|nuevogrupo$/i
handler.register = true
handler.limit = 2
export default handler