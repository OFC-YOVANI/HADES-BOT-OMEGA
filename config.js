import fs from 'fs'
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['5212411719888', '𝙾𝙵𝙲 𝚈𝙾𝚅𝙰𝙽𝙸', true],
  ['5212412377467', '𝙾𝙵𝙲 𝚈𝙾𝚅𝙰𝙽𝙸', true],
]
global.suittag =['5212412477467']
global.mods = []
global.prems = ['5212412474767'], 
global.prems = ['5212412377467'],

global.packname = '⫷᭄©𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰﹏✍'
global.author = '©ᴏғᴄ-ʏᴏᴠᴀɴɪ﹏✍'
global.vs = '1.10.90'
global.version = vs
global.gt = '⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍'
global.hadesbot = gt
global.yt = 'https://youtu.be/aPu9wQi-z8U'
global.youtube = yt
global.ig = 'https://www.instagram'
global.hadesig = ig
global.md = 'https://github.com/OFC-YOVANI/HADES-BOT-OMEGA.git'
global.botxdf = md
global.nn = 'https://chat.whatsapp.com/KlAYxPxLAkSGOyZxeXXZkt'
global.nngrupo = nn
global.nnn = 'https://chat.whatsapp.com/DDm7HC6e5MF9qcdLqB22RQ'
global.nnngrupo = nnn
global.paypal = 'https://pay'
global.donar = paypal
global.rg = '*🍀ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ✨*'
global.resultado = rg
global.ag = '*⚠️ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ⚠️*'
global.advertencia = ag
global.iig = '*📌ɪɴғᴏʀᴍᴀᴄɪᴏɴ*✨'
global.informacion = iig
global.fg = '*❌ʟᴏ sᴇɴᴛɪᴍᴏs sᴇ ʜᴀ ɢᴇɴᴇʀᴀᴅᴏ ᴜɴ ᴇʀʀᴏʀ ᴠᴜᴇʟᴠᴇ ɪɴᴛᴇɴᴛᴀʀ❌*'
global.fallo = fg
global.mg = '*❗ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ʟᴏ ʜᴀ ᴜsᴀᴅᴏ ɪɴᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ*'
global.mal = mg
global.eeg = '*📩ˢᵁ ᴿᴱᴾᴼᴿᵀᴱ ᴴᴬ ˢᴵᴰᴼ ᴱᴺⱽᴵᴬᴰᴼ📩*'
global.envio = eeg
global.eg = '*🍀ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ✨*'
global.exito = eg

global.wm = '©ᴏғᴄ-ʏᴏᴠᴀɴɪ﹏✍\n⫷᭄©𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰﹏✍'
global.igfg = '⫷᭄©𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰﹏✍'
global.wait = '⌛ _Cargando..._\n▰▰▰▱▱▱▱▱▱'

global.imagen1 = fs.readFileSync('./views/Menu.jpg')
global.imagen2 = fs.readFileSync('./views/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./views/Me.jpg')
global.imagen4 = fs.readFileSync('./views/+18.jpg')
global.imagen5 = fs.readFileSync('./views/anime.jpg')
global.imagen6 = fs.readFileSync('./views/bot.jpg')
global.imagen7 = fs.readFileSync('./views/minecraft.jpg')


global.mods = [] 

global.multiplier = 65

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🏆',
      limit: '💎',
      exp: '🕹️'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
