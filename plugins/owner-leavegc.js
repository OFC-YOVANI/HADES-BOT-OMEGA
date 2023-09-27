let handler = async (m, { conn, args, command }) => {
await m.reply('Goodbye everyone, the Bot says goodbye! (≧ω≦)ゞ*') 
await  conn.groupLeave(m.chat)}
handler.command = /^(out|leavegc|leave|salirdelgrupo|salir)$/i
handler.group = true
handler.rowner = true
handler.register = true
export default handler
