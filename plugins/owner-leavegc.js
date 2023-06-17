let handler = async (m, { conn, args, command }) => {
await m.reply('*Adios a todos, el Bot se despide! (≧ω≦)ゞ\n\n Goodbye everyone, the Bot says goodbye! (≧ω≦)ゞ*') 
await  conn.groupLeave(m.chat)}
handler.command = /^(out|leavegc|leave|salirdelgrupo)$/i
handler.group = true
handler.rowner = true
handler.register = true
export default handler
