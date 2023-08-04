import {googleIt} from '@bochilteam/scraper';
import axios from 'axios';
const handler = async (m, {conn, command, args}) => {
  const fetch = (await import('node-fetch')).default;
  const text = args.join` `;
  if (!text) return conn.reply(m.chat, '*[❗]ɪɴɢʀᴇsᴀ ᴇʟ ɴᴏᴍʙʀᴇ ǫᴜᴇ ǫᴜɪᴇʀᴇs ʙᴜsᴄᴀʀ*', m);
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
handler.limit = 2
export default handler;