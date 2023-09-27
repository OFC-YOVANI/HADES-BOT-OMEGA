import {Maker} from 'imagemaker.js';
const handler = async (m, {conn, args, command, usedPrefix}) => {
  const response = args.join(' ').split('|');
  if (!args[0]) throw '[❗] enter a text';
  if (command == 'logocorazon') {
    try {
      await conn.reply(m.chat, '[❗] Your design is being generated, wait a moment please', m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/text-heart-flashlight-188.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
      await conn.reply(m.chat, '[❗] an error occurred try again', m);
    }
  }
  if (command == 'logochristmas') {
    try {
      await conn.reply(m.chat, '[❗] Your design is being generated, wait a moment please', m);
      const res2 = await new Maker().Ephoto360('https://en.ephoto360.com/christmas-effect-by-name-376.html', [response[0]]);
      await conn.sendFile(m.chat, res2.imageUrl, 'error.jpg', null, m);
    } catch {
      await conn.reply(m.chat, '[❗]an error occurred try again', m);
    }
  }
};
handler.command = /^logocorazon|logochristmas|logoephoto360|logotextpro/i;
handler.register = true
handler.premium = true
export default handler;
