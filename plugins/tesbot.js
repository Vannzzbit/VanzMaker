import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `_๐Hallo Ganteng/Cantik_\n\nโฐโบ *ัฦฮฑษชฮทฮฑ-สแดแดแดข | สั xัฮทแดแดข*
โฒโฒโญโโโโโฎ
โญโฎโโโโโโโญโฎ
โโฐโซโฝโฝโฝโฃโฏโ
โฐโโซโณโณโณโฃโโฏ
โฒโฒโโโโโโ
โฒโฒโโโโโโ
โโโฐโโฏโฐโโฏ
`

let audioName = "PTT-20220913-WA0639.opus";
let audioPTT = fs.readFileSync('./mp3/' + audioName)

        conn.sendFile(m.chat, audioPTT, '', '', m, true, { ptt: true })
await conn.sendButton(m.chat, `โโโโโโโขElaina-Botzโโโโโโโ\n\nHai Kak ${wish()}\n\nJangan Spam Bot Yah Kak ^_^\n\n๐๐ก๐๐๐  ๐ฉ๐๐ ๐๐ช๐ฉ๐ฉ๐ค๐ฃ ๐๐๐ก๐ค๐ฌ ๐ฉ๐ค ๐๐๐จ๐ฅ๐ก๐๐ฎ ๐ฉ๐๐ ๐ข๐๐ฃ๐ช โฉ\n`,wm + '\n\n' + botdate, thumb, [['โข Click Here โข','/menu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'ัฦฮฑษชฮทฮฑ-สแดแดแดข | สั xัฮทแดแดข',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sgh
                      }}
})
}
handler.tags = ['info', 'main']
handler.customPrefix = /^(help|?|p|tes|test|bot|bang)$/i
handler.command = new RegExp

handler.register = false
handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function wish() {
    let wishloc = ''
  const time = moment.tz('Asia/Kolkata').format('HH')
  wishloc = ('Hi')
  if (time >= 0) {
    wishloc = ('Selamat Malam๐')
  }
  if (time >= 4) {
    wishloc = ('Selamat Pagi๐')
  }
  if (time >= 12) {
    wishloc = ('Selamat Siangโ๏ธ')
  }
  if (time >= 16) {
    wishloc = ('๏ธ Selamat Malam๐')
  }
  if (time >= 23) {
    wishloc = ('Selamat Malam๐')
  }
  return wishloc
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}