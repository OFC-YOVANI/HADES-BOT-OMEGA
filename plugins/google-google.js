import {googleIt} from '@bochilteam/scraper';
import axios from 'axios';
const handler = async (m, {conn, command, args}) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const prohibited = ['caca', 'polla', 'porno', 'porn', 'gore', 'cum', 'semen', 'puta', 'puto', 'culo', 'putita', 'putito','pussy', 'hentai', 'pene', 'coño', 'asesinato', 'zoofilia', 'mia khalifa', 'desnudo', 'desnuda', 'cuca', 'chocha', 'muertos', 'pornhub', 'xnxx', 'xvideos', 'teta', 'vagina', 'marsha may', 'misha cross', 'sexmex', 'furry', 'furro', 'furra', 'xxx', 'rule34', 'panocha', 'pedofilia', 'necrofilia', 'pinga', 'horny', 'ass', 'nude', 'popo', 'nsfw', 'femdom', 'futanari', 'erofeet', 'sexo', 'sex', 'yuri', 'ero', 'ecchi', 'blowjob', 'anal', 'ahegao', 'pija', 'verga', 'trasero', 'violation', 'violacion', 'bdsm', 'cachonda', '+18', 'cp', 'mia marin', 'lana rhoades', 'cepesito', 'hot']
if (prohibited.some(word => m.text.toLowerCase().includes(word))) return conn.reply(m.chat, `${ag}`, fkontak, m) 
  const fetch = (await import('node-fetch')).default;
  const text = args.join` `;
  if (!text) return conn.reply(m.chat, `*[❗]enter the name you want to search`, fkontak, m)
  const url = 'https://google.com/search?q=' + encodeURIComponent(text);
  const search = await googleIt(text);
  const msg = search.articles.map(({title, url, description}) => {
    return `*${title}*\n_${url}_\n_${description}_`;
  }).join('\n\n');
  try {
    const ss = `https://image.thum.io/get/fullpage/${url}`;
    await conn.sendFile(m.chat, ss, 'error.png', url + '\n\n' + msg, m);
  } catch {
    m.reply(msg);
  }
};
handler.help = ['google', 'googlef'].map((v) => v + ' <pencarian>');
handler.tags = ['internet'];
handler.command = /^googlef?$/i;
handler.register = true
handler.premium = true
export default handler;