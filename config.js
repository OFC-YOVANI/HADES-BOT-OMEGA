import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.owner = [
  ['5219516124971', 'CREADOR', true],
];

global.suittag = ['5212414147874'];
global.prems = ['5212414147874'];

global.packname = '乂✰𝖈𝖍𝖆𝖗𝖑𝖎𝖊-𝖇𝖔𝖙✰乂';
global.author = '©𝓬𝓱𝓪𝓻𝓵𝓲𝒆';
global.vs = '1.10.90';
global.version = vs
global.gt = '乂✰𝖈𝖍𝖆𝖗𝖑𝖎𝖊-𝖇𝖔𝖙✰乂';
global.hadesbot = gt
global.ig = 'https://www.instagram.com/maquinadefuego_gg/';
global.hadesig = ig
global.rg = '*🍀ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ✨*';
global.resultado = rg
global.ag = '*⚠️ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ⚠️*';
global.advertencia = ag
global.iig = '*📌ɪɴғᴏʀᴍᴀᴄɪᴏɴ*✨';
global.informacion = iig
global.fg = '*❌ʟᴏ sᴇɴᴛɪᴍᴏs sᴇ ʜᴀ ɢᴇɴᴇʀᴀᴅᴏ ᴜɴ ᴇʀʀᴏʀ ᴠᴜᴇʟᴠᴇ ɪɴᴛᴇɴᴛᴀʀ❌*';
global.fallo = fg
global.mg = '*❗ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ʟᴏ ʜᴀ ᴜsᴀᴅᴏ ɪɴᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ*';
global.mal = mg
global.eeg = '*📩ˢᵁ ᴿᴱᴾᴼᴿᵀᴱ ᴴᴬ ˢᴵᴰᴼ ᴱᴺⱽᴵᴬᴰᴼ📩*';
global.envio = eeg
global.eg = '*🍀ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ✨*';
global.exito = eg

global.wm = '©𝓬𝓱𝓪𝓻𝓵𝓲𝒆\n乂✰𝖈𝖍𝖆𝖗𝖑𝖎𝖊-𝖇𝖔𝖙✰乂';
global.igfg = '乂✰𝖈𝖍𝖆𝖗𝖑𝖎𝖊-𝖇𝖔𝖙✰乂';
global.wait = '⌛ _Cargando..._\n▰▰▰▱▱▱▱▱▱';

global.imagen1 = fs.readFileSync('./views/Menu.jpg');
global.imagen2 = fs.readFileSync('./views/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./views/Me.jpg');
global.imagen5 = fs.readFileSync('./views/anime.jpg');
global.imagen6 = fs.readFileSync('./views/bot.jpg');

global.mods = [] 

global.multiplier = 65


const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
