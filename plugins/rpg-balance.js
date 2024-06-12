let handler = async (m, {usedPrefix}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  let name = conn.getName(who);
  let db = await conn.profilePictureUrl(who, "image").catch((_) => "https://telegra.ph/file/51196406f47824ae14ddc.jpg");
  let bank = `
   ╭──────༺♡༻──────╮
    *𝙱𝙰𝙽𝙲𝙾 𝙳𝙴 𝙼𝙴𝙶𝚄𝙼𝙸𝙽 - 𝙱𝙾𝚃*
    
*👤 𝚄𝚂𝚄𝙰𝚁𝙸𝙾:* ${name}
*💎 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂:* ${global.db.data.users[who].limit} 💎
*☯️ 𝚃𝙾𝙺𝙴𝙽𝚂:* ${global.db.data.users[who].joincount} ☯️

*CON EL BANCO DE MEGUMIN - BOT SUS DIAMANTES ESTARAN A SALVO*
   ╰──────༺♡༻──────╯`.trim();
  conn.sendMessage(
    m.chat,
    {
      image: {
        url: "https://telegra.ph/file/51196406f47824ae14ddc.jpg",
      },
      caption: bank,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          title: `RPG - BANK`,
          sourceUrl: "http://paypal.me/DorratBotOficial",
          mediaType: 1,
          showAdAttribution: true,
          thumbnailUrl: "https://telegra.ph/file/51196406f47824ae14ddc.jpg",
        },
      },
    },
    {
      quoted: m,
    }
  );
};
handler.help = ["bal"];
handler.tags = ["xp"];
handler.command = ["bal", "diamantes", "diamond", "balance", "banco"];
export default handler;
