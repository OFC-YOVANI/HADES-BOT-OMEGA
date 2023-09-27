let handler = async (m, { conn }) => {	
await conn.fetchBlocklist().then(async data => {
let txt = `≡ LIST OF BANS*\n\n*Total : ${data.length}\n\n┌─⊷\n`
for (let i of data) {
txt += `▢ @${i.split("@")[0]}\n`}
txt += "└───────────"
return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
}).catch(err => {
console.log(err);
throw 'THERE ARE NO NUMBERS BANNED'})}
handler.help = ['blocklist']
handler.tags = ['main']
handler.command = ['blocklist', 'listblock'] 
handler.rowner = true
handler.register = true
export default handler
