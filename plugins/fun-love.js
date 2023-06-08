let handler = async (m, { conn, command, text }) => {
let love = `*❤️❤️ MEDIDOR DE AMOR ❤️❤️*
*El amor de ${text} por ti es de* *${Math.floor(Math.random() * 100)}%* *de un 100%*
*Deberias pedirle que sea tu  novia/o ?*



*❤️❤️ LOVE METER ❤️❤️*
*${text}'s love for you is* *${Math.floor(Math.random() * 100)}%* *100%*
*Should you ask her to be your girlfriend?*`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(love)$/i
handler.register = true
export default handler
