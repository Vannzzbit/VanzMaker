let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
     Version 4.0.1
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', ' *Beli SC Xynoz?55K* ', 'status@broadcast')
}
handler.help = ['cekversi']
handler.tags = ['info']
handler.command = /^(cekversi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 
 