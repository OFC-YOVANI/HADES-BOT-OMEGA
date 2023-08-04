//test
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import './config.js';
import './api.js';
import { createRequire } from "module"; 
import path, { join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { platform } from 'process'
import * as ws from 'ws';
import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, rmSync, watch } from 'fs';
import yargs from 'yargs';
import { spawn } from 'child_process';
import lodash from 'lodash';
import chalk from 'chalk';
import syntaxerror from 'syntax-error';
import { tmpdir } from 'os';
import { format } from 'util';
import P from 'pino';
import pino from 'pino';
import { makeWASocket, protoType, serialize } from './lib/simple.js';
import { Low, JSONFile } from 'lowdb';
import { mongoDB, mongoDBV2 } from './lib/mongoDB.js';
import store from './lib/store.js'
const { DisconnectReason, useMultiFileAuthState, MessageRetryMap, fetchLatestBaileysVersion } = await import('@adiwajshing/baileys')
const { CONNECTING } = ws
const { chain } = lodash
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000

protoType()
serialize()

global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }

global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

global.timestamp = { start: new Date }
global.videoList = [];
global.videoListXXX = [];

const __dirname = global.__dirname(import.meta.url)

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.prefix = new RegExp('^[' + (opts['prefix'] || '*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-.@aA').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

global.db = new Low(/https?:\/\//.test(opts['db'] || '') ? new cloudDBAdapter(opts['db']) : new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`))

global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(async function () {
if (!global.db.READ) {
clearInterval(this)
resolve(global.db.data == null ? global.loadDatabase() : global.db.data)
}
}, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read().catch(console.error)
global.db.READ = null
global.db.data = {
users: {},
chats: {},
stats: {},
msgs: {},
sticker: {},
settings: {},
...(global.db.data || {})
}
global.db.chain = chain(global.db.data)
}
loadDatabase()

global.chatgpt = new Low(new JSONFile(path.join(__dirname, "/db/chatgpt.json")));
global.loadChatgptDB = async function loadChatgptDB() {
if (global.chatgpt.READ)
return new Promise((resolve) =>
setInterval(async function () {
if (!global.chatgpt.READ) {
clearInterval(this);
resolve( global.chatgpt.data === null ? global.loadChatgptDB() : global.chatgpt.data );
}}, 1 * 1000));
if (global.chatgpt.data !== null) return;
global.chatgpt.READ = true;
await global.chatgpt.read().catch(console.error);
global.chatgpt.READ = null;
global.chatgpt.data = {
users: {},
...(global.chatgpt.data || {}),
};
global.chatgpt.chain = lodash.chain(global.chatgpt.data);
};
loadChatgptDB();

/*------------------------------------------------*/

global.authFile = `Session-activa`
const { state, saveState, saveCreds } = await useMultiFileAuthState(global.authFile)
const msgRetryCounterMap = MessageRetryMap => { }
let { version } = await fetchLatestBaileysVersion();

const connectionOptions = {
printQRInTerminal: true,
patchMessageBeforeSending: (message) => {
const requiresPatch = !!( message.buttonsMessage || message.templateMessage || message.listMessage );
if (requiresPatch) { message = { viewOnceMessage: { message: { messageContextInfo: { deviceListMetadataVersion: 2, deviceListMetadata: {}, }, ...message, },},};}
return message;},
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id)
return msg.message || undefined }
return { conversation: "hello, i'm OFC-YOVANI" }},   
msgRetryCounterMap,
logger: pino({ level: 'silent' }),
auth: state,
browser: ['HADES-BOT-OMEGA','Safari','1.0.0'],
version,
defaultQueryTimeoutMs: undefined    
}

global.conn = makeWASocket(connectionOptions)
conn.isInit = false

if (!opts['test']) {
if (global.db) setInterval(async () => {
if (global.db.data) await global.db.write()
if (opts['autocleartmp'] && (global.support || {}).find) (tmp = [os.tmpdir(), 'tmp', "jadibts"], tmp.forEach(filename => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete'])))
}, 30 * 1000)}

if (opts['server']) (await import('./server.js')).default(global.conn, PORT)

function clearTmp() {
const tmp = [tmpdir(), join(__dirname, './tmp')]
const filename = []
tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
return filename.map(file => {
    const stats = statSync(file)
    if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3)) return unlinkSync(file) // 3 minutes
    return false })}

