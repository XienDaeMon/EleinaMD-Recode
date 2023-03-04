import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `💌 Developer Bot `, `Kang Recode SC`, `akmalrizqullah51@gmail.com`, `🇮🇩 Indonesia`, `📍 https://discord.gg/MQtpnynY`, `👤 100+ Sub Sc Recode Turun`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🎈 ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ`, `📵 ᴅᴏɴᴛ sᴘᴀᴍ/ᴄᴀʟʟ ᴍᴇ 😢`, `ɴᴏᴛʜɪɴɢ`, `🇮🇩 Indonesia`, `📍 https://discord.gg/MQtpnynY`, `100+ Sub Sc Recode Turun`]
  ], fkontak)
  await m.reply(`Woi @${m.sender.split(`@`)[0]} Jangan Spam Chat Owner Ya Anj`)
  } 
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
