const handler = async (m, {conn, isPrems}) => {
  let enviando;
  if (enviando) return
  enviando = true
  const hasil = Math.floor(Math.random() * 5000);
  const time = global.db.data.users[m.sender].lastwork + 600000;
  if (new Date - global.db.data.users[m.sender].lastwork < 600000) throw `⚔️You have done a good job⚔️\n\n come back later to continue working come back later to continue working ${msToTime(time - new Date())} ⏳*`;
  conn.sendMessage(m.chat, {text: `🏞️ you joined a great adventure\n\n🛠️ *${pickRandom(global.work)}\n\n¡ congratulations you have won ${hasil} experience for your adventure`}, {quoted: m});
  global.db.data.users[m.sender].exp += hasil;
  global.db.data.users[m.sender].lastwork = new Date() * 1;
  enviando = false
};
handler.help = ['work'];
handler.tags = ['xp'];
handler.command = /^(work|trabajar|chambear)$/i
handler.fail = null;
handler.register = true
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return minutes + ' minutos ' + seconds + ' segundos ';
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.work = [
'You are a master alchemist, distilling mysterious potions in search of lost secrets.', 'You become an intrepid treasure hunter, exploring forgotten places in search of hidden riches.', 'You run a metal transmutation business, turning the common into valuable treasures.', 'You explore ancient ruins and find a valuable relic that grants you ancient knowledge.', 'You work as a mercenary in an epic war, facing challenges with your skill and courage.', 'You are a paranormal investigator, discovering the hidden secrets of the spiritual world.', 'You train dragons for races, forming bonds with these majestic winged creatures.', 'You become the best blacksmith in town, forging legendary weapons and powerful artifacts.', 'You discover an enchanted forest full of magical creatures, establishing a unique connection with nature.', 'You are a tamer of ferocious beasts, controlling the wildest creatures with your animal mastery.', 'You travel in time and solve historical problems, influencing the fate of past civilizations.', 'You are a royal advisor, providing wisdom and advice to rulers and leaders.', 'You develop futuristic technology, driving innovation and changing the course of the world.', 'You are a master in the art of persuasion, convincing others with your eloquence and cunning.', 'You pilot a giant mecha in epic battles, defending the land with your war machine prowess.',   'Diriges una granja de dragones, cuidando de estas majestuosas criaturas y criando dragones únicos.', 'You are an international spy, infiltrating secret organizations and unmasking dark plots.', 'You explore space and make amazing discoveries that give you a unique view of the universe.', 'You are a renowned magician, performing impressive tricks and casting magical spells.', 'You are a mad scientist, creating outlandish inventions and unusual experiments.', 'You defend the kingdom against an invading army, leading armies and proving your bravery in battle.', 'You are a bold navigator, exploring unknown seas and discovering islands full of treasures.', 'You are a master in the art of stealth, moving in the shadows and carrying out secret missions.', 'You are a renowned chef, creating delicious dishes that delight palates around the world.', 'You investigate complex crimes as a skilled detective, solving intriguing mysteries.', 'You are a skilled diplomat, negotiating treaties and alliances to maintain peace between nations.', 'You are a powerful shaman, channeling spiritual energies to heal and protect.', 'You develop magical applications for enchanted devices, improving peoples lives with your inventions.', 'You are a champion in fighting tournaments, demonstrating your skill in hand-to-hand combat.', 'You are a visionary architect, designing futuristic cities and impressive structures.', 'You are a psychic with supernatural abilities, exploring minds and predicting the future.', 'You are a famous film director, creating epic stories that captivate audiences.', 'You are an astronomer and you discover a new planet, expanding our knowledge of the cosmos.', 'You are an expert in survival, facing the dangers of the world with ingenuity and bravery.', 'You are a talented musician who plays massive concerts, filling the air with captivating melodies.', 'You are an underwater explorer, diving into the depths to discover forgotten treasures.', 'You are a renowned fashion designer, creating trends and dressing people with your unique style.', 'You are a revolutionary leader, fighting for a better world and leading the masses to freedom.', 'You are a doctor who discovers a cure for a deadly disease, saving countless lives.', 'You are a computer hacker, navigating cyberspace and revealing digital secrets.', 'You are a botanical gardener who finds a rare plant, unraveling its unique properties.', 'You are a mythbuster, exploring legends and discovering the truth behind the tales.', 'You are an archaeologist who unearths an ancient city, revealing the secrets of past civilizations.', 'You are a respected spiritual leader, guiding others towards enlightenment and inner peace.', 'You are a professional player, competing in elite tournaments and demonstrating your skill in games.',
];
