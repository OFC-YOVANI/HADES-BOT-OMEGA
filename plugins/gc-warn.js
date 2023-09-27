let handler = async (m, { conn, text, command, usedPrefix }) => {
  if (m.mentionedJid.includes(conn.user.jid)) return;
  let pp = "./views/warn.jpg.png";
  let who;
  if (m.isGroup)
    who = m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.quoted
      ? m.quoted.sender
      : text;
  else who = m.chat;
  let user = global.db.data.users[who];
  let bot = global.db.data.settings[conn.user.jid] || {};
  let dReason = "Sin motivo";
  let msgtext = text || dReason;
  let sdms = msgtext.replace(/@\d+-?\d* /g, "");
  let warntext = `*[❗] Tag a person or respond to a group message to warn the user*\n\n*—◉ Example++:*\n*${
    usedPrefix + command
  } @${global.suittag}*`;
  if (!who)
    throw m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext) });
  user.warn += 1;
  await m.reply(
    `${
      user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`
    } Received a warning in this group!\nReason: ${sdms}\n*WARRNINGS ${
      user.warn
    }/3*`,
    null,
    { mentions: [who] },
  );
  if (user.warn >= 3) {
    if (!bot.restrict)
      return m.reply(
        "*[❗𝐈𝐍𝐅𝐎❗] The owner does not have the restrictions enabled (#Enable Restrict) Contact the so that it enables it.*",
      );
    user.warn = 0;
    await m.reply(
      `I warned you several times!!\n*@${
        who.split`@`[0]
      }* You exceeded the *3* warnings, now you will be eliminated 👽`,
      null,
      { mentions: [who] },
    );
    await conn.groupParticipantsUpdate(m.chat, [who], "remove");
  }
  return !1;
};

handler.command = /^(advertir|advertencia|warn|warning)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
