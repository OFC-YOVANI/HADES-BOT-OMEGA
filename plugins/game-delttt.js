import MessageType from '@whiskeysockets/baileys'
let handler = async (m, { conn, usedPrefix, command }) => {
let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return conn.sendButton(m.chat, '[❗] you are not in any game in a row you are not in any game in a row', wm, null, [['𝙸𝙽𝙸𝙲𝙸𝙰𝚁 𝚂𝙰𝙻𝙰 𝙳𝙴 𝙹𝚄𝙴𝙶𝙾', `${usedPrefix}ttt partida nueva`]], m)
delete conn.game[room.id]
await m.reply('[ ✔ ] the game in tic-tac-toe was removed')}
handler.command = /^(delttt|deltt|delxo|deltictactoe)$/i
handler.fail = null
handler.register = true
export default handler