function purgeSession() {
    let prekey = []
    let directorio = readdirSync("./Session-activa")
    let filesFolderPreKeys = directorio.filter(file => {
        return file.startsWith('pre-key-')
    })
    prekey = [...prekey, ...filesFolderPreKeys]
    filesFolderPreKeys.forEach(files => {
    unlinkSync(`./Session-activa/${files}`)
})

}  
function purgeSessionSB() {
let listaDirectorios = readdirSync('./jadibts/');
//console.log(listaDirectorios)
      let SBprekey = []
listaDirectorios.forEach(filesInDir => {
    let directorio = readdirSync(`./jadibts/${filesInDir}`)
    //console.log(directorio)
    let DSBPreKeys = directorio.filter(fileInDir => {
    return fileInDir.startsWith('pre-key-')
    })
    SBprekey = [...SBprekey, ...DSBPreKeys]
    DSBPreKeys.forEach(fileInDir => {
        unlinkSync(`./jadibts/${filesInDir}/${fileInDir}`) 
    })
    })
    
}

function purgeOldFiles() {
const directories = ['./Session-activa/', './jadibts/']
const oneHourAgo = Date.now() - (60 * 60 * 1000) 
directories.forEach(dir => {
    readdirSync(dir, (err, files) => {
        if (err) throw err
        files.forEach(file => {
            const filePath = path.join(dir, file)
            stat(filePath, (err, stats) => {
                if (err) throw err;
                if (stats.isFile() && stats.mtimeMs < oneHourAgo && file !== 'creds.json') { 
                    unlinkSync(filePath, err => {  
                        if (err) throw err
                        console.log(`Archivo ${file} borrado con éxito`)
                    })
                } else {  
                    console.log(`Archivo ${file} no borrado`) 
                } 
            }) 
        }) 
    }) 
})
}

async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin } = update
global.stopped = connection    
if (isNewLogin) conn.isInit = true
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (code && code !== DisconnectReason.loggedOut && conn?.ws.readyState !== CONNECTING) {
console.log(await global.reloadHandler(true).catch(console.error))
global.timestamp.connect = new Date
}
if (global.db.data == null) loadDatabase()
if (update.qr != 0 && update.qr != undefined) {
console.log(chalk.yellow('🚩ㅤEscanea este codigo QR, el codigo QR expira en 60 segundos.'))
}
if (connection == 'open') {
console.log(chalk.yellow('▣──────────────────────────────···\n│\n│❧ 𝙲𝙾𝙽𝙴𝙲𝚃𝙰𝙳𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴 𝙰𝙻 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 ✅\n│\n▣──────────────────────────────···'))}
if (connection == 'close') {
console.log(chalk.yellow(`🚩ㅤConexion cerrada, por favor borre la carpeta ${global.authFile} y reescanee el codigo QR`))}
}

process.on('uncaughtException', console.error)

