const xpperlimit = 50
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.reply(m.chat, `╭「➻❥𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰➻❥」
│🛒 *NOTA DE PAGO* 
│┈┈┈┈┈┈┈┈┈┈┈┈┈
│➯‣ *Compra nominal* : + ${count}💎 
│➯‣ *Gastado* : -${xpperlimit * count} XP
╰───────────────╯`, m)
  } else conn.reply(m.chat, `❎ Lo siento, no tienes suficientes *XP* para comprar *${count}* Diamantes💎`, m)
}
handler.help = ['Buy', 'Buyall']
handler.tags = ['xp']
handler.command = ['buy', 'buyall'] 
handler.register = true
handler.disabled = false

export default handler
