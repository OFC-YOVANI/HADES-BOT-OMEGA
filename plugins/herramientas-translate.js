import translate from '@vitalets/google-translate-api'
import fetch from 'node-fetch'
let handler = async (m, { args, usedPrefix, command }) => {
let msg = `[❗] a command checker ${usedPrefix + command} language text an example\n${usedPrefix + command}is Hello \n\n knows the languages ​​to different\n- https://cloud.google.com/translate/docs/languages*`
if (!args || !args[0]) return m.reply(msg)  
let lang = args[0]
let text = args.slice(1).join(' ')
const defaultLang = 'es'
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
try {      
let result = await translate(`${text}`, { to: lang, autoCorrect: true })
await m.reply('Translation ' + result.text)
} catch {
try {    
let lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${lolkeysapi}&text=${text}`)
let loll = await lol.json()
let result2 = loll.result.translated
await m.reply('Translation ' + result2)
} catch { 
await m.reply('[❗] an error occurred huelva try it')    
}}}
handler.command = /^(translate|traducir|trad)$/i
handler.register = true
handler.premium = true
export default handler
