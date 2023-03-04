import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `Discord: https://discord.gg/MQtpnynY`,wm + '\n\n' + botdate, giflogo, [['Thanks','.ytowner']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: 'https://discord.gg/MQtpnynY',
                        mediaType: 2,
                        description: 'Discorx',
                        title: bottime,
                        body: 'Bot Whatsapp',          previewType: 1,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}


handler.help = ['discord']
handler.tags = ['info']
handler.command = ['discord']
export default handler
