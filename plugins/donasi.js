import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
	let url = 'https://telegra.ph/file/e795f25d5010e98fbd1cf.jpg'
	conn.sendButton(m.chat, '〔 Dᴏɴᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕╭─「_• Pulsa •_」\n│ • Tri [0895801290205]\n╰────\n\n╭─「_• Dana/Ovo •_」\n│ • Dana [0895801290205]\n│ • Ovo [0895801290205]\n╰────\n\n_◛˖ Ingin Donasi? Chat nomor owner_', wm, await(await fetch(url)).buffer(), [['Owner',`/owner`]],m)
}
handler.command = /^(donasi|dns)$/i
handler.tags = ['info']
handler.help = ['donasi']
handler.premium = false
handler.limit = false

export default handler

// 📮 Made In Xynoz 
// Subscribe YouTube Xynoz!
// Tq To Jangan Di Hpus!!
