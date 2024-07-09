import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *Ya ᥱs𝗍ᥲ́s registrado*\n\n¿𝗊ᥙіᥱrᥱ ᥎᥆ᥣ᥎ᥱr ᥲ rᥱgіs𝗍rᥲrsᥱ?\n\n💬 ᥙsᥱ ᥱs𝗍ᥱ ᥴ᥆mᥲᥒძ᥆ para *eliminar su registro*\n*${usedPrefix}unreg* <ᥒᥙ́mᥱr᥆ ძᥱ serie>`
  if (!Reg.test(text)) throw `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *𝖿᥆rmᥲ𝗍᥆ іᥒᥴ᥆rrᥱᥴ𝗍᥆*\n\n📝 ᥙs᥆ ძᥱᥣ ᥴ᥆mᥲᥒძ᥆: *${usedPrefix + command} nombre.edad*\n [ 💡 ] ᥱȷᥱm⍴ᥣ᥆ : *${usedPrefix + command}* ${name2}.18`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥱᥣ ᥒ᥆mᑲrᥱ ᥒ᥆ ⍴ᥙᥱძᥱ ᥱs𝗍ᥲr ᥎ᥲᥴі́᥆*'
  if (!age) throw '🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *ᥣᥲ ᥱძᥲძ ᥒ᥆ ⍴ᥙᥱძᥱᥱ ᥱs𝗍ᥲr ᥎ᥲᥴі́ᥲ*'
  if (name.length >= 30) throw '*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥱᥣ ᥒ᥆mᑲrᥱ es ძᥱmᥲsіᥲძ᥆ largo*' 
  age = parseInt(age)
  if (age > 100) throw '*Pellé quiere jugar con el bot?*'
  if (age < 5) throw '*Eres menor, no  puedes registrarte en BaileyBot-MD*'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  global.db.data.users[m.sender].money += 600
  global.db.data.users[m.sender].limit += 20
  global.db.data.users[m.sender].exp += 500
  global.db.data.users[m.sender].joincount += 100
 let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)    
m.react('📩') 
let regbot = `👤 𝗥 𝗘 𝗚 𝗜 𝗦 𝗧 𝗥 𝗢 👤
•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
「💭」𝗡𝗼𝗺𝗯𝗿𝗲: ${name}
「✨️」𝗘𝗱𝗮𝗱: ${age} años
•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
「🎁」𝗥𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗮𝘀:
• 10 Estrellas 🌟
• 5 Coins 🪙
• 245 Experiencia 💸
• 12 Tokens 💰
•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
${packname}`
conn.sendMessage(m.chat, {
text: regbot,
contextInfo: {
externalAdReply: {
title: '⊱『✅𝆺𝅥 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗗𝗢(𝗔) 𝆹𝅥✅』⊰',
body: wm, 
thumbnaiUrl: md, 
sourceUrl: channel,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true,
}}}, { quoted: fkontak })
//await m.reply(`${sn}`)        
}
handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar'] 

export default handler