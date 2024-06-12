var handler = async (m, { conn }) => {
  const players = [];
  const impostorIndex = Math.floor(Math.random() * 3); // Se elige aleatoriamente quién será el impostor

  conn.sendMessage(m.chat, { text: `🔍 Bienvenido a "Encuentra al Impostor" 🔍\n\nEnvía "yo" para participar.` }, { quoted: m });

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  while (players.length < 3) {
    const response = await new Promise(resolve => {
      conn.onMessage(m => {
        if (m.key.remoteJid === conn.user.jid) return;
        if (!m.message || m.key.fromMe) return;
        resolve(m.message.conversation.toLowerCase().trim());
      });
    });

    if (response === 'yo' && !players.includes(m.sender)) {
      players.push(m.sender);
      await conn.sendMessage(m.chat, { text: `✅ ${m.sender.split('@')[0]} se ha unido al juego.` }, { quoted: m });
    }
  }

  for (let i = 0; i < players.length; i++) {
    if (i !== impostorIndex) {
      await conn.sendMessage(m.chat, { text: `✅ ${players[i].split('@')[0]} ¡Estás a salvo! No eres el impostor.` }, { quoted: m });
    } else {
      await conn.sendMessage(m.chat, { text: `❌ ${players[i].split('@')[0]} ¡Has sido eliminado! Eres el impostor.` }, { quoted: m });
    }
    await sleep(1000);
  }

  const impostor = players[impostorIndex];
  await conn.sendMessage(m.chat, { text: `🎭 El impostor era ${impostor.split('@')[0]}.` }, { quoted: m });
};

handler.help = ['impostor'];
handler.tags = ['game'];
handler.command = /^impostor$/i;
handler.group = true;

export default handler;
