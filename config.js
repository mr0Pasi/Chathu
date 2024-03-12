import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['94717361129', 'nansoffc', true],
  ['94717361129']
] // nomor owner

global.mods = ['94717361129'] 
global.prems = ['94717361129', '94717361129']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  lann: 'https://api.betabotz.eu.org'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.betabotz.eu.org': 'nananakorang'
}

// Apikey lu
global.lann = 'nananakorang'

// setting limit user
global.limit = 69

// Sticker WM
global.packname = 'Sticker' 
global.author = '@IC' 
//--info NS [ NANS ]
global.NSnama = 'Simple WhatsApp Bot'
global.NSig = 'https://www.instagram.com/' 
global.NSgc = 'https://wa.me/94717361129?text=.menu'
global.NSthumb = 'https://i.ibb.co/Bt5GrzK/serene-by-nansoffc-simple-bot-whatsapp.jpg'

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.eror = 'Error'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // max warning

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
