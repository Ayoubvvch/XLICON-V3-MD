
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑-𝐌𝐃    𝐁𝐎𝐓                                                //
//                                                                                                      // 
//                                         Ｖ：3.0                                                      // 
//                                                                                                      // 
//              ██╗  ██╗██╗     ██╗ ██████╗ ██████╗ ███╗   ██╗      ██╗   ██╗██████╗                    //
//              ╚██╗██╔╝██║     ██║██╔════╝██╔═══██╗████╗  ██║      ██║   ██║╚════██╗                   //
//                ╚███╔╝ ██║     ██║██║     ██║   ██║██╔██╗ ██║█████╗██║   ██║ █████╔╝                  //
//               ██╔██╗ ██║     ██║██║     ██║   ██║██║╚██╗██║╚════╝╚██╗ ██╔╝ ╚═══██╗                   //
//              ██╔╝ ██╗███████╗██║╚██████╗╚██████╔╝██║ ╚████║       ╚████╔╝ ██████╔╝                   //
//              ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝        ╚═══╝  ╚═════╝                    //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
 //  * @project_name : XLICON-V3-MD
 //  * @author : salmanytofficial
 //  * @youtube : https://www.youtube.com/@s4salmanyt
//   * @description : XLICON-V3 ,A Multi-functional whatsapp user bot.
//*
//* 
//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//Instagram: unicorn_xeon13
//Telegram: t.me/ahmmitech
//GitHub: @salmanytofficial
//WhatsApp: +923184070915
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon
//   * Created By Github: DGXeon.
//   * Credit To Xeon
//   * © 2024 XLICON-V3-MD.
// ⛥┌┤
// */

const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//owmner v card
//________________________________________________________________________________________________________
global.ytname = process.env.YT_NAME || "YT: 𝘼𝙘𝙈𝙤𝙙𝙨" //ur yt chanel name
//________________________________________________________________________________________________________
global.socialm = process.env.MEDIA || "GitHub: 𝘼𝙘𝙈𝙤𝙙𝙨" //ur github or insta name
//________________________________________________________________________________________________________
global.location = process.env.GL_INFO || "Morocco, tanger, Tetouan" //ur location
//________________________________________________________________________________________________________

//new
//________________________________________________________________________________________________________
global.botname = process.env.BOT_NAME || '𝘼𝙘𝙈𝙤𝙙𝙨-V3-MD' //ur bot name
//________________________________________________________________________________________________________
global.ownernumber = process.env.SUDO || '212614389153' //ur owner number
//________________________________________________________________________________________________________
global.ownername = process.env.SUDO_NAME || '𝘼𝙘𝙈𝙤𝙙𝙨' //ur owner name
//________________________________________________________________________________________________________
global.websitex = process.env.YT_LINK || "https://youtube.com/@𝘼𝙘𝙈𝙤𝙙𝙨"
//________________________________________________________________________________________________________
global.wagc = process.env.GL_PUSH || "https://whatsapp.com/channel/0029VaINgEZK0IBaK1nDtE3f"
//________________________________________________________________________________________________________
global.themeemoji = process.env.GL_EMOJI || '🥹'
//________________________________________________________________________________________________________
global.wm = process.env.GL_WM || "© ᴬᶜᴹᵒᵈˢ"
//________________________________________________________________________________________________________
global.botscript = process.env.GL_SC || 'https://github.com/salmanytofficial/𝒜𝒸𝑀𝑜𝒹𝓈-V3-MD' //script link
//________________________________________________________________________________________________________
global.packname = process.env.PACK_NAME || "𝒜𝒸𝑀𝑜𝒹𝓈-𝐕𝟑"
//________________________________________________________________________________________________________
global.author = process.env.AUTHER_NAME || "ᗰᗩᗪE ᗷY 𝒜𝒸𝑀𝑜𝒹𝓈"
//________________________________________________________________________________________________________
global.creator = process.env.GL_DEVS || "212614389153@s.whatsapp.net"
//________________________________________________________________________________________________________
global.xprefix = process.env.PREFIX || '.'
//________________________________________________________________________________________________________
global.premium = process.env.GL_VIP || ["212614389153"] // Premium User
//________________________________________________________________________________________________________
global.hituet = 0
//________________________________________________________________________________________________________

//bot sett
//________________________________________________________________________________________________________
global.typemenu = process.env.MENU_DESIGN || 'v4' // menu type 'v1' => 'v8'
//________________________________________________________________________________________________________
global.typereply = process.env.REPLY_TYPE || 'v2' // reply type 'v1' => 'v3'
//________________________________________________________________________________________________________
global.autoblocknumber = process.env.AUTO_BAN || '213' //set autoblock country code
//________________________________________________________________________________________________________
global.antiforeignnumber = process.env.AUTO_BLOCK || '213' //set anti foreign number country code
//________________________________________________________________________________________________________
global.welcome = process.env.WELCOME_MSG || true //welcome/left in groups
//________________________________________________________________________________________________________
global.anticall = process.env.GL_NOCALL || false //bot blocks user when called
//________________________________________________________________________________________________________
global.autoswview = process.env.AUTO_STATUS_SEEN || true //auto status/story view
//________________________________________________________________________________________________________
global.adminevent = process.env.ANNOUNCE_MSG  || true //show promote/demote message
//________________________________________________________________________________________________________
global.groupevent = process.env.GROUP_ANNOUNCE_MSG || true //show update messages in group chat
//________________________________________________________________________________________________________


//msg
global.mess = {
	limit: '_*لقد تجاوزت الحد!*_',
	nsfw: '_*تم تعطيل المحتوى الخاص بالكبار في هذه المجموعة، يرجى إعلام المسؤول لتمكينه*_',
    done: '_*تم ✓*_',
    error: '_*لقد حدث خطأ في تنفيذ هذا*_',
    success: '_*ها هو!*_'
};
//thumbnail
global.thumb = fs.readFileSync('./XliconMedia/theme/xliconpic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
