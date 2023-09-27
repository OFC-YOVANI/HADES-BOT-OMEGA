const handler = async (m, {conn, isAdmin}) => {
  if (m.fromMe) return;
  if (isAdmin) throw '[❗] Hello, how are you, time you have smoked part of the adminis';
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  } catch {
    await m.reply('[❗] error no fue posible dar administr');
  }
};
handler.command = /^autoadmin$/i;
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