let isInit = true;
let handler = await import('./handler.js')
global.reloadHandler = async function (restatConn) {
try {
const Handler = await import(`./handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler
} catch (e) {
console.error(e)
}
if (restatConn) {
const oldChats = global.conn.chats
try { global.conn.ws.close() } catch { }
conn.ev.removeAllListeners()
global.conn = makeWASocket(connectionOptions, { chats: oldChats })
isInit = true
}
if (!isInit) {
conn.ev.off('messages.upsert', conn.handler)
conn.ev.off('group-participants.update', conn.participantsUpdate)
conn.ev.off('groups.update', conn.groupsUpdate)
conn.ev.off('message.delete', conn.onDelete)
conn.ev.off('call', conn.onCall)
conn.ev.off('connection.update', conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
}
  
conn.welcome = '-------------------------------------------------\n⫷᭄©𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰﹏✍\n│▢๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡ @user\n│▢♦️𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳@\n│▢🤴ᩭ✎𝙽Ú𝙼𝙴𝚁𝙾 𝙳𝙴 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁\n│▢📔ᩭ✎http://wa.me/5212412377467\n│▢📚ᩭ✎𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝚁\n│▢🍀ᩭ✎𝙰𝙼𝙸𝚂𝚃𝙰𝙳𝙴𝚂\n│▢🤝ᩭ✎𝙰𝙼𝙸𝙶𝙾𝚂\n│▢📚ᩭ✎𝙳𝙴𝚂𝙼𝙰𝙳𝚁𝙴\n│▢😇ᩭ✎𝙲𝙾𝚃𝙾𝚁𝚁𝙴𝙾 𝚈 𝙼Á𝚂\n│▢⁉️ᩭ✎𝙰𝚅𝙸𝚂𝙾 𝙸𝙼𝙿𝙾𝚁𝚃𝙰𝙽𝚃𝙴:\n𝙿𝚘𝚛 𝚏𝚊𝚟𝚘𝚛 𝙻𝚎𝚎 𝚕𝚊𝚜 𝚛𝚎𝚐𝚕𝚊𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝚙𝚊𝚛𝚊 𝚚𝚞𝚎 𝚎𝚟𝚒𝚝𝚎𝚜 𝚜𝚎𝚛 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚍𝚘 𝚢 𝚎𝚟𝚒𝚝𝚎𝚜 𝚝𝚎𝚗𝚎𝚛 𝚙𝚛𝚘𝚋𝚕𝚎𝚖𝚊𝚜 𝚌𝚘𝚗 𝚌𝚛𝚎𝚊𝚍𝚘𝚛 𝚍𝚎𝚕 𝚐𝚛𝚞\n@desc\n🌱𝐎𝐅𝐂 𝐘𝐎𝐕𝐀𝐍𝐈\n-------------------------------------------------'
conn.bye = '-------------------------------------------------\n@user\n𝐒𝐚𝐥𝐢ó 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨 𝐧𝐢 𝐦𝐨𝐝𝐨 𝐪𝐮𝐞 𝐭𝐞 𝐯𝐚𝐲𝐚 𝐛𝐢𝐞𝐧 𝐇𝐚𝐬𝐭𝐚 𝐥𝐚 𝐩𝐫ó𝐱𝐢𝐦𝐚 𝐪𝐮𝐞 𝐃𝐢𝐨𝐬 𝐭𝐞 𝐛𝐞𝐧𝐝𝐢𝐠𝐚🌱\n\n *HE LEFT THE GROUP NO WAY THAT YOU GO WELL UNTIL THE NEXT TIME GOD BLESS YOU*\n𝐎𝐅𝐂 𝐘𝐎𝐕𝐀𝐍𝐈☘\n-------------------------------------------------'
conn.spromote = '*@user 𝚂𝙴 𝚂𝚄𝙼𝙰 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝙰𝙳𝙼𝙸𝙽𝚂\n\n*ADMINS GROUP JOINS!!*'
conn.sdemote = '*@user 𝙰𝙱𝙰𝙽𝙳𝙾𝙽𝙰 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝙰𝙳𝙼𝙸𝙽𝚂 !!\n\n*ABANDONED THE ADMIN GROUP*'
conn.sDesc = '*𝚂𝙴 𝙷𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙳𝙾 𝙻𝙰 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾*\n\n *GROUP DESCRIPTION HAS BEEN CHANGED*\n*𝙽𝚄𝙴𝚅𝙰 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* @desc'
conn.sSubject = '*𝚂𝙴 𝙷𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙳𝙾 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾\n\n*THE NAME OF THE GROUP HAS BEEN CHANGED*\n*𝙽𝚄𝙴𝚅𝙾 𝙽𝙾𝙼𝙱𝚁𝙴:* @subject'
conn.sIcon = '*𝚂𝙴 𝙷𝙰 𝙲𝙰𝙼𝙱𝙸𝙰𝙳𝙾 𝙻𝙰 𝙵𝙾𝚃𝙾 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾!!*\n\n\n*GROUP PHOTO HAS BEEN CHANGED*'
conn.sRevoke = '*𝚂𝙴 𝙷𝙰 𝙰𝙲𝚃𝚄𝙰𝙻𝙸𝚉𝙰𝙳𝙾 𝙴𝙻 𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾!!\n\n*THE GROUP LINK HAS BEEN UPDATED*\n*𝙻𝙸𝙽𝙺 𝙽𝚄𝙴𝚅𝙾:* @revoke'

conn.handler = handler.handler.bind(global.conn)
conn.participantsUpdate = handler.participantsUpdate.bind(global.conn)
conn.groupsUpdate = handler.groupsUpdate.bind(global.conn)
conn.onDelete = handler.deleteUpdate.bind(global.conn)
conn.onCall = handler.callUpdate.bind(global.conn)
conn.connectionUpdate = connectionUpdate.bind(global.conn)
conn.credsUpdate = saveCreds.bind(global.conn, true)

const currentDateTime = new Date();
const messageDateTime = new Date(conn.ev);
if (currentDateTime >= messageDateTime) {
    let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
  //console.log(chats, conn.ev); 
} else {
    let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])}
 //console.log(chats, 'Omitiendo mensajes en espera.'); }

conn.ev.on('messages.upsert', conn.handler)
conn.ev.on('group-participants.update', conn.participantsUpdate)
conn.ev.on('groups.update', conn.groupsUpdate)
conn.ev.on('message.delete', conn.onDelete)
conn.ev.on('call', conn.onCall)
conn.ev.on('connection.update', conn.connectionUpdate)
conn.ev.on('creds.update', conn.credsUpdate)
isInit = false
return true
}

/*

const pluginFolder = join(__dirname, './plugins');
const pluginFilter = filename => /\.js$/.test(filename);
global.plugins = {};

async function filesInit(folder) {
  for (let filename of readdirSync(folder).filter(pluginFilter)) {
    try {
      let file = join(folder, filename);
      const module = await import(file);
      global.plugins[file] = module.default || module;
    } catch (e) {
      console.error(e);
      delete global.plugins[filename];
    }
  }

  for (let subfolder of readdirSync(folder)) {
    const subfolderPath = join(folder, subfolder);
    if (statSync(subfolderPath).isDirectory()) {
      await filesInit(subfolderPath);
    }
  }
}

await filesInit(pluginFolder).then(_ => Object.keys(global.plugins)).catch(console.error);

*/

const pluginFolder = global.__dirname(join(__dirname, './plugins/index'))
const pluginFilter = filename => /\.js$/.test(filename)
global.plugins = {}
async function filesInit() {
for (let filename of readdirSync(pluginFolder).filter(pluginFilter)) {
try {
let file = global.__filename(join(pluginFolder, filename))
const module = await import(file)
global.plugins[filename] = module.default || module
} catch (e) {
conn.logger.error(e)
delete global.plugins[filename]
}}}
filesInit().then(_ => Object.keys(global.plugins)).catch(console.error)

global.reload = async (_ev, filename) => {
if (pluginFilter(filename)) {
let dir = global.__filename(join(pluginFolder, filename), true)
if (filename in global.plugins) {
if (existsSync(dir)) conn.logger.info(` updated plugin - '${filename}'`)
else {
conn.logger.warn(`deleted plugin - '${filename}'`)
return delete global.plugins[filename]
}
} else conn.logger.info(`new plugin - '${filename}'`)
let err = syntaxerror(readFileSync(dir), filename, {
sourceType: 'module',
allowAwaitOutsideFunction: true
})
if (err) conn.logger.error(`syntax error while loading '${filename}'\n${format(err)}`)
else try {
const module = (await import(`${global.__filename(dir)}?update=${Date.now()}`))
global.plugins[filename] = module.default || module
} catch (e) {
conn.logger.error(`error require plugin '${filename}\n${format(e)}'`)
} finally {
global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)))
}}}
Object.freeze(global.reload)
watch(pluginFolder, global.reload)
await global.reloadHandler()
async function _quickTest() {
let test = await Promise.all([
spawn('ffmpeg'),
spawn('ffprobe'),
spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
spawn('convert'),
spawn('magick'),
spawn('gm'),
spawn('find', ['--version'])
].map(p => {
return Promise.race([
new Promise(resolve => {
p.on('close', code => {
resolve(code !== 127)
})}),
new Promise(resolve => {
p.on('error', _ => resolve(false))
})])}))
let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
let s = global.support = { ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find }
Object.freeze(global.support)
}
setInterval(async () => {
if (stopped == 'close') return
var a = await clearTmp()        
console.log(chalk.cyanBright(`\n▣───────────[ 𝙰𝚄𝚃𝙾𝙲𝙻𝙴𝙰𝚁TMP ]──────────────···\n│\n▣─❧ 𝙰𝚁𝙲𝙷𝙸𝚅𝙾𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾𝚂 ✅\n│\n▣───────────────────────────────────────···\n`))
}, 180000)
setInterval(async () => {
    await purgeSession()
console.log(chalk.cyanBright(`\n▣────────[ AUTOPURGESESSIONS ]───────────···\n│\n▣─❧ ARCHIVOS ELIMINADOS ✅\n│\n▣────────────────────────────────────···\n`))
}, 1000 * 60 * 60)
setInterval(async () => {
     await purgeSessionSB()
console.log(chalk.cyanBright(`\n▣────────[ AUTO_PURGE_SESSIONS_SUB-BOTS ]───────────···\n│\n▣─❧ ARCHIVOS ELIMINADOS ✅\n│\n▣────────────────────────────────────···\n`))
}, 1000 * 60 * 60)
setInterval(async () => {
    await purgeOldFiles()
console.log(chalk.cyanBright(`\n▣────────[ AUTO_PURGE_OLDFILES ]───────────···\n│\n▣─❧ ARCHIVOS ELIMINADOS ✅\n│\n▣────────────────────────────────────···\n`))
}, 1000 * 60 * 60)
_quickTest()
.then(() => conn.logger.info(`Ƈᴀʀɢᴀɴᴅᴏ．．．\n`))
.catch(console.error)
