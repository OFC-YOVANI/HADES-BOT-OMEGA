const xpperlimit = 1
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].joincount / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(5, count)
  if (global.db.data.users[m.sender].joincount >= xpperlimit * count) {
    global.db.data.users[m.sender].joincount -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.reply(m.chat, `╭「➻❥𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰➻❥」
│🛒 *NOTA DE PAGO* 
│┈┈┈┈┈┈┈┈┈┈┈┈┈
│➯‣ *Compra nominal* : + ${count}💎 
│➯‣ *Gastado* : -${xpperlimit * count} Tokens🪙*
╰───────────────╯`, m)
  } else conn.reply(m.chat, `❎ Lo siento, no tienes suficientes *Tokens🪙* para comprar *${count}* Diamantes💎`, m)
}
handler.help = ['bur', 'buryall']
handler.tags = ['joincount']
handler.command = ['bur', 'buryall'] 
handler.register = true
handler.disabled = false

export default handler
