async function handler(m, { usedPrefix }) {
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]  
const message = users.map(v => '▢➯ wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}serbot (${v.name})\n`).join('\n')
const replyMessage = (message.length === 0) ? "*NO HAY SUB BOTS DISPONIBLE. VERIFIQUE MÁS TARDE.*\n\n\n*NO SUB BOTS AVAILABLE. CHECK LATER*" : message
await m.reply( '(💥) AQUÍ TIENES LA LISTA DE SUBBOTS SI QUIERES QUE UNO DE ELLOS ENTRE PUEDES HABLAR CON ELLOS O DIRECTAMENTE TE PUEDES CONVERTIR EN UN BOT USANDO EL COMANDO /SERBOT EN EL NÚMERO OFICIAL DEL BOT*\n\n\n(💥) HERE YOU HAVE THE LIST OF SUBBOTS IF YOU WANT ONE OF THEM TO ENTER YOU CAN TALK TO THEM OR DIRECTLY YOU CAN BECOME A BOT USING THE /SERBOT COMMAND ON THE OFFICIAL NUMBER OF THE BOT*')
await m.reply(replyMessage.trim())}
handler.command = handler.help = ['listjadibot','bots','subsbots']
handler.tags = ['jadibot']
handler.register = true
export default handler